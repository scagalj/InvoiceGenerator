import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const CompanyDetailsForm = () => (
  <div className="pt-10">
    <p className="text-2xl font-semibold pb-3">Client Details (To)</p>
    <CustomTextInput
      label="Email"
      placeholder="npr. email@gmail.com"
      variableName="email"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      We&apos;ll fill the billing details automatically if we find the company.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Billing details</p>
    <CustomTextInput
      label="Company name"
      placeholder="npr. Money generator d.o.o"
      variableName="companyName"
    />
    <div className="hidden">
      <ImageInput label="Logo" variableName="companyLogo" />
    </div>
    <CustomTextInput
      label="Address"
      placeholder="npr. Aniceva 23B"
      variableName="companyAddress"
    />
    <CustomTextInput
      label="City"
      placeholder="npr. Zagreb"
      variableName="companyCity"
    />

    <div className="hidden">
      <CustomTextInput
        label="State"
        placeholder="npr. Splitsko Dalmatinska Županija"
        variableName="companyState"
      />
    </div>

    <CustomNumberInput
      label="Zip"
      placeholder="560066"
      variableName="companyZip"
    />
    <CustomTextInput
      label="Country"
      placeholder="npr. Hrvatska"
      variableName="companyCountry"
    />
    <CustomTextInput
      label="OIB"
      placeholder="133124321332"
      variableName="companyTaxId"
    />
  </div>
);
