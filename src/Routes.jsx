import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import i18n from "./services/lang";

import Home from "./pages/Home";
import RecipeRegister from "./pages/RecipeRegister";
import RecipesList from "./pages/RecipesList";
import MyRecipes from "./pages/MyRecipes";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RecipeEdit from "./pages/RecipeEdit";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{
          title: `${i18n.t("menuLogin")}`,
        }} />
        <Stack.Screen name={"Cadastro"} component={Register} options={
          { title: `${i18n.t("menuRegister")}`, }
        } />
        <Stack.Screen name="Home" component={Home} options={{
          title: `${i18n.t("menuHome")}`,
        }} />
        <Stack.Screen name="Cadastro de receita" component={RecipeRegister} options={
          { title: `${i18n.t("menuRecipeRegister")}`, }
        } />
        <Stack.Screen name="Dicas de Burgers" component={RecipesList} options={{
          title: `${i18n.t("menuBurgerTips")}`,
        }} />
        <Stack.Screen name="Minhas receitas" component={MyRecipes} options={{
          title: `${i18n.t("menuMyRecipes")}`,
        }} />
        <Stack.Screen name="About" component={About} options={{
          title: `${i18n.t("menuAbout")}`,
        }} />
        <Stack.Screen name="Editar Receita" component={RecipeEdit} options={{
          title: `${i18n.t("menuEditRecipe")}`,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
