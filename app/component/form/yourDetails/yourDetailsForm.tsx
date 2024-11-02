import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";
import React, { useState } from 'react';

export const YourDetailsForm = () => {

  const [formData, setFormData] = useState({
    yourEmail: '',
    yourName: '',
    yourAddress: '',
    yourCity: '',
    yourZip:'',
    yourCountry:'Hrvatska',
    yourTaxId:'',
    
  });

  const handleFieldChange = (fieldName: string) => (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const [customValue, setCustomValue] = useState('');

  const handleButtonClick = () => {
    // This can be customized as needed for specific fields
    setFormData((prevData) => ({
      ...prevData,
      yourEmail: 'cagalj95@gmail.com', // Example of setting a new email
      yourName: 'DALMA BYTE, obrt za usluge, vl. Stjepan Čagalj', // Example of setting a new email
      yourAddress: 'Četvrt vrilo 5', // Example of setting a new email
      yourCity: 'Omiš', // Example of setting a new email
      yourZip: '21310', // Example of setting a new email
      yourCountry: 'Hrvatska',
      yourTaxId: '08074989166',
    }));
  };

  
  return (
    
  <div className="pt-24">

    <p className="text-2xl font-semibold pb-3">Your details</p>
    <CustomTextInput
      label="Email"
      placeholder="e.g. example@gmail.com"
      variableName="yourEmail"
      customValue={formData.yourEmail} 
      setCustomValue={handleFieldChange('yourEmail')} 
    />
    <CustomTextInput
      label="Firma:"
      placeholder="npr. DALMA BYTE, obrt za usluge, vl. Stjepan Čagalj"
      variableName="yourName"
      customValue={formData.yourName} 
        setCustomValue={handleFieldChange('yourName')} 
    />
    <div className="hidden"><ImageInput label="Logo" variableName="yourLogo" /></div>
    <CustomTextInput
      label="Adresa:"
      placeholder="npr. Četvrt vrilo 5"
      variableName="yourAddress"
      customValue={formData.yourAddress} 
        setCustomValue={handleFieldChange('yourAddress')} 
    />
    <CustomTextInput
      label="Grad:"
      placeholder="npr. Omiš"
      variableName="yourCity"
      customValue={formData.yourCity} 
        setCustomValue={handleFieldChange('yourCity')} 
    />
    <div className="hidden">
    <CustomTextInput
      label="Županija:"
      placeholder="npr. Splitsko Dalmatinska Županija"
      variableName="yourState"
    />
    </div>
    <CustomNumberInput
      label="Zip:"
      placeholder="npr. 21310"
      variableName="yourZip"
      customValue={formData.yourZip} 
      setCustomValue={handleFieldChange('yourZip')} 
    />
    <CustomTextInput
      label="Drzava:"
      placeholder="npr. Hrvatska"
      variableName="yourCountry"
      customValue={formData.yourCountry} 
      setCustomValue={handleFieldChange('yourCountry')} 
    />
    <CustomTextInput
      label="OIB:"
      placeholder="npr. 0783242352154"
      variableName="yourTaxId"
      customValue={formData.yourTaxId} 
      setCustomValue={handleFieldChange('yourTaxId')} 
    />
    <div className="my-4">
      <button className="bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors p-2" onClick={handleButtonClick}>Set Custom Value</button>
    </div>
      

  </div>
  );
};
