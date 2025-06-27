import React, {useCallback} from "react";
import {z} from "zod";
import {phoneSchema} from "./schema";
import {ALLOWED_KEYS} from "./constants";

interface HandleChangeDeps {
  formatPhoneNumber: (input: string) => string;
  validatePhone: (phone: string, setError: (error: string | null) => void) => boolean;
  setValue: (value: string) => void;
  setError: (error: string | null) => void;
  touched: boolean;
}

interface HandleBlurDeps {
  validatePhone: (phone: string, setError: (error: string | null) => void) => boolean;
  value: string;
  setTouched: (touched: boolean) => void;
  setError: (error: string | null) => void;
}

export const validatePhone = (
  phone: string,
  setError: (error: string | null) => void
): boolean => {
  try {
    phoneSchema.parse(phone.replace(/\D/g, ""));
    setError(null);
    return true;
  } catch (err) {
    if (err instanceof z.ZodError) {
      setError(err.errors[0].message);
    }
    return false;
  }
};

export const handleChange = ({
                               formatPhoneNumber,
                               validatePhone,
                               setValue,
                               setError,
                               touched,
                             }: HandleChangeDeps) =>
  useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = formatPhoneNumber(e.target.value);
      setValue(newValue);
      if (touched) validatePhone(newValue, setError);
    },
    [formatPhoneNumber, validatePhone, setValue, setError, touched]
  );

export const handleBlur = ({validatePhone, value, setTouched, setError}: HandleBlurDeps) =>
  useCallback(() => {
    setTouched(true);
    validatePhone(value, setError);
  }, [validatePhone, value, setTouched, setError]);


export const handleKeyDown = () =>
  useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    const isCtrlCombination =
      (e.ctrlKey || e.metaKey) &&
      ["a", "c", "v", "x", "z"].includes(e.key.toLowerCase());

    if (ALLOWED_KEYS.includes(e.key) || isCtrlCombination) return;

    const isDigit = /^[0-9]$/.test(e.key);
    const isNumpadDigit = e.key.startsWith("Numpad") && /[0-9]/.test(e.key.slice(-1));
    const isAllowedSymbol = ["+", " ", "-"].includes(e.key);

    if (!(isDigit || isNumpadDigit || isAllowedSymbol)) {
      e.preventDefault();
    }
  }, []);