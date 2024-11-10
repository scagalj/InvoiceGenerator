"use client";

import { Input } from "@/app/component/ui/input";
import React, { useEffect, useCallback } from 'react';
import { getInitialValueWithCompany } from "@/lib/getInitialValue";
import { Controller, useController } from "react-hook-form";

type CustomInputProps = {
  label?: string;
  placeholder: string;
  variableName: string;
  customValue?: string;
  setCustomValue?: (value: string) => void; // New prop for updating custom value
};

const CustomTextInput = ({
  label,
  placeholder,
  variableName,
  customValue,
  setCustomValue,
}: CustomInputProps) => {
  const { field: { onChange, value } } = useController({
    name: variableName,
    defaultValue: getInitialValueWithCompany(variableName),
  });

  useEffect(() => {
    if (customValue !== undefined) {
      localStorage.setItem(variableName, customValue);
      // Update form state with customValue
      onChange(customValue);
    }
  }, [customValue, variableName, onChange]);

  return (
    <Input
      label={label}
      placeholder={placeholder}
      value={value} // Use value from `useController`
      type="text"
      onChange={(e) => {
        const updatedValue = e.target.value;
        localStorage.setItem(variableName, updatedValue);
        onChange(updatedValue); // Update form state with user input
        if (setCustomValue) {
          setCustomValue(updatedValue); // Update customValue in parent
        }
      }}
    />
  );
};

export default CustomTextInput;
