import { Section, SectionProps } from "@react-email/section";
import { isResponsiveColumn } from "./responsive-column";
import {
  ResponsiveRowProps as BaseProps,
  createResponsiveRow,
} from "@responsive-email/core";

export type ResponsiveRowProps = BaseProps<SectionProps>;

/**
 * @example
 * ```tsx
 * <ResponsiveRow>
 *   <ResponsiveColumn style={{ backgroundColor: 'green' }} span={2} />
 *   <ResponsiveColumn style={{ backgroundColor: 'red' }} span={1} />
 * </ResponsiveRow>
 * ```
 */
export const ResponsiveRow = createResponsiveRow<SectionProps>(
  Section,
  isResponsiveColumn
);
