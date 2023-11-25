import { ChangeEvent, useState } from "react";

interface UseFormProps<T> {
  [key: string]: T;
}

export function useForm<T>(initialState: UseFormProps<T>) {
  const [formValues, setFormValues] = useState<UseFormProps<T>>(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues: UseFormProps<T>) => {
      const result = {
        ...prevValues,
        [name]: value,
      } as UseFormProps<T>;

      return result;
    });
  };

  return { inputValue: formValues, setInputValue: handleInputChange };
}
