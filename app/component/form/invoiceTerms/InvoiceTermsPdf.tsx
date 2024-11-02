import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { format } from "date-fns";
import { pdfTypography, pdfContainers, pdfUtils } from "@/lib/pdfStyles";

export const InvoiceTermsPdf: React.FC<InvoiceTerms> = ({
  invoiceNumber,
  issueDate,
  dueDate,
}) => (
  <View style={pdfContainers.invoiceTerms}>
    <View style={{ flex: 1 }}>
      <Text style={pdfTypography.title}>Broj računa</Text>
      <Text style={pdfTypography.subTitle}>{invoiceNumber}</Text>
    </View>
    <View
      style={{
        ...pdfUtils.flexRowBetween,
        paddingRight: 20,
        paddingLeft: 100,
        flex: 1,
      }}
    >
      <View>
        <Text style={pdfTypography.title}>Datum računa</Text>
        <Text style={pdfTypography.subTitle}>
          {issueDate ? format(issueDate, "dd.MM.yyyy HH:mm") : ""}
        </Text>
      </View>
      <View>
        <Text style={pdfTypography.title}>Rok plaćanja</Text>
        <Text style={pdfTypography.subTitle}>
          {dueDate ? format(dueDate, "dd.MM.yyyy") : ""}
        </Text>
      </View>
    </View>
  </View>
);
