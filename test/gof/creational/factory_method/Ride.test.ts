import Location from "../../../../src/gof/creational/factory_method/Location";
import Ride from "../../../../src/gof/creational/factory_method/Ride";
import Segment from "../../../../src/gof/creational/factory_method/Segment";

test("Deve criar uma corrida", () => {
    const ride = new Ride(-27.584905257808835, -48.545022195325124, new Date("2025-03-23T11:00:00"));
    const lastLocation = new Location(-27.584905257808835, -48.545022195325124, new Date("2025-03-23T11:00:00"));
    const newLocation = new Location(-27.496887588317275, -48.522234807851476, new Date("2025-03-23T12:00:00"));
    const segment = new Segment(ride.rideId, lastLocation, newLocation);
    ride.updateLocation(new Location(-27.496887588317275, -48.522234807851476, new Date("2025-03-23T12:00:00")));
    const fare = ride.calculateFare([segment]);
    expect(fare).toBe(44);
});