import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import React, { useState } from 'react';


export const PaymentDetailsForm = () => {


  const [formData, setFormData] = useState({
    bankName: '',
    accountNumber: '',
    accountName: '',
    swiftCode: '',
    paymentNote: '',

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
      bankName: 'OTP banka d.d.',
      accountNumber: 'HR4524070003105678119',
      accountName: 'Stjepan Čagalj',
      swiftCode: 'OTPVHR2X',
      paymentNote: 'Obveznik nije u sustavu PDV-a. Oslobođeno od PDV-a po članku 90. Zakona o PDV-u. \n\nNačin plaćanja: transakcijski račun',
    }));
  };

  return (

    <div className="pt-24">
      <p className="text-2xl font-semibold pb-3">Payment Details</p>
      <CustomTextInput
        label="Ime banke"
        placeholder="npr. OTP banka d.d."
        variableName="bankName"
        customValue={formData.bankName}
        setCustomValue={handleFieldChange('bankName')}
      />
      <CustomTextInput
        label="IBAN: "
        placeholder="npr. HR8920804195"
        variableName="accountNumber"
        customValue={formData.accountNumber}
        setCustomValue={handleFieldChange('accountNumber')}
      />

      <CustomTextInput
        label="Vlasnik računa: "
        placeholder="npr. Stjepan Čagalj"
        variableName="accountName"
        customValue={formData.accountName}
        setCustomValue={handleFieldChange('accountName')}
      />

      <CustomNumberInput
        label="Swift code"
        placeholder="HSBCINAA123"
        variableName="swiftCode"
        customValue={formData.swiftCode}
        setCustomValue={handleFieldChange('swiftCode')}
      />

      <div>
        <p className="pt-3 font-medium text-sm text-neutral-500 pb-5">
          Napomena za plaćanje
        </p>
        <CustomTextInput
          placeholder="Upute za placanje"
          variableName="paymentNote"
          customValue={formData.paymentNote}
          setCustomValue={handleFieldChange('paymentNote')} />
      </div>

      <div className="my-4">
        <button className="bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors p-2"
          onClick={handleButtonClick}>Fill default payment</button>
      </div>

    </div>
  );
};
