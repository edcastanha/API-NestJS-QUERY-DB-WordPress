import excuteQuery from '../../libs/dbConfig'

export default function handler(req, res) {
 
  const  Query = `
 SELECT
	ID 
FROM
	wp_posts
LIMIT 1
`;


try{
  excuteQuery(Query).then(result => {
    res.status(200).json( {conection : 'OK !'} )
  })
}catch(err){
  console.log(err)
  res.status(500).json({ statusCode: 500, message: error.message });
}

}
