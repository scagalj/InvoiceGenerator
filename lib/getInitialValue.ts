"use client";
export const getInitialValue = (variableName: string, defaultValue?: string): string => {
  try {
    return localStorage.getItem(variableName) || defaultValue || "";
  } catch (error) {
    console.error("Error while getting item from local storage:", error);
    return defaultValue || "";
  }
};

export const getInitialValueWithCompany = (variableName: string, defaultValue?: string): string => {
  try {
    // Retrieve the selected company from localStorage
    const savedCompany = localStorage.getItem("selectedCompany");

    // If savedCompany exists, parse it and check for the variableName in the details
    if (savedCompany) {
      const companyData = JSON.parse(savedCompany);
      
      // Check if `variableName` exists within `companyData.details`
      if (companyData.details && companyData.details[variableName]) {
        return companyData.details[variableName]; // Return the found value
      }
    }

    // If no value found in selectedCompany, fall back to the defaultValue or an empty string
    return defaultValue || "";
  } catch (error) {
    console.error("Error while getting item from local storage:", error);
    return defaultValue || "";
  }
};

export const getItemValue = (): Item[] => {
  try {
    return getItems(localStorage.getItem("items"));
  } catch (error) {
    console.error("Error while getting item from local storage:", error);
    return [
      {
        itemDescription: "",
      },
    ];
  }
};

const getItems = (items?: string | null): Item[] => {
  if (!items)
    return [
      {
        itemDescription: "",
      },
    ];
  try {
    return JSON.parse(items);
  } catch {
    return [
      {
        itemDescription: "",
      },
    ];
  }
};
