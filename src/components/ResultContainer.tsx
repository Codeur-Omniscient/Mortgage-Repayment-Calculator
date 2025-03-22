import ResultCompleted from "./ResultCompleted";
import ResultEmpty from "./ResultEmpty";

const ResultContainer = () => {
  return (
    <div className="bg-Slate800 p-4 md:rounded-bl-[50px] md:p-8">
      {/* <ResultEmpty /> */}
      <ResultCompleted />
    </div>
  );
};

export default ResultContainer;
