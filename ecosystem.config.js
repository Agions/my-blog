module.exports = {
  apps: [
    {
      name: "app",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
      watch: ".",
    },
  ],
}
