import { useAuth } from "@clerk/expo";
import { Redirect, Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { useGroceryStore } from "../../store/grocery-store";

export default function TabsLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const { loadItems } = useGroceryStore();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const tabTintColor = isDark ? "hsl(142 70% 54%)" : "hsl(147 75% 33%)";
  const inactiveColor = isDark ? "#8aa397" : "#6b7f74";


  useEffect(() => {
    loadItems();
  }, []);

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tabTintColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarStyle: {
                     borderTopLeftRadius: 40,
                     borderTopRightRadius: 40,
                     borderBottomLeftRadius: 40,
                     borderBottomRightRadius: 40,
                     marginHorizontal: 24,
                     height: 60,
                     position: 'absolute',
                     bottom: 45,
                     backgroundColor: 'black',
                     shadowColor: '#1a1a1a',
                     shadowOffset: { width: 5, height: 5},
                     shadowOpacity: 0.1,
                     shadowRadius: 3,
                     elevation: 5,
                     borderTopWidth: 0,   
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
        tabBarItemStyle: {
          borderRadius: 22,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "List",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="list-check" size={size ?? 18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="planner"
        options={{
          title: "Planner",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="plus" size={size ?? 18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: "Insights",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="chart-simple" size={size ?? 18} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}