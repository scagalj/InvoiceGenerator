"use client";

import { Input } from "@/app/component/ui/input";
import { getInitialValue } from "@/lib/getInitialValue";
import { Controller } from "react-hook-form";
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
}: CustomNumberProps) => (
  <Controller
    render={({ field: { onChange, value } }) => {
      // Effect to handle custom value changes
      useEffect(() => {
        if (customValue !== undefined) {
          localStorage.setItem(variableName, customValue);
          onChange(customValue); // Trigger the onChange logic
        }
      }, [customValue, variableName, onChange]);
      return (
      <Input
        label={label}
        placeholder={placeholder}
        value={value}
        type="text"
        pattern="[0-9]*"
        onChange={(e) => {
          const updatedValue = e.target.value;
          localStorage.setItem(variableName, updatedValue);
          onChange(updatedValue);
        }}
      />
      );
    }}
    defaultValue={getInitialValue(variableName)}
    name={variableName}
  />
  );

export default CustomNumberInput;
