# xambi

Pill component for Xambi.

### What does the component do?

`<EditForm>` is a form building component; you can generate a form with a number of different field types (text, radio, file, address, etc). You define the form fields via the `editEntries` prop, and the initial values via the `entityObj` prop. While modifying the form, state is saved inside EditForm component. When you press "Save", it passes the data back via `onSubmitSuccess` if it is valid (there are a number of validation functions built-in).

Here is a sample usage:

```
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
   onSubmitSuccess={(data) => {
      alert("Done");
   }}
/>
```

### What steps would I take to change "PillList" to a more flexible "ItemList", that can be used for any item with any number of properties?

- I'd extract the different EntryTypes into their own components instead of having all of those `else if type === ...` statements. That would simplify EditForm and would allow re-using those types inside of ItemList.
- Currently I pass an array of strings to `<PillList>`; `<ItemList>` would need to accept an array of objects instead.
- `<ItemList>` would also need a prop defining the structure of data (i.e. should "name" be a text input, or a radio button) and validations. Something like this:

```
<ItemList
   title="Sample doctor form"
   fields={{
      patientName: {type: EditEntryType.Text, validations: [ValidationType.RequiredField, ValidationType.TextLengthBelow50]},
      patientBio: {type: EditEntryType.TextArea, validations: [ValidationType.TextLengthBelow400]},
      patientPhoto: {type: EditEntryType.File, validations: []},
      patientAge: {type: EditEntryType.Text, validations: [ValidationType.RequiredField, ValidationType.Number],
   }}
   items={[
      {
         patientName: 'John Doe',
         patientBio: '...',
         patientPhoto: File,
         patientAge: 55,
         },
      {}
   ]} />
```

3. send github link
4. send a Loom screen recording of it working on a webpage and explaining (by voice) how i decided to implement it

### Installing and running app locally

```
cd test_dir
git clone https://github.com/alpo22/xambi.git .
npm i
npm run dev
```
