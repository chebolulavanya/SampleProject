// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, TouchableOpacity, PermissionsAndroid, ActivityIndicator, TextInput } from 'react-native';
// import TwilioVoice from 'react-native-twilio-programmable-voice';
// import ServieceHeaders from '../utils/commonApi';
// import RNCallKeep from 'react-native-callkeep';


// const options = {
//     ios: {
//       appName: 'My app name',
//     },
//     android: {
//       alertTitle: 'Permissions required',
//       alertDescription: 'This application needs to access your phone accounts',
//       cancelButton: 'Cancel',
//       okButton: 'ok',
//       imageName: 'phone_account_icon',
//       additionalPermissions: [PermissionsAndroid.PERMISSIONS.example],
//       // Required to get audio in background when using Android 11
//       foregroundService: {
//         channelId: 'com.company.my',
//         channelName: 'Foreground service for my app',
//         notificationTitle: 'My app is running on background',
//         notificationIcon: 'Path to the resource icon of the notification',
//       }, 
//     }
//   };
// export default class TwillioCalling extends Component {
//     state = {
//         twilioInited: false,
//         indicator: false,
//         inputValue:false,
//         callStatus:"Not started"
//     };

    

//     componentDidMount = () =>{
//         RNCallKeep.setup(options).then(accepted => {});

//     }
//     getAuthToken = () => {
//         return fetch('http://c2a19b17.ngrok.io/accessToken', { //replace c2a19b17.ngrok.io with your link (from Step 1)
//             method: 'get',
//         })
//             .then(response => response.text())
//             .catch((error) => console.error(error));
//     }

//     getMicrophonePermission = () => {
//         const audioPermission = PermissionsAndroid.PERMISSIONS.RECORD_AUDIO;

//         return PermissionsAndroid.check(audioPermission).then(async result => {
//             if (!result) {
//                 const granted = await PermissionsAndroid.request(audioPermission, {
//                     title: 'Microphone Permission',
//                     message: 'App needs access to you microphone ' + 'so you can talk with other users.',
//                 });
//             }
//         });
//     }

//     initTwilio = async () => {
//         // const token = await this.getAuthToken();

//         this.setState({ indicator: true });

//         if (Platform.OS === 'android') {
//             await this.getMicrophonePermission();
//         }

//         await TwilioVoice.initWithToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJpc3MiOiJTSzJmZmU3ZDY4M2JhNjYxOTUwNjUzMGM2OWJhZGY4ZDVkIiwiZXhwIjoxNjkwMjA4NjM2LCJqdGkiOiJTSzJmZmU3ZDY4M2JhNjYxOTUwNjUzMGM2OWJhZGY4ZDVkLTE2OTAyMDUwMzYiLCJzdWIiOiJBQ2I3YzIyNDBmNzA2NzdmZTdmMWNkNmYwZjFjODY5NTQxIiwiZ3JhbnRzIjp7ImlkZW50aXR5IjoiMjMwMjgwNGItZThjMC00YTQ2LTkxNmMtZjRkM2M5ZDliZDIwIiwidm9pY2UiOnsib3V0Z29pbmciOnsiYXBwbGljYXRpb25fc2lkIjoiQVAyNzZiZjM2MGEzMDA5NjE1YWViODEyMTA5NjA1YjNjNSJ9fX19.cUW3e7oBg4tW5ZBNvpcl_sfRranpPTVtONtzSFOANG8");

//         TwilioVoice.addEventListener('deviceReady', () => {
//             this.setState({ twilioInited: true, indicator: false , callStatus:'deviceReady'});
//             this.makeCall()
//         });

//         if (Platform.OS === 'ios') { //required for ios
//             TwilioVoice.configureCallKit({
//                 appName: 'ReactNativeTwilioExampleApp',
//             });
//         }
//     };

//     getAccessToken = async () => {
//         new ServieceHeaders().ServieceHeaderGetApi("", "https://uatapi.mapstechnologies.com/api/twilios/outbound-info/73", (error, value) => {

//             if (error) {
//                 console.log('its coming back error')
//                 console.log(error)
//             }
//             else if (value) {
//                 console.log('its coming back value')
//                 console.log(value)
//             }
//         });
//     }


