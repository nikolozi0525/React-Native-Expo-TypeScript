import { Component, useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";

import BasketNavbar from "../components/BasketNavbar";
import Cart from "../components/screens/Cart";
import CategoryDetail from "../components/screens/CategoryDetail";
import Checkout from "../components/screens/Checkout";
import DetailView from "../components/screens/DetailView";
import FirstPage from "../components/screens/FirstPage";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HighlightDetail from "../components/screens/HighlightDetail";
import Login from "../components/screens/Login/index";
import Navbar from "../components/Navbar";
import Overview from "../components/screens/Overview";
import SearchAddress from "../components/screens/SearchAddress/index";
import SearchBar from "../components/SearchBar";
import SetAddress from "../components/screens/SetAddress";
import Signup from "../components/screens/Signup";
import { SplashScreen } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}
const Stack = createNativeStackNavigator();
function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="first"
          screenOptions={{
            headerStyle: {
              borderBottomColor: "transparent",
            },
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Overview}
            options={{
              headerLeft: () => {
                return null;
              },
              animation: "slide_from_right",
              animationDuration: 1000,
              headerTitle: (props) => <Navbar address="Basselweg 73" />,
            }}
          />
          <Stack.Screen
            name="detail"
            component={DetailView}
            options={{
              headerShown: false,
              animation: "slide_from_right",
              animationDuration: 1000,
            }}
          />
          <Stack.Screen
            name="Basket"
            component={Cart}
            options={{
              headerTitle: () => <BasketNavbar />,
              headerStyle: {
                borderBottomColor: "transparent",
              },
            }}
          />
          <Stack.Screen
            name="first"
            component={FirstPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="setaddress" component={SetAddress} />
          <Stack.Screen name="checkout" component={Checkout} />
          <Stack.Screen
            name="searchAddress"
            component={SearchAddress}
            options={{
              headerTitle: () => <SearchBar />,
            }}
          />
          <Stack.Screen
            name="categorydetail"
            options={{
              headerTitle: "category",
            }}
            component={CategoryDetail}
          />
          <Stack.Screen
            name="highlightdetail"
            options={{
              headerTitle: "",
            }}
            component={HighlightDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
