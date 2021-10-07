# API-NestJS-QUERY-DB-WordPress
API realiza busca dos dados de postagens por categoria de banco Mysql de Blog em Wordpress

<div >
  Render Side
  <img src="https://icongr.am/simple/nextjs.svg?size=128&color=currentColor&colored=false" />
  <h2>By</h2>
  CMS<img src="https://icongr.am/simple/wordpress.svg?size=128&color=currentColor&colored=false" />
  
</div>


##

  ## - 🚀 Construção de ambiente via NPM:
    
    - Comando padrão npx create nextjs
    - Limpeza dos arquivos padrões.
     -- Observação: Não fazemos alterações este momento no layout ou template da aplicação no Frontend.
    - No diretório < projeto > no subdire´ório < pages > adicione a pasta conforme
     o endpoint que desejas, no exemplo < posts >.
  
  ## - 🌄 Pensando no Fluxo:

    [ ] Necfessario a criação de lib para tratar as configurações para DB Mysql do CMS Wordpress.
      -- Preferencialmente, por questões de segurança o uso de variaveis de ambiente (.env.local ).
    
##
  ### EXEMPLO DotEnv 9.env.local)

  ´´´   MYSQL_HOST      = < ! - Dados confidenciais  > 
        MYSQL_DATABASE = < ! - Dados confidenciais  >
        MYSQL_USERNAME = < ! - Dados confidenciais  >
        MYSQL_PASSWORD = < ! - Dados confidenciais  >
        URI_HOST= 'http://localhost:3000' 
  ´´´
##
    [ ] Instalando pacote para utilização de arquivos .env
      *  npm install dotenv   
    [ ] Instalando pacote MySQL 
      * npm install serverless-mysql
    [ ] Criar pasta lib no diretório principal do projeto
    