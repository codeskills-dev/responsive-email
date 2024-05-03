# Responsive Email

`responsive-email` is a framework-agnostic set of utility components that allow to build
responsive email templates with the best support possible. It does not make use of
media queries nor other unsupported ways of doing responsiveness on emails.

## Installation

```bash
npm install @responsive-email/react-email
```

## Components

### `<ResponsiveRow>` and `<ResponsiveColumn>`

```tsx
<ResponsiveRow>
  <ResponsiveColumn span={1}>First</ResponsiveColumn>
  <ResponsiveColumn span={2}>Second</ResponsiveColumn>
  <ResponsiveColumn span={1}>Third</ResponsiveColumn>
</ResponsiveRow>
```

These two components are only meant to be used in unison as shown in the above example.

The `<ResponsiveRow>` will divide its `maxWidth` (which is 600 by default) into the amount
of columns you pass onto it. It does this by detecting which one of the children are actually
an instance of `<ResponsiveColumn>` based on the fact that all React elements are actually objects
under the hood that, if they represent a Function Component instance, have their props exposed and easy to access.

The `<ResponsiveColumn>` by itself only renders a Fragment as it is meant to only be rendered
inside the `<ResponsiveRow>`. The `span` property allows the user to increase the size of a certain
column so that its width can be the sum of the respective amount of columns specified in `span`, e.g.
`span={2}` will result into a column that _has a width of two columns_.

The `<ResponsiveRow>` will also log a warning if it finds you are using more than three columns,
as is best practice to use only three columns on email templates.

Each column will wrap in the same way as `flex` itself would, this is a behavior is known as "collapsing" can occur.
In this context, "collapsing" refers to the behavior where the `ResponsiveColumn` elements wrap onto a new line within the table, rather than expanding the table's width to accommodate their combined width.

## Contributing

Contributions to `responsive-email` are welcome! If you find a bug, have suggestions for improvements, or want to add new features, feel free to open an issue or submit a pull request. Please make sure to follow the existing coding style and conventions.

When submitting a pull request, provide a clear description of the changes made and ensure that all tests pass. Adding appropriate tests for new features or bug fixes is highly appreciated.

## Bugs and Feature Requests

For bugs and feature requests, [please create an issue](https://github.com/codeskills-dev/responsive-email/issues/new).

## Author

- Paul Ehikhuemen ([@pauloe_me](https://twitter.com/pauloe_me))

## License

`responsive-email` is licensed under the MIT License.
