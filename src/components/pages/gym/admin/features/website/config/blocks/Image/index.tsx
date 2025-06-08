"use client";

import { ComponentConfig } from "@/components/pages/gym/admin/features/website/core";
import { DebouncedColorPicker } from "../../../components/ui/DebounceColorPicker";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type ImageBlockProps = {
  imageUrl: string;
  altText?: string;
  linkUrl?: string;
  width?: number;
  height?: number;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  alignment?: "left" | "center" | "right";
  padding?: string;
  margin?: string;
  borderRadius?: string;
  boxShadow?: string;
  backgroundColor?: string;
  aspectRatio?: string;
  lazyLoad?: boolean;
  overlayText?: string;
};

export const ImageBlock: ComponentConfig<ImageBlockProps> = {
  label: "Image Block",
  fields: {
    imageUrl: {
      type: "text",
      label: "Image URL",
      placeholder: "Enter image URL",
    },
    altText: { type: "text", label: "Alt Text (optional)" },
    linkUrl: { type: "text", label: "Link URL (optional)" },
    width: { type: "number", label: "Width (in px)" },
    height: { type: "number", label: "Height (in px)" },
    objectFit: {
      type: "select",
      label: "Object Fit",
      options: [
        { label: "Cover", value: "cover" },
        { label: "Contain", value: "contain" },
        { label: "Fill", value: "fill" },
        { label: "None", value: "none" },
        { label: "Scale Down", value: "scale-down" },
      ],
    },
    alignment: {
      type: "select",
      label: "Alignment",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
    padding: { type: "text", label: "Padding (e.g., 1rem, 10px)" },
    margin: { type: "text", label: "Margin (e.g., auto, 2rem)" },
    borderRadius: { type: "text", label: "Border Radius (e.g., 8px, 50%)" },
    boxShadow: {
      type: "text",
      label: "Box Shadow (e.g., 0 0 10px rgba(0,0,0,0.3))",
    },
    backgroundColor: {
      type: "custom",
      label: "Background Color",
      render: ({ name, onChange, value }) => (
        <DebouncedColorPicker
          label="Background Color"
          name={name}
          value={value || "#ffffff"}
          onChange={onChange}
        />
      ),
    },
    aspectRatio: { type: "text", label: "Aspect Ratio (e.g., 16/9)" },
    overlayText: { type: "text", label: "Overlay Text (optional)" },
  },
  defaultProps: {
    imageUrl: "",
    altText: "",
    linkUrl: "",
    width: 300,
    height: 200,
    objectFit: "cover",
    alignment: "center",
    padding: "1rem",
    margin: "1rem auto",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
    aspectRatio: "3 / 2",
    lazyLoad: true,
    overlayText: "",
  },
  render: ({
    imageUrl,
    altText,
    linkUrl,
    width = 300,
    height = 200,
    objectFit = "cover",
    alignment = "center",
    padding = "1rem",
    margin = "1rem auto",
    borderRadius = "8px",
    boxShadow = "none",
    backgroundColor = "transparent",
    aspectRatio,
    lazyLoad = true,
    overlayText,
  }: ImageBlockProps) => {
    if (!imageUrl) return <div />;

    const wrapperStyle: React.CSSProperties = {
      padding,
      margin,
      backgroundColor,
      minWidth: "150px",
      minHeight: "100px",
      display: "flex",
      justifyContent:
        alignment === "left"
          ? "flex-start"
          : alignment === "right"
          ? "flex-end"
          : "center",
    };
    const containerStyle: React.CSSProperties = {
      width,
      height,
      position: "relative",
      aspectRatio: aspectRatio || undefined,
    };

    const imageStyle: React.CSSProperties = {
      objectFit,
      borderRadius,
      boxShadow,
    };

    const imageElement = (
      <div className={cn("relative w-fit")} style={wrapperStyle}>
        <div style={containerStyle}>
          <Image
            src={imageUrl}
            alt={altText || ""}
            width={width}
            height={height}
            priority={!lazyLoad}
            style={imageStyle}
          />
          {overlayText && (
            <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 text-sm rounded">
              {overlayText}
            </div>
          )}
        </div>
      </div>
    );

    return linkUrl ? (
      <Link href={linkUrl} className="block">
        {imageElement}
      </Link>
    ) : (
      imageElement
    );
  },
};
