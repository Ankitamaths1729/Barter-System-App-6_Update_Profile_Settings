import * as React from 'react';
import {Text, View, StyleSheet, TextInput, 
TouchableOpacity,KeyboardAvoidingView, Alert} from 'react-native';
import db from '../config';
import {Header} from 'react-native-elements';
import firebase from 'firebase';

export default class RequestScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            itemName: "",
            reasonToRequest: ''
        }
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7);
    }
    
      addRequest =(itemName,reasonToRequest)=>{
        var userId = this.state.userId;
        var randomRequestId = this.createUniqueId();
        db.collection('requested_items').add({
            "user_id": userId,
            "item_name":itemName,
            "reason_to_request":reasonToRequest,
            "request_id"  : randomRequestId,
        })
    
        this.setState({
            itemName :'',
            reasonToRequest : ''
        })
    
        return Alert.alert("Your Item has been requested successfully!!")
      }

    render(){
        return (
            <View style={{flex: 1}}>
                <Header title="REQUEST  AN  ITEM" />

                <KeyboardAvoidingView behavior="margin" enabled style={styles.keyBoardStyle}>
                    <TextInput style={styles.inputBox}
                    onChangeText={(text)=>{
                        this.setState({itemName: text});
                    }}
                    value = {this.state.itemName}
                    placeholder="Item Name" 
                    />

                    <TextInput
                        style ={[styles.inputBox,{height:300, marginBottom: 50}]}
                        multiline = {true}
                        placeholder={"Why do you need the item??"}
                        onChangeText ={(text)=>{
                            this.setState({
                                reasonToRequest:text
                            })
                        }}
                        value ={this.state.reasonToRequest}
                    />

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={()=>{
                            this.addRequest(this.state.itemName,this.state.reasonToRequest);
                        }}>
                        <Text style={{fontWeight: "bold", color: "white", fontSize: 18}}>REQUEST  </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
        // flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "lightblue"
      },
      inputBox:{
        width:"75%",
        height:"10%",
        alignSelf:'center',
        borderColor:'grey',
        borderRadius:10,
        borderWidth: 3,
        marginTop:20,
        textAlign: "center",
        backgroundColor: "white",
        color: "blue",
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 20,
      },
      button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 200,
        borderRadius: 15,
        backgroundColor:"darkblue",
        marginTop:20
        },
})