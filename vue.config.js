module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/project_beer/'
  : '/'
}
