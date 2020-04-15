import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";
import chalk from "chalk";

process.env.NODE_ENV = "production";

// eslint-disable-next-line no-console
console.log(chalk.blue("Generating minified bundle for production..."));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStas = stats.toJson();

  if (jsonStas.hasErrors) {
    // eslint-disable-next-line no-console
    return jsonStas.errors.map((error) => console.log(chalk.red(error)));
  }

  if (jsonStas.hasWarnings) {
    // eslint-disable-next-line no-console
    console.log(chalk.yellow("Webpack generated the following warnings;"));
    // eslint-disable-next-line no-console
    return jsonStas.warnings.map((warning) => console.log(chalk.red(warning)));
  }
  // eslint-disable-next-line no-console
  console.log(`Webpack stats: ${stats}`);

  //TODO: If we got this far, the build succeeded
  // eslint-disable-next-line no-console
  console.log(
    chalk.green("Your app has been built for production and written to /dist!")
  );

  return 0;
});
