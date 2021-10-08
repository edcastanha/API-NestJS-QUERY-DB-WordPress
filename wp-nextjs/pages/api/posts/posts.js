import excuteQuery from '../../../libs/dbConfig'

export default async (req, res) => {
    const queryPosts = `SELECT
	ID ,
	guid as post_url,
	post_title,
	post_content,
	post_date_gmt
FROM
	wp_posts
LEFT JOIN wp_term_relationships tr ON
	tr.object_id = ID 
	AND tr.term_taxonomy_id IN (3, 10)
LEFT JOIN wp_terms wt ON
	wt.term_id = tr.term_taxonomy_id
WHERE
	post_type = 'post'
AND 
	wt.term_id IN (3, 10)
AND 
	post_status IN ('publish', 'inherit')
GROUP BY
	ID 
ORDER BY
	ID 
DESC
LIMIT 4
`;

    try {
        const data = [];

        switch (req.method) {
            case 'GET':
                const resultPosts = await excuteQuery({
                    query: queryPosts,
                });

                if (resultPosts.length > 0) {
                    res.status(200).json(resultPosts);
                }

            /* 
            Caso necessario realizar tratamento e seleção de informações retornadas da query
            */


            break;

            default:
                res.status(405).json({ message: `Method ${req.method} Not Permited` });
                break;

        }// SWITCH
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: error.message });
    }

}