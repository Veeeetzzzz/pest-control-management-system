//This component connects to the PG DB and gets the data required for the dashboard view
//Make sure you import /auth/postgres-db-auth
//Make sure you update dashboard.tsx and import component/dashboard-data
import { Pool } from 'pg';

const pool = new Pool({
  // Configure your PostgreSQL connection details
  host: 'your-host',
  port: 5432,
  database: 'your-database',
  user: 'your-username',
  password: 'your-password',
});
