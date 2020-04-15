import jsf from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

jsf.resolve(schema).then(function (result) {
  fs.writeFile(
    "./src/api/database.json",
    JSON.stringify(result, null, 2),
    function (err) {
      if (err) {
        // eslint-disable-next-line no-console
        return console.log(chalk.red(err));
      } else {
        // eslint-disable-next-line no-console
        console.log(chalk.green("Mock Data Generated Here:"));
      }
    }
  );
});

// const json = JSON.stringify(jsf(schema));

// fs.writeFile("./src/api/database.json", json, function (err) {
//   if (err) {
//     return console.log(chalk.red(err));
//   } else {
//     console.log(chalk.green("Mock data generated."));
//   }
// });
