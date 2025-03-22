import Form from "./Form";
import FormHeader from "./FormHeader";

const FormContainer = () => {
  return (
    <div className="flex flex-col space-y-3 p-4 md:p-8">
      <FormHeader />
      <Form />
    </div>
  );
};

export default FormContainer;
