"use client";
import CustomTextInput from "@/app/component/ui/customTextInput";
import DateInput from "@/app/component/ui/dateInput";

export const InvoiceTermsForm = () => (
  <div className="pt-10">
    <p className="text-2xl font-semibold pb-3">Invoice terms</p>
    <CustomTextInput
      label="Broj računa"
      placeholder="npr 2024-01"
      variableName="invoiceNo"
      customValue='2024-'
    />
    <DateInput label="Issue date" variableName="issueDate" />
    <DateInput label="Due date" variableName="dueDate" />
  </div>
);
