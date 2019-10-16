const args = process.argv.slice(2);
const queryVars = [`%${args[0]}%`, args[1]];
const { Pool } = require('pg');

const pool = new Pool({
  user: 'rips',
  password: 'ripsj',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort_name
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2
`, queryVars)
  .then(res => {
    res.rows.forEach(student => {
      console.log(`${student.name} has an id of ${student.id} and was in the ${student.cohort_name} cohort.`);
    });
  })
  .catch(error => console.error('query error', error.stack));