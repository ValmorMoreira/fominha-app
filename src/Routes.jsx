import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Register} />        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro de receita" component={RecipeRegister} />
        <Stack.Screen name="Dicas de Burgers" component={RecipesList} />
        <Stack.Screen name="Minhas receitas" component={MyRecipes} />
        <Stack.Screen name="About" component={About} />  
        <Stack.Screen name="Editar Receita" component={RecipeEdit} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
