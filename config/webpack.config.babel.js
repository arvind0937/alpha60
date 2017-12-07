import merge from 'webpack-merge';
import webpackClient from './webpack.client.config.babel';
import webpackServer from './webpack.server.config.babel';
module.exports = merge(webpackClient, webpackServer);
