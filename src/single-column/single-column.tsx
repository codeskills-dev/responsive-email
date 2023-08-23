import React from "react";
import { Section } from "@react-email/section";

interface SingleColumnProps {
  pX?: number;
  pY?: number;
  children?: React.ReactNode;
  style?: Omit<
    React.CSSProperties,
    "padding" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingBottom"
  >;
}

export const SingleColumn: React.FC<SingleColumnProps> = ({
  pX = 0,
  pY = 0,
  children,
  style,
}) => {
  return (
    <Section style={{ padding: `${pY}px ${pX}px`, ...style }}>
      {children}
    </Section>
  );
};
