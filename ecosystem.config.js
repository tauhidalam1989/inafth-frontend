module.exports = {
  apps: [
    {
      name: 'screening-frontend',
      script: './start-server.js',
      cwd: './',
      interpreter: 'node',
      env: {
        NODE_ENV: 'development',
        PORT: 4200
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      instances: 1
    }
  ]
};

