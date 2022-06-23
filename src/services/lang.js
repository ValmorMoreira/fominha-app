import * as Localization from "expo-localization";
import i18n from "i18n-js";

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: {
    doYourLogin: "Longin to Start",
    btnLogin: "Login",
    keepLogged: "keep me logged in",
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
    fillRecipeData: "Fill in the recipe data", 
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
    aboutDesc: "All rights reserved - Valmor Moreira - Fominha - Version 1.0",
    easterEgg: "Look, this is a modal test! Easter Egg Found HAHAHA",
    successRecipe: "Recipe successfully registered!",
    deleteRecipe: "Recipe successfully deleted!",
    editedRecipe: "Recipe successfully updated!",
    searchError: "No results found for: ",
    updatePhoto: "Change photo",
    updateRecipeDetails: "Update recipe details",

  },
  "pt-BR": {
    doYourLogin: "Faça seu Login",
    btnLogin: "Logar",
    keepLogged: "Mantenha-me logado",
    withoutAccount:"Não possui uma conta? Clique aqui.",
    userRegister: "Cadastro de Usuário",
    userRegisterSuccess: "Usuário cadastrado com sucesso!",
    userName: "Nome de usuário",
    btnRegister: "Cadastrar",
    withAccount:"Possui uma conta? Faça o seu login aqui.",
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
    aboutDesc: "Todos os direitos reservados - Valmor Moreira - Fominha - Versão 1.0",
    easterEgg: "Olha só, um teste de modal! EasterEgg! HAHAHA",
    successRecipe: "Receita cadastrada com sucesso!",
    deleteRecipe: "Receita deletada com sucesso!",
    editedRecipe: "Receita atualizada com sucesso!",
    searchError: "Não foram encontrados resultados para: ",
    updatePhoto: "Atualizar foto",
    updateRecipeDetails: "Atualize os dados da receita",


  },
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default i18n;