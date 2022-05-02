export class TrackParams {
    sortBy: string = "";
    genreId?: number;
    minPrice = 0;
    maxPrice = 999.9;
    KeyId?: number;
    minBpm = 0;
    maxBpm = 250;
    search?: string;
    isDraft: boolean;

    public constructor(init?:Partial<TrackParams>) {
        Object.assign(this, init);
    }
}