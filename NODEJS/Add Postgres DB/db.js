const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL);

function setupDb() {
    const createTable = `
    CREATE TABLE IF NOT EXISTS planets (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
    );
  `;

    const insertData = `
    INSERT INTO planets (name) VALUES
      ('Earth'),
      ('Mars');
  `;

    return db.none(createTable + insertData);
}

module.exports = {db, setupDb};
