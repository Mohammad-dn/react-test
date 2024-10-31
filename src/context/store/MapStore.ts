import { LatLng } from "leaflet";
import { useState } from "react";

export interface MapStoreType {
  startCoordinate: LatLng | null;
  endCoordinate: LatLng | null;
  setCoordinates: (start: LatLng | null, end: LatLng | null) => void;
}

export const useMapStore = (): MapStoreType => {
  const [startCoordinate, setStartCoordinate] = useState<LatLng | null>(null);
  const [endCoordinate, setEndCoordinate] = useState<LatLng | null>(null);

  const setCoordinates = (start: LatLng | null, end: LatLng | null) => {
    setStartCoordinate(start);
    setEndCoordinate(end);
  };

  return { startCoordinate, endCoordinate, setCoordinates };
};
