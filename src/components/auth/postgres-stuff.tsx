//This component calls your Postgres database to populate the dashboard view
//Change the SELECT query for your schema

import { Pool } from 'pg';

const pool = new Pool({
  // Configure your PostgreSQL connection details
  host: 'your-host',         // 'localhost' if connecting locally
  port: 5432,                // Default PostgreSQL port
  database: 'PestControlManagement',
  user: 'your-username',     // Replace with your username
  password: 'your-password', // Replace with your password
});

export default async function handler(req, res) {
  try {
    const result = await pool.query('SELECT * FROM Invoice');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching data from PostgreSQL:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
