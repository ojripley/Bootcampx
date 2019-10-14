SELECT sum(assignment_submissions.duration) as total_duration
FROM assignment_submissions
JOIN students ON students.id = student_id
where students.name LIKE 'Ibrahim Schimmel';
