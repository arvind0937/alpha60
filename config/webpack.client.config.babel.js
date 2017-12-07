import path from 'path';

module.exports = {
    entry: "../src/client/app.js",
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: "app.js"
    },
    module: {
        loaders: [
            // { test: /\.css$/, loader: "style!css" }
        ]
    }
};
