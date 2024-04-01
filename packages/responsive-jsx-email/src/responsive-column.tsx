import { Section } from "jsx-email";
import React from "react";

export type ResponsiveColumnProps = React.ComponentPropsWithoutRef<
  typeof Section
> & {
  span?: number;
};

export function isResponsiveColumn(
  node: any,
): node is React.ReactElement<ResponsiveColumnProps, typeof ResponsiveColumn> {
  return (
    React.isValidElement<ResponsiveColumnProps>(node) &&
    node.type === ResponsiveColumn
  );
}

export function ResponsiveColumn(_props: ResponsiveColumnProps) {
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
}
