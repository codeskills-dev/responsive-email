import React from "react";
import { BaseSectionProps } from "./base-section-props";

export type ResponsiveColumnProps = React.ComponentPropsWithoutRef<'table'> & {
  span?: number;
  tdProps?: React.ComponentPropsWithoutRef<'td'>;
};

export function createResponsiveColumn() {
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
      ResponsiveColumnProps,
      typeof ResponsiveColumn
    > => {
      return (
        React.isValidElement<ResponsiveColumnProps>(node) &&
        node.type === ResponsiveColumn
      );
    },
    component: ResponsiveColumn as React.FC<ResponsiveColumnProps>,
  };
}
