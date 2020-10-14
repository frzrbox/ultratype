const { parallel, watch } = require('gulp');
// Pull in tasks
const css = require("./gulp-tasks/css");
const runBabel = require("./gulp-tasks/babel");


// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
    watch("./site/css/**/*", { ignoreInitial: true }, css);
    watch("./site/js/**/*", { ignoreInitial: true }, runBabel);
};

// The default (if someone just runs `gulp`) is to run each task in parrallel
exports.default = parallel(css, runBabel);

// This is our watcher task that instructs gulp to watch directories and
// act accordingly
exports.watch = watcher;