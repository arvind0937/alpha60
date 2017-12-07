import path from 'path';

module.exports = {
    entry: "../src/server/server.js",
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: "server.js"
    },
    module: {
        loaders: [
            // { test: /\.css$/, loader: "style!css" }
        ]
    }
};
