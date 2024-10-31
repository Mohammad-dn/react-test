/* eslint-disable @typescript-eslint/no-explicit-any */
import { LatLng } from "leaflet";
import { Dispatch } from "react";

export interface Vehicle {
  name: string;
  id: number;
}
export interface RequestDrawerProps {
  startCoordinate: LatLng | null;
  endCoordinate: LatLng | null;
  handleSendRequest: () => void;
  vehicle: Vehicle;
  setVehicle: Dispatch<any>;
  RequestSendRequestLoading: boolean;
}

export interface SelectVehicleProps {
  searchTerm: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showVehicleResult: boolean;
  isVehicleExist: boolean;
  vehicleUsers: any;
  handleClickOnVehicle: (item: Vehicle) => void;
}
