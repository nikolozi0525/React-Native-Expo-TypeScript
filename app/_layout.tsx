import { Component, useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";

import DetailView from "../components/screens/DetailView";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Overview from "../components/screens/Overview";
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
    // <>
    //   <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //     <Stack>
    //       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //       <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    //     </Stack>
    //   </ThemeProvider>
    // </>
    <>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Overview} />
          <Stack.Screen name="detail" component={DetailView} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
