import * as url from "url";
import * as path from "path";
import config from "./config.json";

process.env.NODE_ENV = config.env;

export const getLoadUrl = (): string | never => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:8080";
  } else if (process.env.NODE_ENV === "production") {
    return url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    });
  }

  throw new Error("[utils] get environment error");
};
