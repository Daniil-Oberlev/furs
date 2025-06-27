import React from "react";

export interface PhoneInputReturn {
  value: string;
  error: string | null;
  isValid: boolean;
  displayError: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  setValue: (newValue: string) => void;
  reset: () => void;
}