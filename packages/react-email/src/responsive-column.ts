import {
  createResponsiveColumn,
  ResponsiveColumnProps as BaseProps,
} from "@responsive-email/core";

export type ResponsiveColumnProps = BaseProps;

export const { isResponsiveColumn, component: ResponsiveColumn } =
  createResponsiveColumn();
