/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        message: "test",
        image: "http://sonyainc.net/images/don-draper.jpg"
      }
      this.buttonClicked = this.buttonClicked.bind(this);
      this.showData = this.showData.bind(this);
      let self = this;
    }//end constructor

    showData() {
      alert("showData...");
    }
    
    buttonClicked () {
      //alert("Get Ad...");
          const userkey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvb3BlckBtcG9pbnRpbmMuY29tIiwiaWQiOjM5Nywib3JnX2lkIjozMzEsIm9yZ19yb2xlIjoxfQ._M233oOb-MuhaXGAnLGow95r0Ap6YHZ2stt7Nxlxn9M';
          var domainString =  "http://sonyainc.net/wordpress/";

          const options = {
            method: "GET",
            headers: new Headers({'key': userkey})
          };

          fetch("https://api.frase.io/api/v1/url_search?url="+domainString+"&target_sites=[https%3A%2F%2Fmedium.com,https%3A%2F%2Fvox.com]", options )
          .then(data => data.json())
          .then(data => {
            alert("image found: " + data[0].image);
                  this.setState({
                        message: data[0].description,
                        image :  data[0].image
                      })
                //  console.log(this.state.user) // Show log in in success func
                })
                .catch(function(e) {
                  alert("error, old man: " + e );
              });

    }//end button clicked

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Bidwin Contextual Ad</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Image
          style={{width: 300, height: 250}}
          source={{uri: this.state.image }}
        />
          <View>
            <Text style={styles.buttonText}>{this.state.message}</Text>
          </View>
          <Button
              onPress={this.buttonClicked}
              title="Get Ad"
              color="#841584"
              accessibilityLabel="Tap on Me"
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

