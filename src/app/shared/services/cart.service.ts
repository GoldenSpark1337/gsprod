import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cart, ICart, ICartItem, ICartTotals } from '../models/cart';
import { IProduct } from '../models/product';

@Injectable({providedIn: 'root'})

export class CartService {
    private baseUrl = environment.apiUrl + "basket/";
    private baseUrlPayment = environment.apiUrl + "payment/";
    private cartSource = new BehaviorSubject<ICart>(null);
    cart$ = this.cartSource.asObservable();
    private cartTotalSource = new BehaviorSubject<ICartTotals>(null);
    cartTotal$ = this.cartTotalSource.asObservable();
    private inCartSource = new BehaviorSubject<boolean>(false);
    inCart$ = this.inCartSource.asObservable();

    constructor(private http: HttpClient) { }

    createPaymentIntent() {
        return this.http.post(this.baseUrlPayment + this.getCurrentCart().id, {}).pipe(
            map((cart: ICart) => {
                this.cartSource.next(cart);
            })
        );
    }

    getCart(id: string) {
        return this.http.get(this.baseUrl + "?id=" + id).pipe(
            map((cart: ICart) => {
                this.cartSource.next(cart);
                this.calculateTotals();
            })
        );  
    }
    
    setCart(cart: ICart) {
        return this.http.post(this.baseUrl, cart).subscribe((response: ICart) => {
            this.cartSource.next(response);
            console.log(response)
            this.calculateTotals();
        }, error => {
            console.log(error);
        });
    }

    getCurrentCart() {
        return this.cartSource.value;
    }

    addItemToCart(item: IProduct) {
        const itemToAdd: ICartItem = this.mapProductToCartItem(item);
        console.log(itemToAdd)
        const cart = this.getCurrentCart() ?? this.createCart();
        console.log(cart)
        cart.items = this.updateCart(cart.items, itemToAdd);
        console.log(cart.items)
        this.setCart(cart);
    }

    findInCart(itemId: number) {
        const cart = this.getCurrentCart();
        const index = cart?.items.some(i => i.id === itemId);
        console.log(index);
        if (!index) {
            this.inCartSource.next(false);
        } else {
            this.inCartSource.next(true);
        }
    }

    removeItemFromCart(item: ICartItem) {
        const cart = this.getCurrentCart();
        if (cart.items.some(x => x.id === item.id)) {
            cart.items = cart.items.filter(i => i.id !== item.id);
            if (cart.items.length > 0) {
                this.setCart(cart);
            } else {
                this.deleteCart(cart);
            }
        }
    }

    deleteLocalCart(cartId: string) {
        this.cartSource.next(null);
        this.cartTotalSource.next(null);
        localStorage.removeItem("cart_id")
    }
    
    deleteCart(cart: ICart) {
        return this.http.delete(this.baseUrl + "?id=" + cart.id).subscribe(() => {
            this.cartSource = null;
            this.cartTotalSource = null;
            localStorage.removeItem("cart_id")
        }, error => console.log(error));
    }
    
    private updateCart(items: ICartItem[], itemToAdd: ICartItem) {
        const index = items.findIndex(i => i.id === itemToAdd.id);
        if (index === -1) {
            items.push(itemToAdd);
        }
        return items;
    }

    private createCart(): ICart {
        const cart = new Cart();
        localStorage.setItem("cart_id", cart.id);
        return cart;
    }

    private mapProductToCartItem(item: IProduct): ICartItem {
        console.log(item.user);
        console.log("maped!!!");
        return {
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            type: item.productType,
            user: item.user
        }
    }

    private calculateTotals() {
        const cart = this.getCurrentCart();
        const subTotal = cart.items.reduce((res, p) => p.price + res, 0);
        const discount = 0;
        const total = subTotal + discount;
        this.cartTotalSource.next({discount, subTotal, total});
    }
}