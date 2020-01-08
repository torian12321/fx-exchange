import React from "react";
import { FormContext } from "./FormContext";
import { IForm } from "./Form.interfaces";

const Form = (props: IForm) => {
  const { children, initialValues = {}, onSubmit, className } = props;
  const [values, setValues]: [any, any] = React.useState(initialValues);

  const resetValues = () => {
    setValues(initialValues);
  };
  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault();
    }

    if (onSubmit) {
      onSubmit(values);
    }
  };

  const getValue = (fieldName: string) => values[fieldName];
  const setValue = (fieldName: string, value: any) => {
    setValues({
      ...values,
      [fieldName]: value
    });
  };

  return (
    <FormContext.Provider
      value={{
        values,
        setValue,
        getValue,
        submit: handleSubmit,
        reset: resetValues
      }}
    >
      <form onSubmit={handleSubmit} className={className}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export { Form };