//     initTelephony = async () => {
//         try {
//             // const accessToken = await getAccessTokenFromServer()
//             const success = await TwilioVoice.initWithToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJpc3MiOiJTSzJmZmU3ZDY4M2JhNjYxOTUwNjUzMGM2OWJhZGY4ZDVkIiwiZXhwIjoxNjkwMTkzNDc5LCJqdGkiOiJTSzJmZmU3ZDY4M2JhNjYxOTUwNjUzMGM2OWJhZGY4ZDVkLTE2OTAxODk4NzkiLCJzdWIiOiJBQ2I3YzIyNDBmNzA2NzdmZTdmMWNkNmYwZjFjODY5NTQxIiwiZ3JhbnRzIjp7ImlkZW50aXR5IjoiMjMwMjgwNGItZThjMC00YTQ2LTkxNmMtZjRkM2M5ZDliZDIwIiwidm9pY2UiOnsib3V0Z29pbmciOnsiYXBwbGljYXRpb25fc2lkIjoiQVAyNzZiZjM2MGEzMDA5NjE1YWViODEyMTA5NjA1YjNjNSJ9fX19.HsvDM5sg9mCyG4fukSCEWO8LVnYNiR2PzI9OdUNwdP4")
//         } catch (err) {
//             console.log('error occured')
//             console.err(err)
//         }
//     }

//     makeCall = () => {
//         let val = '+91' + this.state.inputValue
//         console.log(val)
//         TwilioVoice.connect({ To: val })
//         TwilioVoice.addEventListener('connectionDidConnect', () => {
//             console.log('is connected')
//             this.setState({callStatus:'connectionDidConnect' })
//         })

//         TwilioVoice.addEventListener('connectionIsReconnecting', () => {
//             console.log('is connectionIsReconnecting')
//             this.setState({callStatus:'connectionIsReconnecting' })
//         })

//         TwilioVoice.addEventListener('connectionDidReconnect', () => {
//             console.log('is connectionDidReconnect')
//             this.setState({callStatus:'connectionDidReconnect' })
//         })

//         TwilioVoice.addEventListener('connectionDidDisconnect', () => {
//             console.log('is connectionDidDisconnect')
//             this.setState({callStatus:'connectionDidDisconnect' })
//             TwilioVoice.disconnect();
//             this.setState({ twilioInited: false });

//         })

//         TwilioVoice.addEventListener('callStateRinging', () => {
//             console.log('is callStateRinging')
//             this.setState({callStatus:'callStateRinging' })
//         })

//         TwilioVoice.addEventListener('callInviteCancelled', () => {
//             console.log('is callInviteCancelled')
//             this.setState({callStatus:'callInviteCancelled' })
//         })

//         TwilioVoice.addEventListener('callRejected', () => {
//             console.log('is callRejected')
//             this.setState({callStatus:'connectionDidConnect' })
//         })



//     };

//     onInputChange = (value) => {

//         console.log(value);
//         this.setState({ inputValue : value})
//     }

//     callAction = () =>{
     
//         if(this.state.inputValue != "")
//         {
//             this.initTwilio()
//         }
//         else
//         {
//             this.setState({callStatus:"please enter number"})
//         }
//     }

//     cancelAction = () =>{

//     }

//     render() {
//         return (
//             //   <View style={styles.container}>
//             //     <TouchableOpacity onPress={() => this.initTwilio()}>
//             //       <View>
//             //           <Text>Init Twilio</Text>
//             //       </View>
//             //     </TouchableOpacity>
//             //     <TouchableOpacity disabled={!this.state.twilioInited} onPress={() => this.makeCall()}>
//             //       <View>
//             //         <Text>Make call ({this.state.twilioInited ? 'ready' : 'not ready'})</Text>
//             //         <ActivityIndicator animating={ this.state.indicator ? true : false} color={'black'} ></ActivityIndicator>
//             //       </View>
//             //     </TouchableOpacity>
//             //   </View>
//             <View style={styles.container}>

//                 <View style={{ flex: 2, height: 200, alignItems: 'center', justifyContent: 'center' }}>
//                     <Text>Enter you number here</Text>

//                     <TextInput style={{ height: 30, borderWidth: 1, color: 'black', width: 200,alignContent:'center',textAlign:'center' }} onChangeText={(value) => this.onInputChange(value)} maxLength={10}></TextInput>
//                     <View style={{
//                         height: 300, flexDirection: 'row',
//                         justifyContent: 'space-between',
//                         alignItems:'center'
                  
                    
//                     }}>
//               <TouchableOpacity onPress={this.callAction} style={{
                
