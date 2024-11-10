// CompanySelect.tsx
import { useState, useEffect } from "react";
import { companyList, Company } from "@/lib/companies"; // Adjust the path as needed

const CompanySelect = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const company = companyList.find((c) => c.value === selectedValue) || null;
    setSelectedCompany(company);
    if (company){
      localStorage.setItem("selectedCompany", JSON.stringify(company));
    }
  };

  // Retrieve the selected company from local storage on component mount
  useEffect(() => {
    const savedCompany = localStorage.getItem("selectedCompany");
    if (savedCompany) {
      setSelectedCompany(JSON.parse(savedCompany) as Company);
    }
  }, []);

  return (
    <div>
      <label htmlFor="company-select">Select Company: </label>
      <select 
      id="company-select" 
      value={selectedCompany?.value || ""}
      onChange={handleSelectionChange}
      >
        <option value="">--Select a company--</option>
        {companyList.map((company) => (
          <option key={company.value} value={company.value}>
            {company.label}
          </option>
        ))}
      </select>

      {selectedCompany && (
        <div>
          <h3>Selected Company Details:</h3>
          <p><strong>Name:</strong> {selectedCompany.label}</p>
        </div>
      )}
    </div>
  );
};

export default CompanySelect;
