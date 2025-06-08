import React from "react";
import {
  ComponentConfig,
  Slot,
} from "@/components/pages/gym/admin/features/website/core/types";
import styles from "./styles.module.css";
import { getClassNameFactory } from "@/components/pages/gym/admin/features/website/core/lib";
import { Section } from "../../components/Section";
import { WithLayout, withLayout } from "../../components/Layout";

const getClassName = getClassNameFactory("Flex", styles);

export type FlexProps = WithLayout<{
  justifyContent: "start" | "center" | "end" | "between" | "around" | "evenly";
  alignItems: "start" | "center" | "end" | "stretch" | "baseline";
  direction: "row" | "column";
  gap: number;
  wrap: "wrap" | "nowrap";
  items: Slot;
}>;

const justifyContentMap: Record<FlexProps["justifyContent"], string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

const alignItemsMap: Record<FlexProps["alignItems"], string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline",
};

const FlexInternal: ComponentConfig<FlexProps> = {
  fields: {
    direction: {
      label: "Direction",
      type: "radio",
      options: [
        { label: "Row", value: "row" },
        { label: "Column", value: "column" },
      ],
    },
    justifyContent: {
      label: "Justify Content",
      type: "radio",
      options: [
        { label: "Start", value: "start" },
        { label: "Between", value: "between" },
        { label: "Around", value: "around" },
        { label: "Evenly", value: "evenly" },
        { label: "Center", value: "center" },
        { label: "End", value: "end" },
      ],
    },
    alignItems: {
      label: "Align Items",
      type: "radio",
      options: [
        { label: "Start", value: "start" },
        { label: "Center", value: "center" },
        { label: "End", value: "end" },
        { label: "Stretch", value: "stretch" },
        { label: "Baseline", value: "baseline" },
      ],
    },
    gap: {
      label: "Gap",
      type: "number",
      min: 0,
    },
    wrap: {
      label: "Wrap",
      type: "radio",
      options: [
        { label: "true", value: "wrap" },
        { label: "false", value: "nowrap" },
      ],
    },
    items: {
      type: "slot",
    },
  },
  defaultProps: {
    justifyContent: "between",
    alignItems: "center", // default to center
    direction: "row",
    gap: 24,
    wrap: "wrap",
    layout: {
      grow: true,
    },
    items: [],
  },
  render: ({
    justifyContent,
    alignItems,
    direction,
    gap,
    wrap,
    items: Items,
  }) => {
    return (
      <Section style={{ height: "100%" }}>
        <Items
          className={getClassName()}
          style={{
            justifyContent: justifyContentMap[justifyContent],
            alignItems: alignItemsMap[alignItems],
            flexDirection: direction,
            gap,
            flexWrap: wrap,
            display: "flex",
          }}
          disallow={["Hero", "Stats"]}
        />
      </Section>
    );
  },
};

export const Flex = withLayout(FlexInternal);
