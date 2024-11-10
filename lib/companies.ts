
export type Company = {
  value: string; // Unique identifier for the company, e.g., DLM or ETM
  label: string; // Display name for select dropdown
  details: {
    yourEmail: string;
    yourName: string;
    yourAddress: string;
    yourCity: string;
    yourZip: string;
    yourCountry?: string;
    yourTaxId?: string;
    bankName?: string;
    accountNumber?: string;
    accountName?: string;
    swiftCode?: string;
    paymentNote?: string;

  };
};

export const companyList: Company[] = [
  {
    value: "DLM",
    label: "Dalma byte",
    details: {
      yourEmail: 'cagalj95@gmail.com', // Example of setting a new email
      yourName: 'DALMA BYTE, obrt za usluge, vl. Stjepan Čagalj', // Example of setting a new email
      yourAddress: 'Četvrt vrilo 5', // Example of setting a new email
      yourCity: 'Omiš', // Example of setting a new email
      yourZip: '21310', // Example of setting a new email
      yourCountry: 'Hrvatska',
      yourTaxId: '08074989166',
      bankName: 'OTP banka d.d.',
      accountNumber: 'HR4524070003105678119',
      accountName: 'Stjepan Čagalj',
      swiftCode: 'OTPVHR2X',
      paymentNote: 'Obveznik nije u sustavu PDV-a. Oslobođeno od PDV-a po članku 90. Zakona o PDV-u. \n\nNačin plaćanja: transakcijski račun',
    },
  },
  {
    value: "ETM",
    label: "ETM For You",
    details: {
      yourEmail: 'cagalj95@gmail.com', // Example of setting a new email
      yourName: 'DALMA BYTE, obrt za usluge, vl. Stjepan Čagalj', // Example of setting a new email
      yourAddress: 'Četvrt vrilo 5', // Example of setting a new email
      yourCity: 'Omiš', // Example of setting a new email
      yourZip: '21310', // Example of setting a new email
      yourCountry: 'Hrvatska',
      yourTaxId: '08074989166',
      bankName: 'OTP banka d.d.',
      accountNumber: 'HR4524070003105678119',
      accountName: 'Stjepan Čagalj',
      swiftCode: 'OTPVHR2X',
      paymentNote: 'Obveznik nije u sustavu PDV-a. Oslobođeno od PDV-a po članku 90. Zakona o PDV-u. \n\nNačin plaćanja: transakcijski račun',
    },
  },
  // Add more companies as needed
];