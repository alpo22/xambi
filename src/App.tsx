import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { EditForm, EditEntryType, ValidationType } from "./EditForm";

export default function App() {
  return (
    <Router>
      <EditForm
        title="My test form"
        description="Trying out different field types"
        editEntries={[
          {
            attribute: "first_name",
            attributeName: "First Name",
            type: EditEntryType.Text,
            isRequired: true,
            validations: [ValidationType.TextLengthBelow30],
            extraParam: null,
          },
          {
            attribute: "my_text_list",
            attributeName: "Text list",
            type: EditEntryType.TextList,
            isRequired: true,
            validations: [ValidationType.TextLengthBelow200],
            extraParam: null,
          },
          {
            attribute: "my_pill_list",
            attributeName: "Jamie's pill list",
            subName: "My new pill component",
            type: EditEntryType.PillList,
            isRequired: true,
            validations: [],
            extraParam: null,
          },
        ]}
        entityObj={{
          first_name: "Pre-populated with John",
          my_text_list: ["one", "two"],
          my_pill_list: ["Pill Label 1", "Pill Label 2"],
        }}
        onSubmitSuccess={data => {
          console.log(data);
          alert("Done");
        }}
      />
    </Router>
  );
}
