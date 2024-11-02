"use client";

import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, ClockIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, setHours, setMinutes } from "date-fns";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { getInitialValue } from "@/lib/getInitialValue";

type CustomNumberProps = {
  label: string;
  variableName: string;
};

const DateInput = ({ label, variableName }: CustomNumberProps) => {
  const [open, setOpen] = useState(false);
  const initialValue = getInitialValue(variableName);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    initialValue ? new Date(initialValue) : null
  );

  const handleDateChange = (day: Date | undefined) => {
    if (day) {
      const now = new Date();
      const updatedDate = setHours(setMinutes(day, now.getMinutes()), now.getHours());
      setSelectedDate(updatedDate);
      localStorage.setItem(variableName, updatedDate.toISOString());
      
    }
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = event.target.value.split(":").map(Number);
    if (selectedDate) {
      const updatedDate = setHours(setMinutes(selectedDate, minutes), hours);
      setSelectedDate(updatedDate);
      localStorage.setItem(variableName, updatedDate.toISOString());
    }
  };

  return (
    <Controller
      render={({ field: { onChange } }) => (
        <div className="flex group items-center relative h-[52px]">
          <Popover onOpenChange={setOpen} open={open}>
            <PopoverTrigger asChild className="w-full">
              <button className="flex gap-2 items-center justify-between w-full">
                <label
                  htmlFor={label}
                  className="block text-sm font-medium leading-6 text-gray-900 whitespace-nowrap"
                >
                  {label}
                </label>
                <div className="flex gap-2 items-center text-sm">
                  {selectedDate ? (
                    <span>
                      {format(selectedDate, "PPP p")}
                    </span>
                  ) : (
                    <span>Pick a date and time</span>
                  )}
                  <CalendarIcon className="h-4 w-4" />
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 mt-3" align="end">
              <Calendar
                mode="single"
                selected={selectedDate || undefined}
                onSelect={(day: Date | undefined) => {
                  handleDateChange(day);
                  if (day) {
                    const now = new Date();
                    const updatedDate = setHours(setMinutes(day, now.getMinutes()), now.getHours());
                    setSelectedDate(updatedDate);
                    localStorage.setItem(variableName, updatedDate.toISOString());
                    onChange(updatedDate.toISOString()); // Update form state with date & time
                  }
                }}
                initialFocus
              />
              <div className="p-4">
                <label className="block text-sm font-medium mb-1">Select Time</label>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4" />
                  <input
                    type="time"
                    value={
                      selectedDate
                        ? `${selectedDate.getHours().toString().padStart(2, "0")}:${selectedDate
                            .getMinutes()
                            .toString()
                            .padStart(2, "0")}`
                        : "12:00"
                    }
                    onChange={(e) => {
                      handleTimeChange(e);
                      if (selectedDate) {
                        onChange(selectedDate.toISOString()); // Update form state with date & time
                      }
                    }}
                    className="border border-gray-300 rounded p-1 text-sm"
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <div
            className={`absolute border-dashed inset-x-0 bottom-0 border-t border-gray-300 group-focus:border-t ${
              open ? "border-orange-500" : "group-hover:border-neutral-400"
            }`}
            aria-hidden="true"
          />
        </div>
      )}
      name={variableName}
      defaultValue={getInitialValue(variableName)}
    />
  );
};

export default DateInput;
