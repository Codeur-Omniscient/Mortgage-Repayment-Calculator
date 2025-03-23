export type FormInputs = {
  amount: number | null;
  years: number | null;
  rate: number | null;
  type?: "repayment" | "interest-only";
};

export type MortgageResult = {
  monthlyPayment: string | null;
  totalPayment: string | null;
};
