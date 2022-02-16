module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/api/graphql",
        permanent: false,
      },
    ];
  },
};
