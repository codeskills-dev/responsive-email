import { Section } from "@react-email/section";
import React from "react";
import { threeColumnCol, threeColumnWrapper } from "../styles";

interface TripleColumnProps {
  styles?: React.CSSProperties;
  pX?: number;
  pY?: number;
  columnOneContent: React.ReactNode;
  columnOneStyles?: React.CSSProperties;
  columnTwoContent: React.ReactNode;
  columnTwoStyles?: React.CSSProperties;
  columnThreeContent: React.ReactNode;
  columnThreeStyles?: React.CSSProperties;
}

export const TripleColumn: React.FC<TripleColumnProps> = ({
  pX = 0,
  pY = 0,
  styles,
  columnOneContent,
  columnTwoContent,
  columnThreeContent,
  columnOneStyles,
  columnTwoStyles,
  columnThreeStyles,
}) => {
  const colMaxWidth = pX
    ? `calc((37.5em - ${2 * pX}px)/3)`
    : "calc(37.5em / 3)";
  return (
    <Section
      style={{
        ...threeColumnWrapper,
        ...styles,
        padding: `${pY}px ${pX}px`,
      }}
    >
      <Section
        style={{ ...threeColumnCol, ...columnOneStyles, maxWidth: colMaxWidth }}
      >
        {columnOneContent}
      </Section>
      <Section
        style={{ ...threeColumnCol, ...columnTwoStyles, maxWidth: colMaxWidth }}
      >
        {columnTwoContent}
      </Section>
      <Section
        style={{
          ...threeColumnCol,
          ...columnThreeStyles,
          maxWidth: colMaxWidth,
        }}
      >
        {columnThreeContent}
      </Section>
    </Section>
  );
};
