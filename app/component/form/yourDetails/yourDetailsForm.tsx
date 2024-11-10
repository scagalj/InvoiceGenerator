import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";
import React, { useState } from 'react';

export const YourDetailsForm = () => {
  
  return (
    
  <div className="pt-10">

    <p className="text-2xl font-semibold pb-3">Your details</p>
    <CustomTextInput
      label="Email"
      placeholder="e.g. example@gmail.com"
      variableName="yourEmail"
    />
    <CustomTextInput
      label="Firma:"
      placeholder="npr. DALMA BYTE, obrt za usluge, vl. Stjepan Čagalj"
      variableName="yourName"
    />
    <div className="hidden"><ImageInput label="Logo" variableName="yourLogo" /></div>
    <CustomTextInput
      label="Adresa:"
      placeholder="npr. Četvrt vrilo 5"
      variableName="yourAddress"
    />
    <CustomTextInput
      label="Grad:"
      placeholder="npr. Omiš"
      variableName="yourCity"
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
    />
    <CustomTextInput
      label="Drzava:"
      placeholder="npr. Hrvatska"
      variableName="yourCountry"
    />
    <CustomTextInput
      label="OIB:"
      placeholder="npr. 0783242352154"
      variableName="yourTaxId"
    />

  </div>
  );
};
