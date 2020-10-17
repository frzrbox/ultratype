const { dest, src } = require("gulp");
const cleanCSS = require("gulp-clean-css");

// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === "production";

// An array of outputs that should be sent over to includes
const criticalStyles = [
  "critical.css",
  "home-critical.css"
];

// Takes the arguments passed by `dest` and determines where the output file goes
const calculateOutput = ({ history }) => {
  // By default, we want a CSS file in our dist directory, so the
  // HTML can grab it with a <link />
  let response = "./dist/css";

  // Get everything after the last slash
  const sourceFileName = /[^/]*$/.exec(history[0])[0];

  // If this is critical CSS though, we want it to go
  // to the _includes directory, so nunjucks can include it
  // directly in a <style>
  if (criticalStyles.includes(sourceFileName)) {
    response = "./site/_includes/";
  }

  return response;
};

const css = () => {
  return src("./site/css/**/*")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest(calculateOutput, { sourceMaps: !isProduction }));
};

module.exports = css;