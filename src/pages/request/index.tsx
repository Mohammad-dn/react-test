import LeafletMap from "@/components/ui/map";
import { useSendRequest } from "./hook";
import { RequestDrawer } from "./partials";
import { useSearchParams } from "react-router-dom";
import { Suspense } from "react";
import Cookies from "js-cookie";

export const SendRequestPage = () => {
  const {
    center,
    handleSendRequest,
    selectStartAndEnd,
    setSelectStartAndEnd,
    setVehicle,
    vehicle,
    endCoordinate,
    startCoordinate,
    RequestSendRequestLoading,
  } = useSendRequest();
  const [searchParams] = useSearchParams();

  const userAccsess = searchParams.get("isAccsess");
  const token = Cookies.get("userToken");

  if (!userAccsess && !token) return <div>شما دسترسی به این صفحه را نداری</div>;

  return (
    <div className="h-[80vh] w-11/12 relative mx-auto mt-10">
      <Suspense fallback={<>در حال بارگذاری نقشه...</>}>
        <LeafletMap
          setSelectStartAndEnd={setSelectStartAndEnd}
          center={center}
        />
      </Suspense>
      {selectStartAndEnd && (
        <RequestDrawer
          RequestSendRequestLoading={RequestSendRequestLoading}
          vehicle={vehicle}
          setVehicle={setVehicle}
          handleSendRequest={handleSendRequest}
          endCoordinate={endCoordinate}
          startCoordinate={startCoordinate}
        />
      )}
    </div>
  );
};
