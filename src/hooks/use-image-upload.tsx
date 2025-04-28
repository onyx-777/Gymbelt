"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useUploadThing } from "./use-uploadthing";
interface UseImageUploadProps {
  onUpload?: (url: string) => void;
}

export function useImageUpload({ onUpload }: UseImageUploadProps = {}) {
  const previewRef = useRef<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  // Initialize UploadThing hook
  const { startUpload, isUploading, routeConfig } = useUploadThing(
    "imageUploader",
    {
      onClientUploadComplete: (res) => {
        const uploadedUrl = res[0]?.url;
        if (uploadedUrl) {
          setPreviewUrl(uploadedUrl);
          onUpload?.(uploadedUrl);
        }
      },
      onUploadError: (error) => {
        alert(`Upload failed: ${error.message}`);
      },
      onUploadBegin: (name) => {
        console.log(`Uploading: ${name}`);
      },
    }
  );

  const handleThumbnailClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        console.log("Uploaded file:", file);
        setFileName(file.name);
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        previewRef.current = url;
        startUpload([file]);
      }
    },
    [startUpload]
  );

  const handleRemove = useCallback(() => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setFileName(null);
    previewRef.current = null;
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [previewUrl]);

  useEffect(() => {
    return () => {
      if (previewRef.current) {
        URL.revokeObjectURL(previewRef.current);
      }
    };
  }, []);

  return {
    previewUrl,
    fileName,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
    isUploading,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    permittedFileTypes: routeConfig?.fileTypes,
  };
}
