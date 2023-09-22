import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, PermissionsAndroid, ActivityIndicator, TextInput } from 'react-native';
import TwilioVoice from 'react-native-twilio-programmable-voice';
import ServieceHeaders from '../utils/commonApi';
import RNCallKeep from 'react-native-callkeep';
import Sound from 'react-native-sound';


const options = {
    ios: {
      appName: 'My app name',
    },
    android: {
      alertTitle: 'Permissions required',
      alertDescription: 'This application needs to access your phone accounts',
      cancelButton: 'Cancel',
      okButton: 'ok',
      imageName: 'phone_account_icon',
      additionalPermissions: [PermissionsAndroid.PERMISSIONS.example],
      // Required to get audio in background when using Android 11
      foregroundService: {
        channelId: 'com.company.my',
        channelName: 'Foreground service for my app',
        notificationTitle: 'My app is running on background',
        notificationIcon: 'Path to the resource icon of the notification',
      }, 
    }
  };

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzkzMmY4OTEzODJmYjJkMDIyYTdiNDhhZWVmZTFmOTViLTE2OTIwMDk2OTQiLCJncmFudHMiOnsiaWRlbnRpdHkiOiIrMTQ3MDQ2NjY1OTYiLCJ2b2ljZSI6eyJvdXRnb2luZyI6eyJhcHBsaWNhdGlvbl9zaWQiOiJBUGYwZWI2NjRlYjBmZWYwMjZhMTYxZWRmMTdjOWU2Y2ZmIn19fSwiaWF0IjoxNjkyMDA5Njk0LCJleHAiOjE2OTIwMTMyOTQsImlzcyI6IlNLOTMyZjg5MTM4MmZiMmQwMjJhN2I0OGFlZWZlMWY5NWIiLCJzdWIiOiJBQzYzZGQ3NWFlYTYxZTk5MDQyMTg4YzUyOTQ5NzllZDFjIn0.TCnNQhPzkKwU0YAnu5-klaSFy9EbN4lLuo7AmooWxA0";
export default class TwillioCalling extends Component {
    state = {
        twilioInited: false,
        indicator: false,
        inputValue:false,
        callStatus:"Not started"
    };

    

    componentDidMount = () =>{
        RNCallKeep.setup(options).then(accepted => {});

    }
    getAuthToken = () => {
        return fetch('http://c2a19b17.ngrok.io/accessToken', { //replace c2a19b17.ngrok.io with your link (from Step 1)
            method: 'get',
        })
            .then(response => response.text())
            .catch((error) => console.error(error));
    }

    getMicrophonePermission = () => {
        const audioPermission = PermissionsAndroid.PERMISSIONS.RECORD_AUDIO;

        return PermissionsAndroid.check(audioPermission).then(async result => {
            if (!result) {
                const granted = await PermissionsAndroid.request(audioPermission, {
                    title: 'Microphone Permission',
                    message: 'App needs access to you microphone ' + 'so you can talk with other users.',
                });
            }
        });
    }

    initTwilio = async () => {
        // const token = await this.getAuthToken();

        this.setState({ indicator: true });

        if (Platform.OS === 'android') {
            await this.getMicrophonePermission();
        }

        await TwilioVoice.initWithToken(token);

        TwilioVoice.addEventListener('deviceReady', () => {
            this.setState({ twilioInited: true, indicator: false , callStatus:'deviceReady'});
            this.makeCall()
        });

        if (Platform.OS === 'ios') { //required for ios
            TwilioVoice.configureCallKit({
                appName: 'ReactNativeTwilioExampleApp',
            });
        }
    };

    getAccessToken = async () => {
        new ServieceHeaders().ServieceHeaderGetApi("", "https://uatapi.mapstechnologies.com/api/twilios/outbound-info/73", (error, value) => {

            if (error) {
                console.log('its coming back error')
                console.log(error)
            }
            else if (value) {
                console.log('its coming back value')
                console.log(value)
            }
        });
    }


    initTelephony = async () => {
        try {
            // const accessToken = await getAccessTokenFromServer()
            const success = await TwilioVoice.initWithToken(token)
        } catch (err) {
            console.log('error occured')
            console.err(err)
        }
    }

