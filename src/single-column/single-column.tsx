import React from "react";
import { Section } from "@react-email/section";

interface SingleColumnProps {
  pX?: number;
  pY?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
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
