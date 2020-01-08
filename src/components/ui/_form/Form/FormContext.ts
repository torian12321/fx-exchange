import React from "react";

const FormContext = React.createContext({});

const useForm: any = () => {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Form component`
    );
  }

  return context;
};

export { FormContext, useForm };
