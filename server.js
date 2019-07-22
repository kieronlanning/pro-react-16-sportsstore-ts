const express = require("express");
const jsonServer = require("json-server");
const chokidar = require("chokidar");
const cors = require("cors");
const filename = process.argv[2] || "./server-data.js";
const port = process.argv[3] || 3500;

let router = undefined;

const app = express();
const createServer = () => {
    delete require.cache[require.resolve(filename)];
    setTimeout(() => {
        router = jsonServer.router(filename.endsWith(".js")
            ? require(filename)()
            : filename);
    }, 100)
};

createServer();

app
    .use(cors())
    .use(jsonServer.bodyParser)
    .use("/api", (request, response, next) => router(request, response, next));

chokidar.watch(filename).on("change", () => {
    console.info("Reloading web service data...");

    createServer();

    console.info("Reloading web service data complete.");
});

app.listen(port, () => console.info(`Web service running on port ${port}.`));