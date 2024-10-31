/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetWebapiRequestGetVehicleUsers } from "@/api/endpoints/request/request";
import { useDebounce } from "@/hooks";
import Cookies from "js-cookie";
import { Dispatch, useEffect, useRef, useState } from "react";
import { Vehicle } from "../types";

export const useFetchVehicleUsers = ({
  setVehicle,
}: {
  setVehicle: Dispatch<any>;
}) => {
  const token = Cookies.get("userToken") ?? "";
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showVehicleResult, setShowVehicleResult] = useState<boolean>(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const previousSearchTerm = useRef<string>("");

  const {
    data: vehicleUsers,
    isLoading: vehicleUsersLoading,
    isError: vehicleUsersError,
    refetch: refetchVehicleUsers,
  } = useGetWebapiRequestGetVehicleUsers(
    {
      SearchTerm: debouncedSearchTerm,
      UserToken: token,
    },
    {
      query: { enabled: false },
    }
  );

  useEffect(() => {
    if (
      debouncedSearchTerm.length > 1 &&
      debouncedSearchTerm !== previousSearchTerm.current
    ) {
      refetchVehicleUsers();
      previousSearchTerm.current = debouncedSearchTerm;
    }
  }, [debouncedSearchTerm, refetchVehicleUsers]);

  const isVehicleExist = (vehicleUsers as any)?.data?.data?.length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowVehicleResult(true);
  };

  const handleClickOnVehicle = (item: Vehicle) => {
    setVehicle(item);
    setShowVehicleResult(false);
    setSearchTerm(item.name);
  };

  return {
    vehicleUsers,
    vehicleUsersLoading,
    vehicleUsersError,
    isVehicleExist,
    handleClickOnVehicle,
    handleInputChange,
    searchTerm,
    showVehicleResult,
  };
};
