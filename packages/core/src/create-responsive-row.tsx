import React from "react";
import { ResponsiveColumnProps } from "./create-responsive-column";
import { BaseSectionProps } from "./base-section-props";

export type ResponsiveRowProps<SectionProps extends BaseSectionProps> = Omit<
  SectionProps,
  "style"
> & {
  style?: Omit<
    React.CSSProperties,
    | "padding"
    | "paddingLeft"
    | "paddingRight"
    | "paddingTop"
    | "paddingBottom"
    | "paddingInline"
    | "paddingBlock"
    | "maxWidth"
  >;

  maxWidth?: number;

  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
};

export function createResponsiveRow<SectionProps extends BaseSectionProps>(
  Section: React.FC<BaseSectionProps>,
  isResponsiveColumn: (
    node: any,
  ) => node is React.ReactElement<
    ResponsiveColumnProps<SectionProps>,
    React.FC<ResponsiveColumnProps<SectionProps>>
  >,
) {
  return (props: ResponsiveRowProps<SectionProps>) => {
    const childrenArray = React.Children.toArray(props.children);

    const responsiveColumns = childrenArray
      .filter(isResponsiveColumn)
      .map((node) => node.props.span ?? 1);
    if (responsiveColumns.length > 3) {
      console.warn(
        "Seems like you are using more than 3 columns, maybe you should consider up to 3. Usually it is best practice to do so.",
      );
    }

    const totalColumnSpan = responsiveColumns.reduce(
      (acc, spanForColumn) => acc + spanForColumn,
      0,
    );

    const pl = props.paddingLeft ?? 0;
    const pr = props.paddingLeft ?? 0;
    const oneColumnMaxWidth =
      (props.maxWidth ?? 600 - pl - pr) / totalColumnSpan;

    return (
      <Section
        style={{
          textAlign: "center",
          fontSize: 0,
          padding: `${props.paddingTop ?? 0}px ${props.paddingRight ?? 0}px ${props.paddingBottom ?? 0}px ${props.paddingLeft ?? 0}px`,
          ...props.style,
        }}
      >
        {childrenArray.map((node, i) => {
          if (isResponsiveColumn(node)) {
            const columnProps = node.props;
            const columnSpan = columnProps.span ?? 1;

            return (
              <Section
                {...columnProps}
                key={i}
                style={{
                  maxWidth: oneColumnMaxWidth * columnSpan,
                  display: "inline-block",
                  verticalAlign: "top",
                  fontSize: 16,
                  boxSizing: "border-box",
                  ...columnProps.style,
                }}
              />
            );
          }

          return node;
        })}
      </Section>
    );
  };
}
