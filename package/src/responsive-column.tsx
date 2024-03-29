import { Section } from "@react-email/section";
import React from "react";

export type ResponsiveColumnProps = React.ComponentPropsWithoutRef<
  typeof Section
> & {
  span?: number;
};

export function isResponsiveColumn(
  node: any,
): node is ResponsiveColumnProps & { span: number } {
  return (
    typeof node === "object" &&
    node !== null &&
    "span" in node &&
    !React.isValidElement(node)
  );
}

export function ResponsiveColumn(props: ResponsiveColumnProps) {
  return {
    ...(props as any),
    span: props.span ?? 1,
  } as unknown as React.ReactNode;
}
