export interface IProduct {
    id: number;
    title: string;
    image: string;
    file: string;
    releaseDate: Date;
    price: number;
    description: string;
    productType?: any;
    user: string;
}