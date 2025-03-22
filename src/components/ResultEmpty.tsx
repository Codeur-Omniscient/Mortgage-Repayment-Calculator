import emptyImg from "../assets/illustration-empty.svg";

const ResultEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div>
        <img src={emptyImg} alt="empty banner" />
      </div>
      <h2 className="text-base font-bold text-white">Results shown here</h2>
      <p className="text-center text-sm text-Slate300">
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be
      </p>
    </div>
  );
};

export default ResultEmpty;