    makeCall = () => {
        let val = '+91' + this.state.inputValue
        console.log(val)
        TwilioVoice.connect({ "To": val })
        TwilioVoice.addEventListener('connectionDidConnect', () => {
            console.log('is connected')
            this.setState({callStatus:'connectionDidConnect' })
        })

        TwilioVoice.addEventListener('connectionIsReconnecting', () => {
            console.log('is connectionIsReconnecting')
            this.setState({callStatus:'connectionIsReconnecting' })
        })

        TwilioVoice.addEventListener('connectionDidReconnect', () => {
            console.log('is connectionDidReconnect')
            this.setState({callStatus:'connectionDidReconnect' })
        })

        TwilioVoice.addEventListener('connectionDidDisconnect', (error) => {
            console.log('is connectionDidDisconnect')
            console.log('error is', error)
            this.setState({callStatus:'connectionDidDisconnect' })
            TwilioVoice.disconnect();
            this.setState({ twilioInited: false });

        })

        TwilioVoice.addEventListener('callStateRinging', () => {
            console.log('is callStateRinging')
            this.setState({callStatus:'callStateRinging' })
        })

        TwilioVoice.addEventListener('callInviteCancelled', () => {
            console.log('is callInviteCancelled')
            this.setState({callStatus:'callInviteCancelled' })
        })

        TwilioVoice.addEventListener('callRejected', () => {
            console.log('is callRejected')
            this.setState({callStatus:'connectionDidConnect' })
        })



    };

    onInputChange = (value) => {

        console.log(value);
        this.setState({ inputValue : value})
    }

    callAction = () =>{
     
        if(this.state.inputValue != "")
        {
            this.initTwilio()
        }
        else
        {
            this.setState({callStatus:"please enter number"})
        }
    }

    cancelAction = () =>{

    }

    render() {
        return (
            //   <View style={styles.container}>
            //     <TouchableOpacity onPress={() => this.initTwilio()}>
            //       <View>
            //           <Text>Init Twilio</Text>
            //       </View>
            //     </TouchableOpacity>
            //     <TouchableOpacity disabled={!this.state.twilioInited} onPress={() => this.makeCall()}>
            //       <View>
            //         <Text>Make call ({this.state.twilioInited ? 'ready' : 'not ready'})</Text>
            //         <ActivityIndicator animating={ this.state.indicator ? true : false} color={'black'} ></ActivityIndicator>
            //       </View>
            //     </TouchableOpacity>
            //   </View>
            <View style={styles.container}>

                <View style={{ flex: 2, height: 200, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Enter you number here</Text>

                    <TextInput style={{ height: 30, borderWidth: 1, color: 'black', width: 200,alignContent:'center',textAlign:'center' }} onChangeText={(value) => this.onInputChange(value)} maxLength={10}></TextInput>
                    <View style={{
                        height: 300, flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems:'center'
                  
                    
                    }}>
              <TouchableOpacity onPress={this.callAction} style={{
                
                            width: '40%',
                            height: 40,
                            borderWidth: 1, color: 'black', width: 200 ,
                            margin:10
                        
                        }}>
                        <View style={{
                           
                            height: 40,
                            justifyContent:'center',
                            alignItems:'center'
                        }} >
                            <Text>Call</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{width:'10%'}}></View>
                        <TouchableOpacity onPress={this.cancelAction} style={{
                            
                            width: '40%',
                            height: 40,
                            borderWidth: 1, color: 'black', width: 200 ,
                            margin:10
                        }}>
                        <View style={{
              
                            height: 40,
                            justifyContent:'center',
                            alignItems:'center'
                        }} >
                            <Text>End</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                    <ActivityIndicator animating={ this.state.indicator ? true : false} color={'black'} ></ActivityIndicator>
                        <Text>Call Status:</Text>
                        <Text>{this.state.callStatus}</Text>
                    </View>
                    
                </View>
                
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        backgroundColor: 'green',
        width: '40%',
        height: 40
    }
});