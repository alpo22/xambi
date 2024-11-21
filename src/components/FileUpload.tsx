function FileUpload({
  entityId,
  fieldDisplayName,
  fieldDisplaySubName,
  fieldName,
  initialFile,
  isMultiple,
  supportedFileTypes,
  uponFileChange,
}) {
  return <input type="file" />;
}

export { FileUpload };

/*
<FileUpload
fieldDisplayName="Images"
fieldDisplaySubName={`Select up to 6 images to showcase${isInstagramShowcase ? " your Instagram" : ""}.`}
fieldName={editEntry.attribute + "_image_urls"}
initialFiles={
  entity && entity[editEntry.attribute] && entity[editEntry.attribute]["image_urls"]
    ? entity[editEntry.attribute]["image_urls"]
    : []
}
entityId={entity && entity.id ? entity.id : null}
supportedFileTypes={".jpg,.png"}
uponFileChange={files => {
  if (entity && entity[editEntry.attribute]) {
    entity[editEntry.attribute]["image_urls"] = files;
  }
}}
isMultiple={true}
/>
*/
