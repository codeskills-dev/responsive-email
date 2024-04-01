import { SectionProps } from "@react-email/section";
import {
  createResponsiveColumn,
  ResponsiveColumnProps as BaseProps,
} from "responsive-email-core";

export type ResponsiveColumnProps = BaseProps<SectionProps>;

export const { isResponsiveColumn, component: ResponsiveColumn } =
  createResponsiveColumn<SectionProps>();
