import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { Container, Item, Form, Input, Button, Label } from "native-base";
import firebase from "firebase/app";
require("firebase/auth");

var config = {
  apiKey: "AIzaSyD8TqswhU9g6YfMhP23CNC696AFrUbAbHM",
  authDomain: "emailauth-3dba9.firebaseapp.com",
  databaseURL: "https://emailauth-3dba9-default-rtdb.firebaseio.com/",
  projectId: "emailauth-3dba9",
  storageBucket: "emailauth-3dba9.appspot.com",
  messagingSenderId: "224283775744"
  };
  firebase.default.initializeApp(config);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  SignUp = (email, password) => {
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
      console.log(user);
    });

    } catch (error) {
      console.log(error.toString(error));
    }
  };

  Login = (email, password) => {
  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
      console.log(res.user.email);
    });

    } catch (error) {
      console.log(error.toString(error));
    }
  };
  
    
  render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input 
              autoCapitalize="none" 
              autoCorrect={false}
              onChangeText={email => this.setState({ email })}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={password => this.setState({ password })}
            />
          </Item>

          <Button full rounded success onPress={() => this.Login(this.state.email, this.state.password)}>
            <Text>Login</Text>
          </Button>
          <Button full rounded success style={{ marginTop: 20 }} onPress={() => this.SignUp(this.state.email, this.state.password)}>
            <Text>Signup</Text>
          </Button>


        </Form>
      </Container>
    );
  }   
};


