import React from 'react';
import { FlatList, ActivityIndicator,TouchableHighlight, Text, View, Image } from 'react-native';

import ChiTiet from './ChiTiet';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { bold } from 'colorette';
class Truyen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  static navigationOptions = {
    title: 'Truyện tranh',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:30,
    },
    
    
  };
  _TenTruyen(Text){

    return Text.replace('Truyện tranh','');
  }
  componentDidMount() {
    return fetch('https://nvtrungictu.000webhostapp.com/select.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <TouchableHighlight onPress={()=>this.props.navigation.navigate("ChiTiet",{id:item.id_truyen,tentruyen:item.tentruyen,tacgia:item.tacgia})}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: item.anhtieude }} style={{ width: 100, height: 130,margin:10 }} />
                <View style={{ flexDirection: 'column' }}>
                <Text style={{marginBottom:10,marginTop:20, fontSize:16}}>Tên truyện:{this._TenTruyen(item.tentruyen)}</Text> 
                <Text  style={{ fontSize:16 }}>Tác giả:{item.tacgia}</Text>
                </View>
              </View>
            </TouchableHighlight>
          }
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
const AppTruyen =createStackNavigator({
  Truyen:{
    screen:Truyen
  },
  ChiTiet:{
    screen:ChiTiet
  }
})

export default createAppContainer(AppTruyen);
