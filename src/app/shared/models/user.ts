 export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    image: string;
    location: string;
    biography: string;
    playlists: any[];
    tracks: any[];
    kits: any[];
    services: any[];
    recordLabel?: any;
}