/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchIcon } from "@/assets";
import { Input } from "@/components";
import { SelectVehicleProps, Vehicle } from "../types";

export const SelectVehicle = ({
  searchTerm,
  handleInputChange,
  showVehicleResult,
  isVehicleExist,
  vehicleUsers,
  handleClickOnVehicle,
}: SelectVehicleProps) => {
  return (
    <div className="relative">
      <div className="absolute left-4 top-[31%]">
        <SearchIcon color="black" size={[20, 20]} />
      </div>
      <Input
        type="text"
        className={`border w-full rounded-lg bg-neutral-100 px-4`}
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="نوع ماشین آلات"
      />
      {showVehicleResult && isVehicleExist && (
        <div className="bg-white z-10 absolute rounded-xl w-full border px-2 flex flex-col gap-4 py-1">
          {(vehicleUsers as any)?.data?.data?.map((item: Vehicle) => (
            <div
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                handleClickOnVehicle(item);
              }}
              className="rounded-md hover:bg-gray-100 transition-all duration-200 py-1 cursor-pointer px-4"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
