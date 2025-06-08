import React from "react";
import { ComponentConfig } from "@/components/pages/gym/admin/features/website/core";
import styles from "./styles.module.css";
import { getClassNameFactory } from "@/components/pages/gym/admin/features/website/core/lib";

const getClassName = getClassNameFactory("Blank", styles);

export type BlankProps = {};

export const Blank: ComponentConfig<BlankProps> = {
  fields: {},
  defaultProps: {},
  render: () => {
    return <div className={getClassName()}></div>;
  },
};
