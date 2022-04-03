export interface ITrack {
    id: number;
    title: string;
    image: string;
    file: string;
    releaseDate: Date;
    price: number;
    description: string;
    mp3File: string;
    wavFile: string;
    bpm: string;
    collaborator: string;
    user: string;
    genre: string;
    subgenre: string;
    key: string;
    plays: number;
    likes: number;
    productType: string;
}