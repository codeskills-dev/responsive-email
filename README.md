# Responsive react email

## Description

`responsive-react-email` is a utility for writing responsive email templates with `react-email`.
This tool takes on an opinionated approach to creating responsive email templates using best practices that improve support across majority of email clients.

## Table of contents

- [Installation](#installation)
- [Components](#components)
- [Single-column layout component](#single-column)
- [Dual-column layout component](#dual-column)
- [Triple-column layout component](#triple-column)
- [Supported email clients](#supported-clients)
- [Contributing](#contributing)
- [Bugs and Feature requests](#bugs-and-feature-requests)
- [Author](#author)
- [License](#license)

## Installation <a id="installation"></a>

Add `responsive-react-email` to your react-email project.

#### With yarn

```sh
yarn add responsive-react-email
```

#### With npm

```sh
npm install responsive-react-email
```

## Components <a id="components"></a>

<!-- import { DualColumn, SingleColumn, TripleColumn } from "responsive-react-email"; -->

### `SingleColumn` component <a id="single-column"></a>

a react-email component that preserves your content layout as a single column on all screen sizes in the email client.

**Example**

```
import { SingleColumn } from "responsive-react-email";

{/* OR */}

import { SingleColumn } from "responsive-react-email/single-column"; // for tree-shakeability;

export const DemoTemplate = () => {
    return(
          <Html>
            <Head />
            <Preview>Responsive Single Column Template</Preview>

            <Body>
            <Container>
                <SingleColumn children={/* Content goes here */} />

                {/* OR */}

                <SingleColumn>
                    {/* Content goes here */}
                </SingleColumn>

            </Container>
            </Body>
        </Html>
    )
}

export default DemoTemplate
```

### **Props**

#### `children` field

- **Type**: string

- **Description**: Contains the content that will be rendered in the single column layout of the email template.

#### `styles` field

- **Type**: React.CSSProperties

- **Description**: Provide custom styles for the wrapper component

#### `pX` field

- **Type**: number

- **Description**: Numerical value for padding-left and padding-right.

#### `pY` field

- **Type**: number

- **Description**: Numerical value for padding-top and padding-bottom.

### `DualColumn` component <a id="dual-column"></a>

a react-email component that displays your content in a two-column layout on big screens (tablet and desktop) and collapses to a single column on smaller screen sizes.

**Example**

```
import { DualColumn } from "responsive-react-email";

{/* OR */}

import { DualColumn } from "responsive-react-email/dual-column"; // for tree-shakeability

export const DemoTemplate = () => {
    return(
          <Html>
            <Head />
            <Preview>Responsive Dual Column Template</Preview>

            <Body>
            <Container>
                <DualColumn
                styles={/* Styles for two-column wrapper */}
                columnOneContent={
                    /* Content for the first column */
                }
                columnOneStyles={/* Styles for the first column */}
                columnTwoContent={
                 /* Content for the second column */
                }
                columnTwoStyles={/* Styles for the second column */}
                />
            </Container>
            </Body>
        </Html>
    )
}

export default DemoTemplate
```

### **Props**

#### `columnOneContent` field

- **Type**: string

- **Description**: Contains the content that will be rendered in the first column of the dual-column layout of the email template.

#### `columnOneStyles` field

- **Type**: string

- **Description**: Provide custom styles for the first column of the dual-column layout of the email template.

#### `columnTwoContent` field

- **Type**: string

- **Description**: Contains the content that will be rendered in the second column of the dual-column layout of the email template.

#### `columnTwoStyles` field

- **Type**: string

- **Description**: Provide custom styles for the second column of the dual-column layout of the email template.

#### `styles` field

- **Type**: React.CSSProperties

- **Description**: Provide custom styles for the wrapper component

#### `pX` field

- **Type**: number

- **Description**: Numerical value for padding-left and padding-right.

#### `pY` field

- **Type**: number

- **Description**: Numerical value for padding-top and padding-bottom.

### `TripleColumn` component <a id="triple-column"></a>

a react-email component that displays your content in a three-column layout on big screens and collapses in a sort of `flex-wrap: wrap` manner till it gets to a single column on smaller screen sizes.

**Example**

```
import { TripleColumn } from "responsive-react-email";

{/* OR */}

import { TripleColumn } from "responsive-react-email/triple-column"; // for tree-shakeability

export const DemoTemplate = () => {
    return(
          <Html>
            <Head />
            <Preview>Responsive Dual Column Template</Preview>

            <Body>
            <Container>
                <TripleColumn
                styles={/* Styles for two-column wrapper */}
                columnOneContent={
                    /* Content for the first column */
                }
                columnOneStyles={/* Styles for the first column */}
                columnTwoContent={
                 /* Content for the second column */
                }
                columnTwoStyles={/* Styles for the second column */}
                 columnThreeContent={
                 /* Content for the third column */
                }
                columnThreeStyles={/* Styles for the third column */}
                />
            </Container>
            </Body>
        </Html>
    )
}

export default DemoTemplate
```

### **Props**

#### `columnOneContent` field

- **Type**: string

- **Description**: Contains the content that will be rendered in the first column of the triple-column layout of the email template.

#### `columnOneStyles` field

- **Type**: string

- **Description**: Provide custom styles for the first column of the triple-column layout of the email template.

#### `columnTwoContent` field

- **Type**: string

- **Description**: Contains the content that will be rendered in the second column of the triple-column layout of the email template.

#### `columnTwoStyles` field

- **Type**: string

- **Description**: Provide custom styles for the second column of the triple-column layout of the email template.

#### `columnThreeContent` field

- **Type**: string

- **Description**: Contains the content that will be rendered in the third column of the triple-column layout of the email template.

#### `columnThreeStyles` field

- **Type**: string

- **Description**: Provide custom styles for the third column of the triple-column layout of the email template.

#### `styles` field

- **Type**: React.CSSProperties

- **Description**: Provide custom styles for the wrapper component

#### `pX` field

- **Type**: number

- **Description**: Numerical value for padding-left and padding-right.

#### `pY` field

- **Type**: number

- **Description**: Numerical value for padding-top and padding-bottom.

## Supported Email Clients <a id="supported-clients"></a>

The provided React-email components and default styling are designed to work well across various email clients and providers. However, due to the inconsistent support for modern web standards in different email clients, it's recommended to test your email templates in multiple clients to ensure compatibility.

The following email clients are known to be supported:

| <img src="https://react.email/static/icons/gmail.svg" width="48px" height="48px" alt="Gmail logo"> | <img src="https://react.email/static/icons/apple-mail.svg" width="48px" height="48px" alt="Apple Mail"> | <img src="https://react.email/static/icons/outlook.svg" width="48px" height="48px" alt="Outlook logo"> | <img src="https://react.email/static/icons/yahoo-mail.svg" width="48px" height="48px" alt="Yahoo! Mail logo"> | <img src="https://react.email/static/icons/hey.svg" width="48px" height="48px" alt="HEY logo"> | <img src="https://react.email/static/icons/superhuman.svg" width="48px" height="48px" alt="Superhuman logo"> |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Gmail ✔                                                                                            | Apple Mail ✔                                                                                            | Outlook ✔                                                                                              | Yahoo! Mail ✔                                                                                                 | HEY ✔                                                                                          | Superhuman ✔                                                                                                 |

## Contributing <a id="contributing"></a>

Contributions to `responsive-react-email` are welcome! If you find a bug, have suggestions for improvements, or want to add new features, feel free to open an issue or submit a pull request. Please make sure to follow the existing coding style and conventions.

When submitting a pull request, provide a clear description of the changes made and ensure that all tests pass. Adding appropriate tests for new features or bug fixes is highly appreciated.

## Bugs and Feature Requests <a id="bugs-and-feature-requests"></a>

For bugs and feature requests, [please create an issue](https://github.com/codeskills-dev/responsive-react-email/issues/new).

## Author <a id="author"></a>

- Paul Ehikhuemen ([@pauloe_me](https://twitter.com/pauloe_me))

## License <a id="license"></a>

`responsive-react-email` is licensed under the MIT License.
