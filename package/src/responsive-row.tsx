import { Section } from "@react-email/section";
import React from "react";
import { ResponsiveColumnProps, isResponsiveColumn } from "./responsive-column";

export type ResponsiveRowProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
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
  >;

  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
};

/**
 *
 * @example
 * ```tsx
 * <ResponsiveRow>
 *   <ResponsiveColumn style={{ backgroundColor: 'green' }} span={2} />
 *   <ResponsiveColumn style={{ backgroundColor: 'red' }} span={1} />
 * </ResponsiveRow>
 * ```
 */
export const ResponsiveRow = (props: ResponsiveRowProps) => {
  const childrenArray = React.Children.toArray(props.children) as unknown[];

  const columnsCount = (
    childrenArray.filter(isResponsiveColumn) as ResponsiveColumnProps[]
  ).length;

  const pl = props.paddingLeft ?? 0;
  const pr = props.paddingLeft ?? 0;
  const oneColumnMaxWidth = (600 - pl - pr) / columnsCount;

  return (
    <Section
      style={{
        textAlign: "center",
        fontSize: 0,
        padding: `${props.paddingTop ?? 0}px ${props.paddingRight ?? 0}px ${props.paddingBottom ?? 0}px ${props.paddingLeft ?? 0}px`,
        ...props.style,
      }}
    >
      {childrenArray.map((child, i) => {
        if (isResponsiveColumn(child)) {
          return (
            <Section
              {...child}
              key={i}
              style={{
                maxWidth: oneColumnMaxWidth * child.span,
                display: "inline-block",
                verticalAlign: "top",
                fontSize: 16,
                boxSizing: "border-box",
                ...child.style,
              }}
            />
          );
        }

        return child as React.ReactNode;
      })}
    </Section>
  );
};
