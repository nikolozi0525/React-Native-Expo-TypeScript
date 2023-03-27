import DetailView from "./components/screens/DetailView";
import { NavigationContainer } from "@react-navigation/native";
import Overview from "./components/screens/Overview";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Overview}
          options={{ animationTypeForReplace: "pop" }}
        />
        <Stack.Screen name="detail" component={DetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
