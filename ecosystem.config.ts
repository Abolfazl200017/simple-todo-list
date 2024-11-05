module.exports = {
  apps: [
    {
      name: "my-app",
      script: "npm",
      args: "run start",
      instances: "max",
      exec_mode: "cluster",
      max_memory_restart: "1G",
      watch: false,
      autorestart: true,
      restart_delay: 5000,
    },
  ],
};