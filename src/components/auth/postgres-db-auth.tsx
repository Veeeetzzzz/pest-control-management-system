//This component will handle the inital DB connection for the application
//It must be imported into each component
const pool = new Pool({
  // Configure your PostgreSQL connection details
  host: 'your-host',
  port: 5432,
  database: 'your-database',
  user: 'your-username',
  password: 'your-password',
});
