export default class Coord {
    constructor(readonly lat: number, readonly long: number) {
        if (lat < -90 || lat > 90) throw new Error("invalid latitude");
        if (long < -180 || long > 180) throw new Error("invalid longitude");
    }
}