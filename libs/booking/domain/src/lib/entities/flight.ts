export type Flight = {
  readonly id: FlightId;
  readonly name: FlightName;
  readonly description: FlightDescription;
};

export type FlightId = number & { __brand: 'FlightId' };
export function createFlightId(id: number): FlightId {
  return id as FlightId;
}
export type FlightName = string & { __brand: 'FlightName' };
export function createFlightName(name: string): FlightName {
  return name as FlightName;
}
export type FlightDescription = string & { __brand: 'FlightDescription' };
export function createFlightDescription(
  description: string
): FlightDescription {
  return description as FlightDescription;
}
