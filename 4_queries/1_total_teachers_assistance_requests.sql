SELECT COUNT(assistance_requests.*) as total_assistences, teachers.name
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.name;