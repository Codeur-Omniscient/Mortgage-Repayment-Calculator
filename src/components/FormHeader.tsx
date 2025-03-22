const FormHeader = () => {
  return (
    <header className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
      <h1 className="text-sm font-semibold md:text-base">
        Mortgage Calculator
      </h1>
      <button
        type="button"
        className="text-Slate300 cursor-pointer text-xs font-medium underline md:text-sm"
      >
        Clear All
      </button>
    </header>
  );
};

export default FormHeader;
