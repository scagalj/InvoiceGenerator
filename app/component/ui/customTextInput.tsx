"use client";

import { Input } from "@/app/component/ui/input";
import React, { useEffect } from 'react';
import { getInitialValue } from "@/lib/getInitialValue";
import { Controller } from "react-hook-form";

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
}: CustomInputProps) => (
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
          onChange={(e) => {
            const updatedValue = e.target.value;
            localStorage.setItem(variableName, updatedValue);
            onChange(updatedValue); // Regular onChange logic
            if (setCustomValue) {
              setCustomValue(updatedValue); // Update customValue in the parent if defined
            }

          }}
        />
      );
    }}
    name={variableName}
    defaultValue={getInitialValue(variableName)}
  />
);

export default CustomTextInput;