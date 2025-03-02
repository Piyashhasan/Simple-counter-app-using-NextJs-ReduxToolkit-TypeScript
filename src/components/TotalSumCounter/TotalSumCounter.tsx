import { resetValue } from "@/redux/features/counterSlice/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";

const TotalSumCounter = () => {
  const { counterState } = useAppSelector((state) => state.counter);
  const totalValue = counterState.reduce((prev, current) => {
    return (prev += current.value);
  }, 0);

  // --- reset action dispatch ---
  const dispatch = useAppDispatch();
  const handleResetValue = () => {
    dispatch(resetValue());
  };

  return (
    <div className="bg-white my-5 p-5 text-center rounded-lg shadow-2xl">
      <h3 className="text-black text-[20px] font-semibold">
        Total count value - {totalValue}
      </h3>
      <button
        onClick={() => handleResetValue()}
        className="bg-blue-500 mt-3 px-10 py-[6px] text-white text-[12px] rounded-lg cursor-pointer hover:bg-blue-600"
      >
        RESET
      </button>
    </div>
  );
};

export default TotalSumCounter;
