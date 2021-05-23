/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, StatusBar, Button,Alert} from "react-native";

class Barang extends Component{
  constructor(){
    super();
    this.state={
      jumlah:0
    };
  }
  handletambah=()=>{
    this.setState({jumlah:this.state.jumlah+1});
  };

  handlekurang=()=>{
    this.setState({jumlah:this.state.jumlah-1})

 if (this.state.jumlah > 0) {
    {this.state.jumlah}
    } else {
     alert("Jumlah Tidak Boleh Kurang Dari 0");
   };
  };

  render(){
    return(
      <View style={{flex:1, flexDirection:"column", marginBottom:150, backgroundColor:"grey"}}>
        <View style={{flex:1}}>
            <Text style={{textAlign:"right",fontSize:12, marginRight:10}}>Jumlah : {this.state.jumlah} </Text>
            <Text style={{textAlign:"center",fontSize:20, marginTop:20}}>Silahkan Tekan Tombol Di Bawah</Text>
        </View>
        <View style={{flex:1, marginBottom:0, backgroundColor:"blue"}}>
          <View style={{flex:1, flexDirection:"row", height:20}}>
            <View style={{flex:1, margin:20, backgroundColor:"green"}}><Button title="+" color="green" onPress={this.handletambah}/></View>
            <View style={{flex:1, margin:20, backgroundColor:"red"}}><Button title="-" color="red" onPress={this.handlekurang}/></View>
          </View>
        </View>
        <View style={{flex:1}}>
            <Text style={{textAlign:"center",fontSize:20, marginBottom:0, fontSize:50, color:"blue", backgroundColor:"yellow"}}>{this.state.jumlah}</Text>
        </View>
      </View>


    );
  }
}
export default Barang
