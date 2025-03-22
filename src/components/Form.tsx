import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputs } from "../types";
import { useState } from "react";
import icon from "../assets/icon-calculator.svg";

const Form = () => {
  // Focus states
  const [amountFocus, setAmountFocus] = useState(false);
  const [yearsFocus, setYearsFocus] = useState(false);
  const [rateFocus, setRateFocus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      amount: null,
      years: null,
      rate: null,
      type: undefined,
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-7 text-xs font-normal text-Slate500 md:text-sm"
    >
      <div>
        <label htmlFor="amount" className="mb-2 block">
          Mortgage Amount
        </label>
        <div className="relative">
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 flex w-10 items-center justify-center overflow-hidden border transition-colors ${amountFocus ? "bg-lime" : "bg-Slate100"} ${errors.amount ? "bg-red-500" : ""} `}
          >
            <span className="text-lg text-gray-700">£</span>
          </div>
          <input
            type="number"
            id="amount"
            placeholder="Enter the amount"
            className={`w-full rounded-md border px-3 py-2 pl-12 font-bold text-Slate900 placeholder:font-normal placeholder:text-gray-300 focus:outline-none ${
              errors.amount
                ? "border-red-500 focus:ring-red-500"
                : "border-Slate300 focus:border-lime"
            }`}
            {...register("amount", { required: true })}
            onFocus={() => setAmountFocus(true)}
            onBlur={() => setAmountFocus(false)}
          />
        </div>
        {errors.amount && (
          <p className="mt-1 text-sm text-red-600">This field is required</p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label htmlFor="years" className="mb-2 block">
            Mortgage Term
          </label>
          <div
            className={`flex overflow-hidden rounded border transition-colors ${
              yearsFocus ? "border-lime" : "border-gray-300"
            }`}
          >
            <input
              type="number"
              id="years"
              className={`w-full border px-3 py-2 pl-3 font-bold text-Slate900 focus:outline-none ${
                errors.years
                  ? "border-red-500 focus:ring-red-500"
                  : "border-Slate300 focus:border-lime"
              }`}
              {...register("years", { required: true })}
              onFocus={() => setYearsFocus(true)}
              onBlur={() => setYearsFocus(false)}
            />
            <div
              className={`flex w-20 items-center justify-center text-gray-600 transition-colors ${
                yearsFocus ? "bg-lime" : "bg-Slate100"
              } ${errors.years ? "bg-red-500" : ""}`}
            >
              years
            </div>
          </div>
          {errors.years && (
            <p className="mt-1 text-sm text-red-600">This field is required</p>
          )}
        </div>
        <div>
          <label htmlFor="rate" className="mb-2 block">
            Interest Rate
          </label>
          <div
            className={`flex overflow-hidden rounded border transition-colors ${
              rateFocus ? "border-lime" : "border-gray-300"
            }`}
          >
            <input
              type="number"
              step="0.01"
              id="rate"
              className={`w-full border px-3 py-2 pl-3 font-bold text-Slate900 focus:outline-none ${
                errors.rate
                  ? "border-red-500 focus:ring-red-500"
                  : "border-Slate300 focus:border-lime"
              }`}
              {...register("rate", { required: true })}
              onFocus={() => setRateFocus(true)}
              onBlur={() => setRateFocus(false)}
            />
            <div
              className={`flex w-10 items-center justify-center text-gray-600 transition-colors ${
                rateFocus ? "bg-lime" : "bg-Slate100"
              } ${errors.rate ? "bg-red-500" : ""}`}
            >
              %
            </div>
          </div>
          {errors.rate && (
            <p className="mt-1 text-sm text-red-600">This field is required</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full">
          <label
            htmlFor="repayment"
            className="flex w-full cursor-pointer items-center rounded-md border border-Slate500 p-3 hover:bg-gray-50 has-[:checked]:border-yellow-200 has-[:checked]:bg-yellow-50"
          >
            <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 has-[:checked]:border-yellow-400">
              <input
                id="repayment"
                type="radio"
                value="repayment"
                className="peer sr-only"
                {...register("type", { required: true })}
              />
              <div className="h-3 w-3 rounded-full bg-yellow-400 opacity-0 peer-checked:opacity-100"></div>
            </div>
            <span className="font-bold text-gray-700">Repayment</span>
          </label>
        </div>
        <div className="w-full">
          <label
            htmlFor="interest"
            className="flex w-full cursor-pointer items-center rounded-md border border-Slate500 p-3 hover:bg-gray-50 has-[:checked]:border-yellow-200 has-[:checked]:bg-yellow-50"
          >
            <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 has-[:checked]:border-yellow-400">
              <input
                id="interest"
                type="radio"
                value="interest-only"
                className="peer sr-only"
                {...register("type", { required: true })}
              />
              <div className="h-3 w-3 rounded-full bg-yellow-400 opacity-0 peer-checked:opacity-100"></div>
            </div>
            <span className="font-bold text-gray-700">Interest Only</span>
          </label>
        </div>
        {errors.type && (
          <p className="mt-1 text-sm text-red-600">This field is required</p>
        )}
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-lime py-3 font-bold hover:bg-yellow-300 md:max-w-md"
      >
        <img src={icon} alt="calculator icon" />
        <span className="text-sm text-Slate900">Calculate Repayment</span>
      </button>
    </form>
  );
};

export default Form;
