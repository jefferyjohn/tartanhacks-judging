const backends = {
  local: "https://backend.tartanhacks.com",
  development: "https://stg-backend.tartanhacks.com",
  staging: "https://stg-backend.tartanhacks.com",
  production: "https://backend.tartanhacks.com"
}
module.exports = {
  poweredByHeader: false,
  reactStrictMode: false,
  env: {
    BACKEND_URL: backends[process.env.NODE_ENV ?? "production"],
    JUDGING_URL: "https://judging-backend.herokuapp.com/"
  }
}
