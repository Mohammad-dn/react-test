/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression, LatLng } from "leaflet";
import { useEffect, useState } from "react";
import { useMapContext } from "@/context";

interface MapProps {
  center: LatLngExpression;
  setSelectStartAndEnd: (value: boolean) => void;
}

const redIcon = new L.Icon({
  iconUrl: "/firstMarker.svg",
  iconSize: [32, 32],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

const greenIcon = new L.Icon({
  iconUrl: "/secondMarker.svg",
  iconSize: [32, 32],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

const UpdateMapCenter = ({ center }: { center: LatLngExpression }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, map.getZoom());
  }, [center, map]);
  return null;
};

const MapClickHandler = ({
  onClick,
}: {
  onClick: (latlng: LatLng) => void;
}) => {
  useMapEvent("click", (e) => onClick(e.latlng));
  return null;
};

export default function LeafletMap({ center, setSelectStartAndEnd }: MapProps) {
  const { setCoordinates }: any = useMapContext();
  const [markers, setMarkers] = useState<{
    start: LatLng | null;
    end: LatLng | null;
  }>({
    start: null,
    end: null,
  });

  const handleMapClick = (latlng: LatLng) => {
    if (!markers.start) {
      setMarkers({ start: latlng, end: null });
    } else if (!markers.end) {
      setMarkers((prev) => ({ ...prev, end: latlng }));
      setCoordinates(markers.start, latlng);
      setSelectStartAndEnd(true);
    } else {
      setMarkers({ start: latlng, end: null });
      setCoordinates(latlng, null);
      setSelectStartAndEnd(false);
    }
  };

  return (
    <MapContainer
      className="w-full h-full z-0"
      center={center}
      zoom={14}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      {markers.start && (
        <Marker position={markers.start} icon={redIcon}>
          <Popup>مبدا</Popup>
        </Marker>
      )}
      {markers.end && (
        <Marker position={markers.end} icon={greenIcon}>
          <Popup>مقصد</Popup>
        </Marker>
      )}

      <UpdateMapCenter center={center} />
      <MapClickHandler onClick={handleMapClick} />
    </MapContainer>
  );
}
