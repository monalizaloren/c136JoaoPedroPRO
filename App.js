import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";

export default function App() {
  return <AppContainer />;
}

const appStackNavigator = createStackNavigator(
  {
  //PASSO 1
      }
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
  //PASSO 2
  }
);

const AppContainer = createAppContainer(appStackNavigator);
