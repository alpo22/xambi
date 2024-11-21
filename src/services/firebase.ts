import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { storage } from "./firebaseConfig";

function uploadFile(
  entityId: string,
  fieldName: string,
  file: File,
  onProgress: (progress: number) => void,
  onSuccess: (fileUrl: string) => void,
  onError: (error: Error) => void
) {
  const storageRef = ref(storage, `${entityId}/${fieldName}/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      onProgress(progress);
    },
    error => {
      onError(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
        onSuccess(downloadURL);
      });
    }
  );
}

export { uploadFile };
