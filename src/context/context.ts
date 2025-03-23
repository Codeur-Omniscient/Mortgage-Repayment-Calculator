import { createContext } from "react";
import { FormInputs, MortgageResult } from "../types";

type AppContextType = {
  data: FormInputs;
  result: MortgageResult;
  reset: boolean;
  onCalculateRepayment: (amount: number, year: number, rate: number) => void;
  onReset: () => void;
  onCalculateInterest: (amount: number, year: number, rate: number) => void;
};

export const defaultContextValue: AppContextType = {
  data: {
    amount: null,
    years: null,
    rate: null,
    type: undefined,
  },
  result: {
    monthlyPayment: null,
    totalPayment: null,
  },
  reset: false,
  onCalculateRepayment: () => {},
  onReset: () => {},
  onCalculateInterest: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContextValue);
