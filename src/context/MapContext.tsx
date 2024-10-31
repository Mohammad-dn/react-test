import { createContext, useContext, ReactNode } from "react";
import { MapStoreType, useMapStore } from "./store";

const MapContext = createContext<MapStoreType | undefined>(undefined);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const mapStore = useMapStore();

  return <MapContext.Provider value={mapStore}>{children}</MapContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMapContext = () => {
  const context = useContext(MapContext);

  return context;
};
