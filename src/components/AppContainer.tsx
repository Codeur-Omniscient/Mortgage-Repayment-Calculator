import FormContainer from "./FormContainer";
import ResultContainer from "./ResultContainer";

const AppContainer = () => {
  return (
    <div className="grid w-full grid-cols-1 overflow-hidden bg-white shadow-2xl md:w-7/12 md:grid-cols-2 md:rounded-2xl">
      <FormContainer />
      <ResultContainer />
    </div>
  );
};

export default AppContainer;
