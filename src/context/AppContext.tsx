import { useCallback, useMemo, useState } from "react";
import { FormInputs, MortgageResult } from "../types";
import { AppContext, defaultContextValue } from "./context";
import { formatCurrency } from "../utils/utils";

type AppContextProps = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [data, setData] = useState<FormInputs>(defaultContextValue.data);
  const [result, setResult] = useState<MortgageResult>(
    defaultContextValue.result,
  );
  const [reset, setReset] = useState<boolean>(false);

  const handleCalculateRepayment = useCallback(
    (amount: number, termYear: number, interestRate: number) => {
      const monthlyRate: number = interestRate / 100 / 12;
      const totalPayments: number = termYear * 12;

      // Formule pour le remboursement mensuel
      const monthlyPayment: number =
        (amount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1);

      // Total sur la durée du prêt
      const totalAmount: number = monthlyPayment * totalPayments;

      //   Formater les données
      const formattedMonthly = formatCurrency(monthlyPayment);
      const formattedTotal = formatCurrency(totalAmount);

      setResult({
        monthlyPayment: formattedMonthly,
        totalPayment: formattedTotal,
      });
    },
    [setResult],
  );

  const handleCalculateInterest = useCallback(
    (amount: number, termYears: number, interestRate: number) => {
      const monthlyRate: number = interestRate / 100 / 12;
      const totalPayments: number = termYears * 12;

      // Mensualité = uniquement les intérêts
      const monthlyPayment: number = amount * monthlyRate;

      // Total = intérêts payés + remboursement du capital à la fin
      const totalAmount: number = monthlyPayment * totalPayments + amount;

      const formattedMonthly = formatCurrency(monthlyPayment);
      const formattedTotal = formatCurrency(totalAmount);

      setResult({
        monthlyPayment: formattedMonthly,
        totalPayment: formattedTotal,
      });
    },
    [setResult],
  );

  const handleReset = useCallback(() => {
    setData(defaultContextValue.data);
    setResult(defaultContextValue.result);
    setReset(true);
  }, [setData]);

  const contextValue = useMemo(
    () => ({
      data,
      result,
      reset,
      onCalculateRepayment: handleCalculateRepayment,
      onReset: handleReset,
      onCalculateInterest: handleCalculateInterest,
    }),
    [
      data,
      result,
      reset,
      handleCalculateRepayment,
      handleReset,
      handleCalculateInterest,
    ],
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
