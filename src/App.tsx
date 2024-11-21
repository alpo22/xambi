import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { EditForm, EditEntryType, ValidationType } from "./EditForm";

function App() {
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
            attribute: "text_list",
            attributeName: "Text list",
            type: EditEntryType.TextList,
            isRequired: true,
            validations: [ValidationType.TextLengthBelow30],
            extraParam: null,
          },
        ]}
        entityObj={{ first_name: "Pre-populated with John", text_list: ["one", "two"] }}
        onSubmitSuccess={() => {
          alert("done");
        }}
      />
    </Router>
  );
}

/*

  
  
  types:
  Text: "Text",
  TextList: "TextList",
  DoubleTextList: "DoubleTextList",
  TextArea: "TextArea",
  File: "File",
  Address: "Address",
  Photo: "Photo",
  ProfilePhoto: "ProfilePhoto",
  FilePhoto: "FilePhoto",
  Radio: "Radio",
  Checkbox: "Checkbox",
  Article: "Article",
  Date: "Date",
  Select: "Select",
  Showcase: "Showcase",
  */
export default App;
