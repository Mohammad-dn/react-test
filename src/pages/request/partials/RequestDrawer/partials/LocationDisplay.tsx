import { LatLng } from "leaflet";
import { LocationIcon } from "@/assets";

interface LocationDisplayProps {
  coordinate: LatLng | null;
  color: "red" | "green";
  label: string;
}

export const LocationDisplay = ({
  coordinate,
  color,
  label,
}: LocationDisplayProps) => (
  <div className="flex">
    <LocationIcon color={color} />
    <span className={`text-${color}-700`}>
      {label}: {coordinate?.lat}, {coordinate?.lng}
    </span>
  </div>
);
