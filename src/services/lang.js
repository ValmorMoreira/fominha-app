import * as Localization from "expo-localization";
import i18n from "i18n-js";

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: {
    doYourLogin: "Longin to Start",
    btnLogin: "Login",
    keepLogged: "keep me logged in",
    errorLogin: "E-mail or Password incorrect",
    withoutAccount:"Don't have an account? Click here.",
    userRegister: "User Register",
    userRegisterSuccess: "User successfully registered!",
    userName: "Username",
    btnRegister: "Register",
    withAccount:"Have an account? Login here.",
    welcome: "Be Welcome!",
    btnRecipeRegister: "Recipe Register",
    btnBurgersTips: "Burgers Tips",
    btnMyRecipes: "My Recipes",
    aboutApp: "About this App",
    exit: "Logoff",
    fillRecipeData: "Fill in the recipe description", 
    recipeName: "Recipe name",
    category: "Category",
    ingredients: "Ingredients",
    prepareMode: "Prepare mode",
    pickPhoto: "Select a picture",
    search: "Find by name...",
    restaurant: "Restaurant",
    edit: "Edit",
    delete: "Delete",
    back: "Back",
    btnUpdateRecipe: "Update",
    aboutDesc: "All rights reserved",
    easterEgg: "Look, this is a modal test! Easter Egg Found HAHAHA",
    successRecipe: "Recipe successfully registered!",
    deleteRecipe: "Recipe successfully deleted!",
    editedRecipe: "Recipe successfully updated!",
    searchError: "No results found for: ",
    searchErrorApi: "No results found...",
    updatePhoto: "Change photo",
    updateRecipeDetails: "Update recipe details",
    clickDetails: "Click here for more details",
    userExit: "Disconnected user...",
    noRecipesFound: "There are no recipes registered.",
    password: "Password",
    fields: "Please fill in the fields!",
    version: "Fominha - Version 1.0",
    loading: "Loading data...",
    invalidUser: "This e-mail is not registered!",
    menuLogin: "Login",
    menuRecipeRegister: "Recipe register",
    menuBurgerTips: "Burgers tips",
    menuMyRecipes: "My recipes",
    menuEditRecipe: "Edit recipe",
    menuAbout: "About",
    menuRegister: "User register",
    menuHome: "Home",

  },
  "pt-BR": {
    doYourLogin: "Fa??a seu Login",
    btnLogin: "Logar",
    keepLogged: "Mantenha-me logado",
    errorLogin: "E-mail ou Senha inv??lido",
    withoutAccount:"N??o possui uma conta? Clique aqui.",
    userRegister: "Cadastro de Usu??rio",
    userRegisterSuccess: "Usu??rio cadastrado com sucesso!",
    userName: "Nome de usu??rio",
    btnRegister: "Cadastrar",
    withAccount:"Possui uma conta? Fa??a o seu login aqui.",
    welcome: "Seja Bem vindo!",
    btnRecipeRegister: "Cadastrar Receita",
    btnBurgersTips: "Dicas de Burgers",
    btnMyRecipes: "Minhas Receitas",
    aboutApp: "Sobre o App",
    exit: "Sair",
    fillRecipeData: "Preencha dos dados da receita",
    recipeName: "Nome da receita",
    category: "Categoria",
    ingredients: "Ingredientes",
    prepareMode: "Modo de preparo",
    pickPhoto: "Selecione uma foto",
    search: "Buscar pelo nome...",
    restaurant: "Restaurante",
    edit: "Editar",
    delete: "Excluir",
    back: "Voltar",
    btnUpdateRecipe: "Atualizar",
    aboutDesc: "Todos os direitos reservados",
    easterEgg: "Olha s??, um teste de modal! EasterEgg! HAHAHA",
    successRecipe: "Receita cadastrada com sucesso!",
    deleteRecipe: "Receita deletada com sucesso!",
    editedRecipe: "Receita atualizada com sucesso!",
    searchError: "N??o foram encontrados resultados para: ",
    searchErrorApi: "Sem resultados para pesquisa...",
    updatePhoto: "Atualizar foto",
    updateRecipeDetails: "Atualize os dados da receita",
    clickDetails: "Clique aqui para mais detalhes",
    userExit: "Usu??rio desconectado...",
    noRecipesFound: "N??o existem receitas cadastradas.",
    password: "Senha",
    fields: "Por favor preencher os campos!",
    version: "Fominha - Vers??o 1.0",
    loading: "Carregando dados...",
    invalidUser: "Este e-mail n??o est?? cadastrado!",
    menuLogin: "Logar",
    menuRecipeRegister: "Cadastro de receita",
    menuBurgerTips: "Dicas de Burgers",
    menuMyRecipes: "Minhas receitas",
    menuEditRecipe: "Editar receita",
    menuAbout: "Sobre",
    menuRegister: "Cadastro de usu??rio",
    menuHome: "Tela inicial",
  },
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default i18n;