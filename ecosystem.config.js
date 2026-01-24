module.exports = {
  apps: [
    {
      name: 'pawavote', // App name
      script: 'server.js', // standalone entrypoint
      instances: 1, // run as many processes as CPU cores
      exec_mode: 'fork', // enables load-balancing
      autorestart: true, // restart on crash
      watch: false, // disable watch in production
      max_memory_restart: '1G', // restart if memory exceeds 1GB
      env: {
        NODE_ENV: 'production',
        NEXT_TELEMETRY_DISABLED: '1',
        PORT: process.env.PORT || 3000,
      },
    },
  ],
}
