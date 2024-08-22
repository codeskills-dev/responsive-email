import React from "react";
import { ResponsiveColumnProps } from "./create-responsive-column";

export type ResponsiveRowProps = Omit<React.ComponentPropsWithoutRef<'table'>, 'style'> & {
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

export function createResponsiveRow(
  isResponsiveColumn: (
    node: any,
  ) => node is React.ReactElement<
    ResponsiveColumnProps,
    React.FC<ResponsiveColumnProps>
  >,
) {
  return (props: ResponsiveRowProps) => {
    const childrenArray = React.Children.toArray(props.children);

    const responsiveColumns = childrenArray
      .filter(isResponsiveColumn)
      .map((node) => node.props.span ?? 1);
    if (responsiveColumns.length > 3) {
      console.warn(
        "You've exceeded the recommended 3-column limit in your email template. Consider sticking to a maximum of 3 columns for best practice.",
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
      <table
        align="center"
        width="100%"
        border={0}
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        {...props}
        style={{
          textAlign: "center",
          fontSize: 0,
          ...props.style,
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                padding: `${props.paddingTop ?? 0}px ${
                  props.paddingRight ?? 0
                }px ${props.paddingBottom ?? 0}px ${props.paddingLeft ?? 0}px`,
              }}
            >
              {childrenArray.map((node, i) => {
                if (isResponsiveColumn(node)) {
                  const columnProps = node.props;
                  const columnSpan = columnProps.span ?? 1;

                  return (
                    <table
                      key={i}
                      align="center"
                      width="100%"
                      border={0}
                      cellPadding="0"
                      cellSpacing="0"
                      role="presentation"
                      {...columnProps}
                      style={{
                        maxWidth: oneColumnMaxWidth * columnSpan,
                        display: "inline-block",
                        verticalAlign: "top",
                        fontSize: 16,
                        boxSizing: "border-box",
                        ...columnProps.style,
                      }}
                    >
                      <tbody>
                        <tr>
                          <td {...columnProps.tdProps}>{columnProps.children}</td>
                        </tr>
                      </tbody>
                    </table>
                  );
                }

                return node;
              })}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
}
