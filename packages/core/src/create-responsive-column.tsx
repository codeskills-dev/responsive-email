import React from "react";
import { BaseSectionProps } from "./base-section-props";

export type ResponsiveColumnProps<SectionProps extends BaseSectionProps> = SectionProps & {
  span?: number;
};

export function createResponsiveColumn<TSection extends BaseSectionProps>() {

  const ResponsiveColumn = (_props: BaseSectionProps) => {
    /*
      This component is basically just a placeholder that we then get the props from.
      Once the user does something like `<ResponsiveColumn span={2}>`
      it will be equivalent to an object like
      
      ```typescript
      {
        type: [Function: ResponsiveColumn],
        props: { span: 2 },
        ...
      }
      ```

      This will allow us to get the value of the props and to know if the
      component used was the proper one.
    */
    return <></>;
  };

  return {
    isResponsiveColumn: (
      node: any,
    ): node is React.ReactElement<
      ResponsiveColumnProps<TSection>,
      typeof ResponsiveColumn
    > => {
      return (
        React.isValidElement<ResponsiveColumnProps<TSection>>(node) &&
        node.type === ResponsiveColumn
      );
    },
    component: ResponsiveColumn as React.FC<ResponsiveColumnProps<TSection>>,
  };
}
