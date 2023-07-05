# Falsy values

In JavaScript, the values below will be converted to `false` and everything else will be converted to `true`:

- `false` (is already a boolean)
- `null`
- `undefined`
- `0`
- `NaN`
- `""` (empty string)

These values above are called falsy values because, when converted to boolean, they will be converted to `false`.

If you think about it, `null`, `undefined`, `""` and `0` are all representing "nothing". Which is why they are converted to false.
