/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePostWebapiRequestSendRequest } from "@/api/endpoints/request/request";
import { useMapContext } from "@/context";
import Cookies from "js-cookie";
import { LatLngExpression } from "leaflet";
import { useState } from "react";
import { toast } from "sonner";

export const useSendRequest = () => {
  const center: LatLngExpression = [29.63744193374757, 52.50272672289071];
  const { startCoordinate, endCoordinate }: any = useMapContext();
  const [selectStartAndEnd, setSelectStartAndEnd] = useState(false);
  const token = Cookies.get("userToken");
  const [vehicle, setVehicle] = useState({
    name: "",
    id: 0,
  });
  const { mutate, isLoading: RequestSendRequestLoading } =
    usePostWebapiRequestSendRequest({
      mutation: {
        onSuccess: (res: any) => {
          toast.success(res?.data?.message, {
            position: "top-center",
          });
        },
        onError: (err) => {
          toast(err?.message);
        },
      },
    });
  const handleSendRequest = () => {
    mutate({
      data: {
        source: `${startCoordinate}`,
        destination: `${endCoordinate}`,
        userToken: `${token}`,
        vehicleUserTypeId: vehicle?.id,
      },
    });
  };
  return {
    setSelectStartAndEnd,
    selectStartAndEnd,
    center,
    handleSendRequest,
    setVehicle,
    startCoordinate,
    endCoordinate,
    vehicle,
    RequestSendRequestLoading,
  };
};
