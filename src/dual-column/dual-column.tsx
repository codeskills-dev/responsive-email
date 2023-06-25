import { Section } from "@react-email/section";
import React from "react";
import { twoColumnCol, twoColumnWrapper } from "../styles";

interface DualColumnProps {
  styles?: React.CSSProperties;
  pX?: number;
  pY?: number;
  columnOneContent: React.ReactNode;
  columnOneStyles?: React.CSSProperties;
  columnTwoContent: React.ReactNode;
  columnTwoStyles?: React.CSSProperties;
}

export const DualColumn: React.FC<DualColumnProps> = ({
  pX = 0,
  pY = 0,
  columnOneContent,
  columnTwoContent,
  columnOneStyles,
  columnTwoStyles,
  styles,
}) => {
  const colMaxWidth = pX
    ? `calc((37.5em - ${2 * pX}px)/2)`
    : "calc(37.5em / 2)";
  return (
    <Section
      style={{ ...twoColumnWrapper, ...styles, padding: `${pY}px ${pX}px` }}
    >
      <Section
        style={{ ...twoColumnCol, ...columnOneStyles, maxWidth: colMaxWidth }}
      >
        {columnOneContent}
      </Section>
      <Section
        style={{ ...twoColumnCol, ...columnTwoStyles, maxWidth: colMaxWidth }}
      >
        {columnTwoContent}
      </Section>
    </Section>
  );
};
