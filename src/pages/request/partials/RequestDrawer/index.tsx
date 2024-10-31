import { LocationIcon } from "@/assets";
import { Button } from "@/components";
import { useFetchVehicleUsers } from "./hook";
import { RequestDrawerProps } from "./types";
import { SelectVehicle } from "./partials";

export const RequestDrawer = ({
  startCoordinate,
  endCoordinate,
  handleSendRequest,
  setVehicle,
  RequestSendRequestLoading,
}: RequestDrawerProps) => {
  const {
    vehicleUsers,
    vehicleUsersLoading,
    vehicleUsersError,
    isVehicleExist,
    handleClickOnVehicle,
    handleInputChange,
    searchTerm,
    showVehicleResult,
  } = useFetchVehicleUsers({ setVehicle });

  if (vehicleUsersError) return <div>خطا در دریافت اطلاعات</div>;

  return (
    <div className="w-3/5 px-4 py-5 flex flex-col absolute gap-2 -bottom-0 right-0 left-0 mx-auto shadow-md rounded-2xl border border-neutral-400 bg-white">
      <div className="flex flex-col gap-2">
        <div className="flex">
          <LocationIcon color="red" />
          <span className="text-red-700">
            مبدا: {startCoordinate?.lat}, {startCoordinate?.lng}
          </span>
        </div>
        <div className="flex">
          <LocationIcon color="green" />
          <span className="text-green-700">
            مقصد: {endCoordinate?.lat}, {endCoordinate?.lng}
          </span>
        </div>
      </div>
      <SelectVehicle
        handleClickOnVehicle={handleClickOnVehicle}
        handleInputChange={handleInputChange}
        isVehicleExist={isVehicleExist}
        searchTerm={searchTerm}
        showVehicleResult={showVehicleResult}
        vehicleUsers={vehicleUsers}
      />
      <Button
        onClick={handleSendRequest}
        disabled={!isVehicleExist || vehicleUsersLoading}
        className={`rounded-2xl  ${!vehicleUsers ? "bg-gray-300" : ""}`}
      >
        {RequestSendRequestLoading ? "...در حال ارسال درخواست" : "ثبت درخواست"}
      </Button>
    </div>
  );
};
