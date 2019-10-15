SELECT avg(assistance_requests.started_at - assistance_requests.created_at) as average_wait
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = students.cohort_id
GROUP BY cohorts.name
ORDER BY average_wait;