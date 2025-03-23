import { useContext } from "react";
import { AppContext } from "../context/context";

const ResultCompleted = () => {
  const { result } = useContext(AppContext);
  return (
    <div className="flex flex-col justify-center space-y-4">
      <h2 className="text-base font-bold text-white">Your results</h2>
      <p className="text-sm text-Slate300">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </p>
      <div className="flex flex-col rounded-md bg-Slate900 px-3">
        <div className="flex flex-col space-y-2 border-b-2 py-3">
          <h3 className="text-sm text-Slate300">Your monthly repayments</h3>
          <p className="text-xl font-bold text-lime">{result.monthlyPayment}</p>
        </div>
        <div className="flex flex-col space-y-2 py-3">
          <h3 className="text-sm text-Slate300">
            Total you'll repay over the term
          </h3>
          <p className="text-lg font-bold text-white">{result.totalPayment}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCompleted;