//                             width: '40%',
//                             height: 40,
//                             borderWidth: 1, color: 'black', width: 200 ,
//                             margin:10
                        
//                         }}>
//                         <View style={{
                           
//                             height: 40,
//                             justifyContent:'center',
//                             alignItems:'center'
//                         }} >
//                             <Text>Call</Text>
//                             </View>
//                         </TouchableOpacity>
//                         <View style={{width:'10%'}}></View>
//                         <TouchableOpacity onPress={this.cancelAction} style={{
                            
//                             width: '40%',
//                             height: 40,
//                             borderWidth: 1, color: 'black', width: 200 ,
//                             margin:10
//                         }}>
//                         <View style={{
              
//                             height: 40,
//                             justifyContent:'center',
//                             alignItems:'center'
//                         }} >
//                             <Text>End</Text>
//                         </View>
//                         </TouchableOpacity>
//                     </View>
//                     <View>
//                     <ActivityIndicator animating={ this.state.indicator ? true : false} color={'black'} ></ActivityIndicator>
//                         <Text>Call Status:</Text>
//                         <Text>{this.state.callStatus}</Text>
//                     </View>
                    
//                 </View>
                
//             </View>


//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         // alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     button: {
//         backgroundColor: 'green',
//         width: '40%',
//         height: 40
//     }
// });





import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, PermissionsAndroid, ActivityIndicator, TextInput } from 'react-native';
import { Voice } from '@twilio/voice-react-native-sdk';
import { settlePromise } from './settlePromise';
import { Call as TwilioCall} from '@twilio/voice-react-native-sdk';
import { CallInvite as TwilioCallInvite} from '@twilio/voice-react-native-sdk';
import { Device } from '@twilio/voice-sdk';



const voice = new Voice();
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzkzMmY4OTEzODJmYjJkMDIyYTdiNDhhZWVmZTFmOTViLTE2OTE1NjQ4NTMiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJsYXZhbnlhLmNoZWJvbHVAYW16dXIuY29tIiwidm9pY2UiOnsiaW5jb21pbmciOnsiYWxsb3ciOnRydWV9LCJvdXRnb2luZyI6eyJhcHBsaWNhdGlvbl9zaWQiOiJBUGYwZWI2NjRlYjBmZWYwMjZhMTYxZWRmMTdjOWU2Y2ZmIn19fSwiaWF0IjoxNjkxNTY0ODUzLCJleHAiOjE2OTE1Njg0NTMsImlzcyI6IlNLOTMyZjg5MTM4MmZiMmQwMjJhN2I0OGFlZWZlMWY5NWIiLCJzdWIiOiJBQzYzZGQ3NWFlYTYxZTk5MDQyMTg4YzUyOTQ5NzllZDFjIn0.Xu-5a868vtnCqpqmg1TgS5QcKqARRbjOUyoOHGBaaVw";

const getCallInfo = (call) => {
    const sid = call.getSid();
    const state = call.getState();
    const to = call.getTo();
    const from = call.getFrom();
  
    const isMuted = Boolean(call.isMuted());
    const isOnHold = Boolean(call.isOnHold());
  
    return {
      sid,
      state,
      to,
      from,
      isMuted,
      isOnHold,
    };
  };

  const callMap = new Map();
export default class TwillioCalling extends Component {

 
    initTwilio = async () => {

// Allow incoming calls
//  const value = await voice.register(token);
//  console.log(value);
// voice.addListener('deviceReady',()=>{
//    console.log('device is ready');
// })

// const voiceRegisterResult = await settlePromise(
//     voice.register(token),
//   );
//   if (voiceRegisterResult.status === 'rejected') {
//     return rejectWithValue({
//       reason: 'NATIVE_MODULE_REJECTED',
//       error: miniSerializeError(voiceRegisterResult.reason),
//     });
//   }
//   else{
//     console.log(voiceRegisterResult.status);
//   }

       const device = new Device(token);
    //    const call = await device.connect({
    //     rtcConfiguration: {
    //       sdpSemantics: 'unified-plan'
    //     }
    //     // Other options
    //   });
     device.connect({ 
        params: {
          To: '+918897116708',
          from:'+14704666596'
        } 
      });
    // let call = await device.connect({
    //     params: {
    //       To: "+918897116708",
    //       agent: "Smith",
    //       location: "Matrix"
    //     },
    //     rtcConstraints: {
    //       audio: true
    //     },
    //     rtcConfiguration: {
    //       iceServers: [{
    //         urls: "stunserver.example.com",
    //         username: "username@twilio.com",
    //         credential: "webrtcCredential"
    //       }]
    //     }
    //   })
      console.log(device.calls)
    }

