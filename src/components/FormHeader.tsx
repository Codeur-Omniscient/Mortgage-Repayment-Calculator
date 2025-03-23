import { useContext } from "react";
import { AppContext } from "../context/context";

const FormHeader = () => {
  const { onReset } = useContext(AppContext);

  return (
    <header className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
      <h1 className="text-sm font-semibold md:text-base">
        Mortgage Calculator
      </h1>
      <button
        type="button"
        className="cursor-pointer text-xs font-medium text-Slate300 underline md:text-sm"
        onClick={onReset}
      >
        Clear All
      </button>
    </header>
  );
};

export default FormHeader;
