module.exports = (answers, nuxtConfigFile) => {
  const workbox = nuxtConfigFile.replace(
    `loading: { color: "#fff" },`,
    `loading: { color: "#fff" },

  workbox: {
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
  },`
  );
  return workbox;
};
