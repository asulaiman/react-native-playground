import React, {Component, Fragment} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from "./styles";

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.banana}>Banananannanaaaaaa</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

export {Bananas};
