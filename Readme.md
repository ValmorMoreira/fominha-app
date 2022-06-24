## Fominha App

##### O aplicativo Fominha é uma maneira dos usuários buscarem rapidamente por receitas e também, compartilharem as suas habilidades de gastronomia.

## Splash Screen

###### Posteriormente será implementada uma tela de splash para dar início ao aplicativo

## Register 

##### Aqui o usuário vai efetuar seu cadastro no App

<img src="./assets/wireframes/register.png " width="300">

## Login 

##### Aqui o usuário vai efetuar seu login no App

<img src="./assets/wireframes/login.png " width="300">

## Tela Home

##### Aqui o usuário recebe as boas vindas após o login e tem alguns botões "call to action" para interagir com o app.

<img src="./assets/wireframes/home.png " width="300">

## Cadastrar receita

### Esta tela vai se comunicar com o banco de dados para registrar a receita do usuário.

<img src="./assets/wireframes/recipe-register.png " width="300">

## Editar receita

### Esta tela o usuário pode corrigir erros ou complementar uma receita já cadastrada por ele no app.

<img src="./assets/wireframes/recipe-edit.png " width="300">

## Tela detalhes da receita

<img src="./assets/wireframes/recipe-description.png " width="300">

## Listagem das receitas

##### Nesta tela serão listadas as receitas já cadastradas, o usuário terá a possibilidade de clicar em uma para abrir a descrição dela. 

<img src="./assets/wireframes/recipes-list.png " width="300">

### API Burgers 

<img src="./assets/wireframes/burgers-list.png " width="300">

#### Aqui serão listados burgers como sugestão para o usuário.
##### https://rapidapi.com/coltla/api/burgers1/

### Sobre

##### Tela de informação apenas da versão, desenvolvedor ou agradecimentos.

<img src="./assets/wireframes/about.png " width="300">

## Cronograma de desenvolvimento

### AA1

##### Wireframes - 25/04/2022 ✅

##### Criação do git para o projeto - 25/04/2022 ✅

### AA2 - A definir...

#### Criação da base de dados - 01/06/2022 ✅

### Criação de Alert em funcionalidade - 05/06/2022 ✅

#### Alertas de erros - 08/06/2022 ✅

#### Imagens das receitas -  (Em progresso...)

### Projeto final - (Em andamento)

## Backlog 

### Correções da AA1 efetuadas

#### Utilizei o código "keyExtractor={(item, index) => index} " para corrigir o erro de chaves da FlatList.

#### Adicionado uma ScrollView na tela Home para que em telas menores apareçam todos os componentes.

### Implementação de armazenamento de dados com SQLITE 

#### Irei utilizar o banco de dados SQLITE para armazenamento de dados da aplicação, e também todas as operaçãos de CRUD que serão usadas no aplicativo de receitas.

### Alert, Modal e ActionSheet

#### Modal implementado com sucesso na tela do "About" falta apenas estilizar e também na descrição das receitas do usuário.

#### Também utilizando "Alert" para notificar que a receita foi cadastrada com sucesso e outros avisos de erro ou de sucesso.

### Acesso à API Remota

#### Estou utilizando uma API do rapidapi chamada de "Burgers" que retorna uma lista de burgers.

### Recurso inédito

#### Foi criado um componente de busca para filtrar as receitas, e também estou aplicando o uso do ImagePicker para salvar e cadastrar a imagem das receitas.

##### Estou testando utilizar este recurso https://docs.expo.dev/versions/latest/sdk/imagepicker/

#### Tradução do APP para inglês e português em andamento no projeto...

## Observções

#### Ainda falta atualizar os prints das telas com o visual novo aqui no ReadMe.md

#### Também falta ainda a validação do login e de formulários.

#### Buscando solução atualmente para enviar os proops do modal da receita selecionada, para a tela de editar receita e posteriormente chamar o método UPDATE do SQLITE.





