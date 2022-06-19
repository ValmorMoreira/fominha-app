## Fominha App

##### O aplicativo Fominha é uma maneira dos usuários buscarem rapidamente por receitas e também, compartilharem as suas habilidades de gastronomia.

## Splash Screen

###### Posteriormente será implementada uma tela de splash para dar início ao aplicativo

## Register 

##### Aqui o usuário vai efetuar seu cadastro no App

![This is a alt text.](/assets/wireframes/register.png "Tela de cadastro.")

## Login 

##### Aqui o usuário vai efetuar seu login no App

![This is a alt text.](/assets/wireframes/login.png "Tela de login.")


## Tela Home

##### Aqui o usuário recebe as boas vindas após o login e tem alguns botões "call to action" para interagir com o app.

![This is a alt text.](/assets/wireframes/home.png "Home.")

## Cadastrar receita

### Esta tela vai se comunicar com o banco de dados para registrar a receita do usuário.

![This is a alt text.](/assets/wireframes/recipe-register.png "Tela de cadastro de receitas.")

## Editar receita

### Esta tela o usuário pode corrigir erros ou complementar uma receita já cadastrada por ele no app.

![This is a alt text.](/assets/wireframes/recipe-edit.png "Tela de edição de receitas.")

## Favoritas

### Nesta tela o usuário tem acesso as receitas que deu "like" (favoritou).

![This is a alt text.](/assets/wireframes/favorite.png "Tela de receitas favoritas.")

## Tela detalhes da receita

![This is a alt text.](/assets/wireframes/recipe-description.png "Tela detalhes da receita.")

## Listagem das receitas

##### Nesta tela serão listadas as receitas já cadastradas, o usuário terá a possibilidade de clicar em uma para abrir a descrição dela e favoritar se desejar. 

![This is a alt text.](/assets/wireframes/recipes-list.png "Listagem das receitas.")


### Sobre

##### Tela de informação apenas da versão, desenvolvedor ou agradecimentos.

![This is a alt text.](/assets/wireframes/about.png "Tela sobre.")

_O design UX ainda está em fase inicial, então seria uma pequena evoçução do sketch "esboço a lápis" do design final._

## Cronograma de desenvolvimento

### AA1

##### Wireframes - 25/04/2022 ✅

##### Criação do git para o projeto - 25/04/2022 ✅

### AA2 - A definir...

#### Criação da base de dados - 01/06/2022 ✅

### Criação de Alert em funcionalidade - 05/06/2022 ✅

#### Alertas de erros - 08/06/2022 ✅

#### Imagens das receitas - 12/06/2022 (Em progresso)

### Projeto final - (Em andamento)

## Backlog 

### Correções da AA1 efetuadas

#### Utilizei o código "keyExtractor={(item, index) => index} " para corrigir o erro de chaves da FlatList.

#### Adicionado uma ScrollView na tela Home para que em telas menores apareçam todos os componentes.

### Implementação de armazenamento de dados com SQLITE 

#### Irei utilizar o banco de dados SQLITE para armazenamento de dados da aplicação, e também todas as operaçãos de CRUD que serão usadas no aplicativo de receitas.

### Alert, Modal e ActionSheet

#### Modal implementado com sucesso na tela do "About" falta apenas estilizar.

#### Também utilizando "Alert" para notificar que a receita foi cadastrada com sucesso.

### Acesso à API Remota

#### Uso da API remota talvez para  busca de imagens dos ingredientes das receitas, ainda não defini algo para utilizar este acesso.

### Recurso inédito

#### Uso de Image Picker e Câmera do Smartphone para salvar foto de receita. Provavelmente criarei um componente separado para adicionar esta funcionalidade, assim como um componente "Search" para filtros.

#### Estou testando utilizar este recurso https://docs.expo.dev/versions/latest/sdk/imagepicker/




