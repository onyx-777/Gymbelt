/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ComponentConfig } from "@/components/pages/gym/admin/features/website/core/types";
import { Section } from "../../components/Section";
import { quotes } from "./quotes";
import {
  AutoField,
  Button,
  FieldLabel,
} from "@/components/pages/gym/admin/features/website/core";
import { Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type HeroProps = {
  quote?: { index: number; label: string };
  title: string;
  description: string;
  align?: "left" | "center";
  padding: string;
  image?: {
    mode?: "inline" | "background";
    url?: string;
  };
  buttons: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  }[];
};

export const Hero: ComponentConfig<HeroProps> = {
  fields: {
    quote: {
      type: "external",
      placeholder: "Select a quote",
      showSearch: false,
      renderFooter: ({ items }) => (
        <div>
          {items.length} result{items.length === 1 ? "" : "s"}
        </div>
      ),
      filterFields: {
        author: {
          type: "select",
          options: [
            { value: "", label: "Select an author" },
            { value: "Mark Twain", label: "Mark Twain" },
            { value: "Henry Ford", label: "Henry Ford" },
            { value: "Kurt Vonnegut", label: "Kurt Vonnegut" },
            { value: "Andrew Carnegie", label: "Andrew Carnegie" },
            { value: "C. S. Lewis", label: "C. S. Lewis" },
            { value: "Confucius", label: "Confucius" },
            { value: "Eleanor Roosevelt", label: "Eleanor Roosevelt" },
            { value: "Samuel Ullman", label: "Samuel Ullman" },
          ],
        },
      },
      fetchList: async ({ query, filters }) => {
        await new Promise((res) => setTimeout(res, 500));
        return quotes
          .map((quote, idx) => ({
            index: idx,
            title: quote.author,
            description: quote.content,
          }))
          .filter((item) => {
            if (filters?.author && item.title !== filters?.author) return false;
            if (!query) return true;
            const q = query.toLowerCase();
            return (
              item.title.toLowerCase().includes(q) ||
              item.description.toLowerCase().includes(q)
            );
          });
      },
      mapRow: (item) => ({
        title: item.title,
        description: <span>{item.description}</span>,
      }),
      mapProp: (result) => ({
        index: result.index,
        label: result.description,
      }),
      getItemSummary: (item) => item.label,
    },
    title: { type: "text" },
    description: { type: "textarea" },
    buttons: {
      type: "array",
      min: 1,
      max: 4,
      getItemSummary: (item) => item.label || "Button",
      arrayFields: {
        label: { type: "text" },
        href: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "primary", value: "primary" },
            { label: "secondary", value: "secondary" },
          ],
        },
      },
      defaultItemProps: {
        label: "Button",
        href: "#",
      },
    },
    align: {
      type: "radio",
      options: [
        { label: "left", value: "left" },
        { label: "center", value: "center" },
      ],
    },
    image: {
      type: "object",
      objectFields: {
        url: {
          type: "custom",
          render: ({ value, field, name, onChange, readOnly }) => (
            <FieldLabel
              label={field.label || name}
              readOnly={readOnly}
              icon={<Link2 size="16" />}
            >
              <AutoField
                field={{ type: "text" }}
                value={value}
                onChange={onChange}
                readOnly={readOnly}
              />
            </FieldLabel>
          ),
        },
        mode: {
          type: "radio",
          options: [
            { label: "inline", value: "inline" },
            { label: "background", value: "background" },
          ],
        },
      },
    },
    padding: { type: "text" },
  },
  defaultProps: {
    title: "Hero",
    align: "left",
    description: "Description",
    buttons: [{ label: "Learn more", href: "#" }],
    padding: "64px",
  },
  resolveData: async ({ props }, { changed }) => {
    if (!props.quote)
      return { props, readOnly: { title: false, description: false } };

    if (!changed.quote) {
      return { props };
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      props: {
        title: quotes[props.quote.index].author,
        description: quotes[props.quote.index].content,
      },
      readOnly: { title: true, description: true },
    };
  },
  // resolveFields: async (data, { fields }) => {
  //   if (data.props.align === "center") {
  //     return {
  //       ...fields,
  //       image: undefined,
  //     };
  //   }

  //   return fields;
  // },
  resolvePermissions: async (data, params) => {
    if (!params.changed.quote) return params.lastPermissions;
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      ...params.permissions,
      delete: data.props.quote?.index !== 7,
    };
  },
  render: ({ align, title, description, buttons, padding, image, puck }) => {
    return (
      <Section
        className={cn(
          "flex items-center relative h-[100vh]",
          align === "center" && "justify-center text-center"
        )}
        style={{ paddingTop: padding, paddingBottom: padding }}
      >
        {image?.mode === "background" && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url("${image?.url}")` }}
            />
            <div className="absolute inset-0 bg-black opacity-30" />
          </>
        )}

        <div className=" z-10 h-full w-full flex flex-col md:flex-row justify-center items-center gap-12 max-w-screen-xl mx-auto px-4">
          <div
            className={cn(
              "flex flex-col justify-center h-full gap-4 z-50 w-full",
              image?.mode !== "background" && "md:w-1/2",
              align === "center" && " items-center"
            )}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-base font-light leading-relaxed mb-2">
              {description}
            </p>
            <div className="flex gap-4 flex-wrap">
              {buttons.map((button, i) => (
                <Button
                  key={i}
                  href={button.href}
                  variant={button.variant}
                  size="large"
                  tabIndex={puck.isEditing ? -1 : undefined}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
          {image?.mode !== "background" && image?.url && (
            <div
              className="w-full md:w-1/2 h-[60%] rounded-3xl ml-auto bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${image.url}')` }}
            />
          )}
        </div>
      </Section>
    );
  },
};
