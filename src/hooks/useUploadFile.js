import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "../apis/uploadFile";

export const useUploadFile = () =>
  useMutation({
    mutationFn: uploadFile,
  });
