const args = process.argv.slice(2);

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
`)
  .then(res => {
    let i = 0;
    res.rows.forEach(student => {
      if (student.cohort_name === args[0] && i < args[1]) {
        console.log(`${student.name} has an id of ${student.id} and was in the ${student.cohort_name} cohort.`);
        i++;
      }
    });
  })
  .catch(error => console.error('query error', error.stack));