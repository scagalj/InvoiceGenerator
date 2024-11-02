"use client";

import { Input } from "@/app/component/ui/input";
import { getInitialValue } from "@/lib/getInitialValue";
import { Controller, useController } from "react-hook-form";
import React, { useEffect } from 'react';


type CustomNumberProps = {
  label?: string;
  placeholder: string;
  variableName: string;
  customValue?: string;
  setCustomValue?: (value: string) => void; // New prop for updating custom value
};


export const CustomNumberInput = ({
  label,
  placeholder,
  variableName,
  customValue,
  setCustomValue,
}: CustomNumberProps) => {
  const { field: { onChange, value } } = useController({
    name: variableName,
    defaultValue: getInitialValue(variableName),
  });

  useEffect(() => {
    if (customValue !== undefined) {
      localStorage.setItem(variableName, customValue);
      // Update form state with customValue (parsed as a number)
      onChange(parseFloat(customValue));
    }
  }, [customValue, variableName, onChange]);

  return (
    <Input
      label={label}
      placeholder={placeholder}
      value={value} // Use value from `useController`
      type="number" // Use type="number" for better user experience
      onChange={(e) => {
        const updatedValue = e.target.value;
        localStorage.setItem(variableName, updatedValue);
        onChange(parseFloat(updatedValue)); // Update form state with parsed number
        if (setCustomValue) {
          setCustomValue(updatedValue); // Update customValue in parent
        }
      }}
    />
  );
};

export default CustomNumberInput;
