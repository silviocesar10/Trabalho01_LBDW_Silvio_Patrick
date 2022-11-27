# Trabalho01_LBDW_Silvio
Respositorio para o primeiro trabalho na disciplina de laboratorio de desenvolvimento web ifes cachoeiro de itapemirim

## Configuração local do projeto
Para que o projeto rode acessando o mongodb de forma local faz se necessario que exista um arquivo .env na raiz do projeto com a seguinte configuração, vale ressaltar que na pasta resources ha um arquivo .env.exemplo que pode ser renomeado para .env e colocado na raiz e ser usado como base para as configurações do .env:
```
MONGODB_URL_LOCAL=mongodb://localhost:{porta onde o mongodb esta rodando}/academia

JWT_SECRET=
```
É importante ressaltar que o conteudo de JWT_SECRET deve ser gerado separadamente pois ali deve conter um token secreto que somente a aplicacao deve acessar, nesse caso vale ressaltar que estamos usando um token de base64, é possivel gerar um token no site <a href="https://www.convertsimple.com/random-base64-generator/">www.conversimple.com</a>
