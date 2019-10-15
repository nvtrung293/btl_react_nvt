
import React, { Component } from 'react';
import {
    View, Image,
    Text, Button, TextInput, TouchableOpacity,ImageBackground
} from 'react-native';
console.disableYellowBox =true;
export default class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dangky: false,
        }
    }
    static navigationOptions = {
        title:  'Đăng nhập',
        
    }
    render() {
        if (this.state.dangky == false) {
            return (

                <View style={{ height: 700 }}>
                    <ImageBackground source={require('./image/5.jpg')} style={{ width: '100%', height: '100%' }}>
                    <Image source={require('./image/1.jpg')} style={{ height: 210, width: 200, marginLeft: 80, marginTop: 50 }}></Image>
                    <View style={{ margin: 20 }}>
                        <TextInput placeholder='Tài khoản' style={{ backgroundColor: '#ECE0F8', borderRadius: 20, textAlign: 'center', marginLeft: 25, height: 40, width: 270, marginTop: 20 }}
                            onChangeText={user => this.setState({ user })}
                        ></TextInput>
                        <TextInput placeholder="Mật khẩu" secureTextEntry={true} style={{ backgroundColor: '#ECE0F8', textAlign: 'center', marginLeft: 25, height: 40, width: 270, borderRadius: 20, marginTop: 10 }}
                            onChangeText={pass => this.setState({ pass })}
                        ></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 80 }}>
                        <Button style={{ marginLeft: 50, }} title="ĐĂNG NHẬP" onPress={() => this.props.navigation.navigate('ViewItem')} ></Button>
                        <View style={{ width: 96, height: 35, backgroundColor: '#3366CC', borderRadius: 3 }}>
                            <TouchableOpacity onPress={() => this.setState({ dangky: true })}>
                                <Text style={{ textAlign: 'center', padding: 7, color: 'white' }} >ĐĂNG KÝ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </ImageBackground>
                </View>


            );
        } else {
            return (
                <ImageBackground source={require('./image/5.jpg')} style={{ width: '100%', height: '100%' }}>

                    <View style={{ height: 700 }}>
                        <Image source={require('./image/1.jpg')} style={{ height: 210, width: 200, marginLeft: 80, marginTop: 50 }}></Image>
                        <View style={{ margin: 20 }}>
                            <TextInput placeholder='Tài khoản' style={{ backgroundColor: '#ECE0F8', borderRadius: 20, textAlign: 'center', borderRadius: 20, textAlign: 'center', marginLeft: 25, height: 40, width: 270, marginTop: 20 }}

                            ></TextInput>
                            <TextInput placeholder='Họ tên' style={{ marginTop: 10, backgroundColor: '#ECE0F8', borderRadius: 20, textAlign: 'center', borderRadius: 20, textAlign: 'center', marginLeft: 25, height: 40, width: 270, marginTop: 10 }}

                            ></TextInput>
                            <TextInput placeholder="Mật khẩu" secureTextEntry={true} style={{ backgroundColor: '#ECE0F8', borderRadius: 20, textAlign: 'center', marginLeft: 25, height: 40, width: 270, marginTop: 10 }}
                                onChangeText={pass => this.setState({ pass })}
                            ></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 100 }}>
                            <Button style={{ marginLeft: 20 }} title="Đăng ký" onPress={() => this.setState({ dangky: true })} ></Button>
                            <View style={{ width: 80, height: 35, backgroundColor: '#3366CC', borderRadius: 3 }}>
                                <TouchableOpacity onPress={() => this.setState({ dangky: false })}>
                                    <Text style={{ textAlign: 'center', padding: 7, color: 'white' }}>Back</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            );
        }
    }
}




