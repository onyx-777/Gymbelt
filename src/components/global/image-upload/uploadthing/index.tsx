"use client";

import { useToast } from "@/hooks/use-toast";
import { UploadDropzone } from "@/utils/uploadthing";

export default function FileUpload() {
  const { toast } = useToast();
  return (
    <main className="w-full h-full m-auto cursor-pointer">
      <UploadDropzone
        appearance={{ button: "bg-black", label: "text-black" }}
        endpoint={"imageUploader"}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClientUploadComplete={(res: any) => {
          if (res && res[0]) {
            console.log(res[0].url);
            toast({
              title: "Success",
            });
          }
        }}
        onUploadError={(error: Error) => {
          console.error(`ERROR! ${error.message}`);
          toast({
            title: "Success",
            description: error.message,
          });
        }}
      />
    </main>
  );
}

// ever remember to make /api/uploadthing public accessable in middlware.ts
