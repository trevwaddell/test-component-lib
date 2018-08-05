const resolve = require("rollup-plugin-node-resolve");
const babel = require("rollup-plugin-babel");

export default {
  input: "lib/index.js",
  output: {
    file: "build/index.js",
    format: "cjs"
  },
  // All the used libs needs to be here
  external: ["react", "react-native-web", "react-proptypes"],
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      presets: ["env", "react"],
      exclude: "node_modules/**"
    })
  ]
};
