import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor:"#DA7807",
      tabBarInactiveTintColor: "black",
      tabBarStyle: {
        borderTopWidth: 1,
        borderTopColor: "black",
        height: 90,
        paddingBottom: 30,
        paddingTop: 10
      },
      tabBarLabelStyle:{
        fontSize: 12,
        fontWeight: "600"
      }

    }}
    >
      <Tabs.Screen
      name="home"
      options={{
        title:"Home",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="home-outline" size={size} color={color}/>
        ),
      }}
      />
      <Tabs.Screen
      name="food"
      options={{
        title:"Food",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="cafe-outline" size={size} color={color}/>
        ),



      }}
      />
      <Tabs.Screen
      name="settings"
      options={{
        title:"Profile",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="person-circle-outline" size={size} color={color}/>
        ),



      }}
      />
    </Tabs>
  )
}