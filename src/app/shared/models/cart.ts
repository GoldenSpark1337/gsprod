import { v4 as uuidv4 } from 'uuid';
export interface ICart {
    id: string;
    items: ICartItem[];
    clientSecret?: string;
    paymentIntentId?: string;
}

export interface ICartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    type: string;
    user: string;
}

export class Cart implements ICart {
    id = uuidv4();
    items: ICartItem[] = [];
}

export interface ICartTotals {
    discount: number;
    subTotal: number;
    total: number;
}
    