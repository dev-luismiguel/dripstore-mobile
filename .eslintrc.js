module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "universe",
  ],
  ignorePatterns: [
    "**/*.config.js",
    "supabase/database.types.ts",
    ".*rc.js",
    "*.setup.js",
    "**/plugins/*.js",
  ],
  rules: {
    // Disables the requirement to sort import declarations within module (handled by Prettier)
    "import/order": "off",
  },
  parserOptions: { project: true },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
      rules: {
        // Enforces consistent type definitions (preferring `type` over `interface` for better IDE support)
        "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
        // Enforces naming conventions for different types of variables
        "@typescript-eslint/naming-convention": [
          "warn",
          {
            // Interface names should be PascalCase and prefixed with I
            selector: "interface",
            format: ["PascalCase"],
            prefix: ["I"],
          },
          {
            // Type alias names should be PascalCase and suffixed with Type
            selector: "typeAlias",
            format: ["PascalCase"],
            suffix: ["Type"],
          },
          {
            // Enum names should be PascalCase and suffixed with Enum
            selector: "enum",
            format: ["PascalCase"],
            suffix: ["Enum"],
          },
          {
            // Boolean variable names should be camelCase and prefixed with is, should, has, can, will
            selector: "variable",
            types: ["boolean"],
            format: ["camelCase", "PascalCase"], // the prefix is trimmed before format is validated, therefore PascalCase must be used to allow variables such as `isEnabled` using the prefix `is`
            prefix: ["is", "should", "has", "can", "will", "are"],
          },
        ],
        // Ensure promises are handled or explicitly ignored with void
        "@typescript-eslint/no-floating-promises": [
          "warn",
          { ignoreVoid: true },
        ],
        // Prefer nullish coalescing over logical OR (e.g. `foo ?? bar` over `foo || bar`)
        "@typescript-eslint/prefer-nullish-coalescing": [
          "warn",
          {
            ignoreConditionalTests: true,
          },
        ],
        // Enforce no default export (use named exports instead)
        "import/no-default-export": "warn",
        // Enforce a maximum of 2 parameters in functions to encourage object parameters (e.g. `({ foo, bar })` over `(foo, bar)`)
        "max-params": ["warn", 2],
        // Enforce explcit coercion (e.g. `Boolean(foo)` over `!!foo`)
        "no-implicit-coercion": "warn",
        // Allow void as a statement (e.g. `void foo()` is allowed but not `const bar = void foo()`)
        "no-void": ["warn", { allowAsStatement: true }],
        // Enforce consistent function declarations by preferring arrow functions (e.g. `const foo = () => {}` over `function foo() {}`)
        "prefer-arrow-callback": "warn",
        // Enforces consistent use of JSX boolean values (e.g. `isDisabled` over `isDisabled={true}`)
        "react/jsx-boolean-value": ["warn", "never"],
        // Warns if unnecessary curly braces are present in JSX props or children (e.g. `<Component prop='foo' />` over `<Component prop={'foo'} />`)
        "react/jsx-curly-brace-presence": [
          "warn",
          { props: "never", children: "never" },
        ],
        // Enforces consistent use of file extension within JSX syntax  (must use .tsx for React components)
        "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
        // Enforce consistent naming for event handler props (e.g. <MyComponent onChange={handleChange} /> and <MyComponent onChange={props.onChange} />
        "react/jsx-handler-names": "warn",
        // Enforces PascalCase for user-defined JSX components (e.g. `<MyComponent />` over `<myComponent />`)
        "react/jsx-pascal-case": ["error", { ignore: [] }],
        // Enforces where React component should be wrapped
        "react/jsx-wrap-multilines": [
          "error",
          {
            declaration: "parens-new-line",
            assignment: "parens-new-line",
            return: "parens-new-line",
            arrow: "parens-new-line",
          },
        ],
        // Enforces arrow function for component definition
        "react/function-component-definition": [
          1,
          { namedComponents: "arrow-function" },
        ],
        // Disables the requirement to have React in JSX scope
        "react/react-in-jsx-scope": "off",
        // Ensures props and state inside functions are always up-to-date
        "react-hooks/exhaustive-deps": "warn",
      },
    },
    {
      plugins: ["filenames"],
      files: ["./components/**/*.tsx"],
      rules: {
        // Enforces all components begin with 2 letter project prefix to prevent naming conflicts
        "filenames/match-regex": ["error", "^Ds", true],
        // Disable the max-params rule for components to support forwardRefs
        "max-params": "off",
      },
    },
    {
      // Disable certain rules for expo router files
      files: ["app/**/*.tsx"],
      rules: {
        // Disable the requirement for named exports
        "import/no-default-export": "off",
        // Disable the requirement for arrow functions
        "prefer-arrow-callback": "off",
        // Disable the requirement for arrow function components
        "react/function-component-definition": "off",
      },
    },
  ],
};
