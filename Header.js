
import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";


class Header extends Component {
                render() {
                   return (
                     <View>
                     <Text style={{ textAlign:"center",color:"white", marginTop:25}}>Tugas 3 React Native</Text>
                     <Text style={{ textAlign:"center",color:"purple",fontSize:20, marginBottom:25}}>{this.props.salam}</Text>
                     </View>
);  } }

export default Header;
