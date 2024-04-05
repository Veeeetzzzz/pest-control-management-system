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


export default async function handler(req, res) {
  try {
    const result = await pool.query('SELECT * FROM your_table');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching data from PostgreSQL:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
