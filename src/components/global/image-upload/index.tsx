"use client";

import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { useUploadThing } from "@/hooks/use-uploadthing";
import { cn } from "@/lib/utils";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UploadFile = ({ field, form }: { field: any; form: any }) => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: async ([data]) => {
      const imageUrl = data.ufsUrl;
      console.log("Uploaded image URL:", imageUrl);

      form.setValue(field.name, imageUrl); // Set the uploaded image URL in the form state
      setIsUploading(false);

      toast.success("Upload Successful", {
        description: "Your image has been uploaded successfully.",
      });
    },
    onUploadProgress: (progress) => {
      setUploadProgress(progress);
    },
  });

  const onDropRejected = useCallback(
    (rejectedFiles: FileRejection[]) => {
      const [file] = rejectedFiles;
      setIsDragOver(false);
      console.log("Error on drop rejected:", file);
      toast.error(`${file.file.type} type is not supported.`, {
        description: "Please choose a PNG, JPG, or JPEG image instead.",
      });
    },
    [toast]
  );

  const onDropAccepted = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      console.log("File accepted:", file);

      setIsUploading(true);
      startUpload([file]);
      setIsDragOver(false);
    },
    [startUpload]
  );

  const handleRemove = () => {
    form.setValue(field.name, null); // Clear the gymLogo field in the form state
    setUploadProgress(0);
    toast.success("Image Removed", {
      description: "The uploaded image has been removed.",
    });
  };

  return (
    <div
      className={cn(
        "relative h-56 w-full border-2 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center items-center",
        {
          "ring-blue-900/25 bg-blue-900/10": isDragOver,
        }
      )}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        {!field.value ? (
          <Dropzone
            onDropRejected={onDropRejected}
            onDropAccepted={onDropAccepted}
            accept={{
              "image/png": [".png"],
              "image/jpeg": [".jpeg"],
              "image/jpg": [".jpg"],
            }}
            onDragEnter={() => setIsDragOver(true)}
            onDragLeave={() => setIsDragOver(false)}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                className="h-full w-full flex flex-col items-center justify-center"
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {isDragOver ? (
                  <ImagePlus className="h-6 w-6 text-zinc-500 mb-2" />
                ) : isUploading ? (
                  <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2" />
                ) : (
                  <ImagePlus className="h-6 w-6 text-zinc-500 mb-2" />
                )}
                <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                  {isUploading ? (
                    <div className="flex flex-col items-center">
                      <p className="dark:text-zinc-300">Uploading...</p>
                      <Progress
                        value={uploadProgress}
                        className="mt-2 w-40 h-2 bg-gray-300"
                      />
                    </div>
                  ) : isDragOver ? (
                    <p className="dark:text-zinc-300">
                      <span className="font-semibold">Drop file</span> to upload
                    </p>
                  ) : (
                    <p className="dark:text-zinc-300">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  )}
                </div>
              </div>
            )}
          </Dropzone>
        ) : (
          <div className="relative h-full w-full flex flex-col items-center justify-center">
            <div className="group relative h-full w-full overflow-hidden rounded-lg border">
              <Image
                src={field.value}
                alt="Uploaded Preview"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                <button
                  onClick={handleRemove}
                  className="bg-red-500 text-white p-2 rounded-full"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadFile;
