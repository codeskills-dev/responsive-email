import { SectionProps } from "jsx-email";
import {
  createResponsiveColumn,
  ResponsiveColumnProps as BaseProps,
} from "responsive-email-core";

export type ResponsiveColumnProps = BaseProps<SectionProps>;

export const { isResponsiveColumn, component: ResponsiveColumn } =
  createResponsiveColumn<SectionProps>();
