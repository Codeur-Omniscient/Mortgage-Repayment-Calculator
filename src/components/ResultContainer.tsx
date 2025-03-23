import { useContext } from "react";
import ResultCompleted from "./ResultCompleted";
import ResultEmpty from "./ResultEmpty";
import { AppContext } from "../context/context";

const ResultContainer = () => {
  const { result } = useContext(AppContext);
  return (
    <div className="bg-Slate800 p-4 md:rounded-bl-[50px] md:p-8">
      {result.monthlyPayment ? <ResultCompleted /> : <ResultEmpty />}
    </div>
  );
};

export default ResultContainer;
