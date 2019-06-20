module.exports = answers => {
  const vueConfigBody = `module.exports = {
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://wp\.myapi\.com/'),
          handler: 'networkFirst',
          options: {
            networkTimeoutSeconds: ${answers.networkTimeoutSeconds},
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  }
}`;
  return vueConfigBody;
};
