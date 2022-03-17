export interface ITrack {
    id: number;
    title: string;
    user: string;
    artwork: string;
    srcPath: string;
    price: number;
    releaseDate: Date;
    bpm: string;
    collaborator: string;
    genre: string;
    subgenre: string;
    key: string;
    plays: number;
    likes: number;
}