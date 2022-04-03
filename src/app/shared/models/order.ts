export interface IOrderToCreate {
    basketId: string;
}

export interface IOrderItem {
    productId: number;
    title: string;
    image: string;
    price: number;
}

export interface IOrder {
    id: number;
    email: string;
    orderDate: Date;
    orderItems: IOrderItem[];
    status: string;
    total: number;
}