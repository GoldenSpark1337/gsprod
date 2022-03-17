 export interface IUser {
    id: number;
    displayName: string;
    email: string;
    password: string;
    token: string;
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