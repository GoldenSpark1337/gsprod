import { IProduct } from "./product";

 export interface IUser {
    id: number;
    username: string;
    email: string;
    token: string;
    roles: string[];
    firstName: string;
    lastName: string;
    image: string;
    location: string;
    biography: string;
    playlists: any[];
    tracks: any[];
    kits: any[];
    services: any[];
    products: IProduct[];
    recordLabel?: any;
}