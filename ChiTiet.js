import React from 'react';
import { FlatList, ActivityIndicator, TouchableHighlight, Text, View, Image } from 'react-native';

export default class ChiTiet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
            ,
            tieude: this.props.navigation.getParam("tentruyen", ''),
            tacgia: this.props.navigation.getParam("tacgia", ''),

        }

    }
    static navigationOptions = {
        title: 'Truyện tranh'
    }
    _Tieude(Text) {

        return Text.replace('Truyện tranh', '');
    }
    componentDidMount() {
        return fetch('https://nvtrungictu.000webhostapp.com/chitiettruyen.php?id=' + this.props.navigation.getParam("id", 0))
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
                <View style={{ flex: 1 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <FlatList
                    ListHeaderComponent={<Text style={{ textAlign: "center", marginBottom: 20, fontSize: 30, textAlign: "center", marginLeft: 20, marginRight: 20 }}>{this._Tieude(this.state.tieude)} </Text>}
                    data={this.state.dataSource}
                    renderItem={({ item }) =>


                        <View style={{ flexDirection: 'column' }}>
                            <Image source={{ uri: item.anh }} style={{ width: 320, height: 250, marginLeft: 20, marginRight: 20, marginTop: 5 }} />

                        </View>
                    }

                />

            </View>
        );
    }
}

