/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from "react";
 import {Platform, StyleSheet, Text, View, StatusBar,Button} from "react-native";
 import Header from "./Header"
 import Barang from "./Component/Barang"
export default class App extends Component<Props>{
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flex:1 , backgroundColor:"#7a9649"}}>
          <Header salam="SELAMAT DATANG"/>
        </View>
       <View style={{flex:4}}>
          <Barang/>
        </View>
      </View>
      );
  }
}
