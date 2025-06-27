"use client";

import {useMemo, useState} from "react";
import {formatPhoneNumber} from "./format";
import {handleBlur, handleChange, handleKeyDown, validatePhone} from "./handlers";
import {PhoneInputReturn} from "./types";

export const usePhoneInput = (initialValue = ""): PhoneInputReturn => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const isValid = useMemo(() => error === null, [error]);
  const displayError = touched ? error : null;

  return {
    value,
    error,
    isValid,
    displayError,
    onChange: handleChange({formatPhoneNumber, validatePhone, setValue, setError, touched}),
    onKeyDown: handleKeyDown(),
    onBlur: handleBlur({validatePhone, value, setTouched, setError}),
    setValue: (newValue: string) => {
      const formatted = formatPhoneNumber(newValue);
      setValue(formatted);
      validatePhone(formatted, setError);
    },
    reset: () => {
      setValue("");
      setError(null);
      setTouched(false);
    },
  };
};