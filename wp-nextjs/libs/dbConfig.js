import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD
  }
});

//Teste de conectividade
db.connect((err) => {
  if (err) {
    console.error('Falha de conexão: ' + err.stack);
    return;
  }
  console.log('Conectado ao DB WP ' + db.stack);
});


export default async function excuteQuery({ query }) {
  try {
    const results = await db.query(query);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}