import merge from 'webpack-merge';
import webpackClient from './webpack.client.config.babel';
import webpackServer from './webpack.server.config.babel';
const config = merge(webpackClient, webpackServer);

export default function (env){
    const mode  = env && env.production ? 'production' : 'development';
   return [Object.assign({mode}, webpackClient), Object.assign({mode}, webpackServer)];
};