    makeCall = async () =>{
        voice.to = '+919502136188';
        voice.from = '+14704666596';
        console.log(token)
        const call = await voice.connect(token, {to:'+919502136188',from:'+14704666596'});
        console.log(JSON.stringify(call));
        // call.listeners()
        call.listeners('connectionDidConnect', () => {
                        console.log('is connected')
                        // this.setState({callStatus:'connectionDidConnect' })
                    })
            
                    call.listeners('connectionIsReconnecting', () => {
                        console.log('is connectionIsReconnecting')
                        // this.setState({callStatus:'connectionIsReconnecting' })
                    })
            
                    call.listeners('connectionDidReconnect', () => {
                        console.log('is connectionDidReconnect')
                        // this.setState({callStatus:'connectionDidReconnect' })
                    })
            
                    call.listeners('connectionDidDisconnect', () => {
                        console.log('is connectionDidDisconnect')
                        // this.setState({callStatus:'connectionDidDisconnect' })
                        // TwilioVoice.disconnect();
                        call.disconnect()
// ;                        this.setState({ twilioInited: false });
            
                    })
            
                    call.listeners('callStateRinging', () => {
                        console.log('is callStateRinging')
                        // this.setState({callStatus:'callStateRinging' })
                    })
            
                    call.listeners('callInviteCancelled', () => {
                        console.log('is callInviteCancelled')
                        // this.setState({callStatus:'callInviteCancelled' })
                    })
            
                    call.listeners('callRejected', () => {
                        console.log('is callRejected')
                        // this.setState({callStatus:'connectionDidConnect' })
                    })

    //     const outgoingCallResult = await settlePromise(
    //         voice.connect(token, {
    //           params: {
    //             To: "+918897116708",
    //           },
    //         }),
    //       );
    //       if (outgoingCallResult.status === 'rejected') {
    //         return rejectWithValue({
    //           reason: 'NATIVE_MODULE_REJECTED',
    //           error: miniSerializeError(outgoingCallResult.reason),
    //         });
    //       }
    //       else
    //       {
    //         console.log('call status')
    //         console.log(outgoingCallResult.status);

    // const outgoingCall = outgoingCallResult.value;

    // const callInfo = getCallInfo(outgoingCall);
    // // var callMap;
    // callMap.set("one", outgoingCall);

    // outgoingCall.on(TwilioCall.Event.ConnectFailure, (error) =>
    //   console.error('ConnectFailure:', error),
    // );
    // outgoingCall.on(TwilioCall.Event.Reconnecting, (error) =>
    //   console.error('Reconnecting:', error),
    // );
    // outgoingCall.on(TwilioCall.Event.Disconnected, (error) => {
    //   // The type of error here is "TwilioError | undefined".
    //   if (error) {
    //     console.error('Disconnected:', error);
    //   }
    // });

    // Object.values(TwilioCall.Event).forEach((callEvent) => {
    //   outgoingCall.on(callEvent, () => {
    //     dispatch(
    //       setActiveCallInfo({ id: requestId, info: getCallInfo(outgoingCall) }),
    //     );
    //   });
    // });

    // outgoingCall.once(TwilioCall.Event.Connected, () => {
    //   dispatch(connectEvent({ id: requestId, timestamp: Date.now() }));
    // });
    //       }
    }

    render(){
        return(
              <View style={styles.container}>
                 <TouchableOpacity onPress={() => this.initTwilio()}>
                   <View>
                   <Text>Init Twilio</Text>
                   </View>
               </TouchableOpacity>
              <TouchableOpacity  onPress={() => this.makeCall()}>
                  <View>
                   <Text>Make call</Text>
            {/* //         <ActivityIndicator animating={ this.state.indicator ? true : false} color={'black'} ></ActivityIndicator> */}
                </View>
                 </TouchableOpacity>
             </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        backgroundColor: 'green',
        width: '40%',
        height: 40
    }
});