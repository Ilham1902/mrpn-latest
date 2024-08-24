module.exports = {
  apps : [{
    name: "mrpn-fe",
    script: "yarn",
    args: "start:prod",
    watch: true,
    env: {
      NODE_ENV: "production",
    }
  }]
};