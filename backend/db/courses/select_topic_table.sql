-- récupérer les identifiants des cours d'un topic
-- SELECT topic.id, topic_name, GROUP_CONCAT(course.id) AS courses_id
--       FROM dentarius.topic
--       JOIN dentarius.course
--       JOIN dentarius.course_topic
--       ON course_topic.topic_id = topic.id
--       AND course_topic.course_id = course.id
--     --   AND course_topic.topic_id
--     --   JOIN dentarius.course ON course_topic.course_id
--     GROUP BY topic.id
--     -- WHERE topic.id = 1
--     ;

-- récupérer les cours d'un topic
SELECT course.*
FROM dentarius.course
JOIN dentarius.topic
JOIN dentarius.course_topic
ON course_topic.topic_id = topic.id
AND course_topic.course_id = course.id
WHERE topic.id = 2
;

-- récupérer les cours à partir d'une liste d'identifiants
-- SELECT course.*
-- FROM dentarius.course
-- WHERE course.id IN (1,2);