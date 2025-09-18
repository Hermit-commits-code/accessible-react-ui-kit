const react = (await import('eslint-plugin-react')).default
const parser = (await import('@babel/eslint-parser')).default
const presetReact = (await import('@babel/preset-react')).default

export default [
  {
    files: ['src/components/**/*.js', 'src/components/**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [presetReact],
        },
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: { react },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React recommendations
      ...react.configs.recommended.rules,
      // Your custom rules
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/prop-types': 'off', // Enable if you use PropTypes
    },
  },
]
