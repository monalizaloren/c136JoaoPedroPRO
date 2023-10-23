import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
// PASSO 3

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontFamily: "monospace",
  },
  lowerContainer: {
    flex: 0.9,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainerText: {
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    fontFamily: "monospace",
    textAlign: "center",
  },
  listContainer: {
    backgroundColor: "#eeecda",
  },
  listItem: {
    padding: 15,
    margin: "2.5%",
    width: "45%",
    height: 200,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
  },
  cardImage:{
    width: 100,
    height: 100,
    paddingTop: 5,
    alignSelf: "center",
    alignItems: "center",
  },
  nameCardPlanet:{
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
  }
});
