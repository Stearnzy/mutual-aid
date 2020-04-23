process.env.NODE_ENV = process.env.NODE_ENV || 'test'

/*
* This line allows us to run mochapack tests alongside webpack-dev-server.
*
* If RAILS_ENV is missing, webpacker will use the defaults in webpacker.yml.
*
* Since `publicPaths` defaults to `/packs`, the same as development, running tests would
* clobber development packs. In particular, the `manifest.json` generated by mochapack
* doesn't work for the dev-server.
*/
process.env.RAILS_ENV = process.env.RAILS_ENV || 'test'

const environment = require('./environment')

const babelLoader = environment.loaders.get('babel')
babelLoader.include.push(babelLoader.include[0].concat('../../test'))

module.exports = environment.toWebpackConfig()
