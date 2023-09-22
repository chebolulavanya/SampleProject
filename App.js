/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Image,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Picker } from '@react-native-picker/picker';
import { Geolocation } from 'react-native-geolocation-service';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { NativeModules } from 'react-native';
import { useNetInfo, NetInfo } from "@react-native-community/netinfo";
import Snackbar from 'react-native-snackbar';


const nativeValue = NativeModules.NativeClass;

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import  ProfileScreen  from './src/components/profileScreen';
import  HomeScreenProp  from './src/components/Home';
import HorizontalScrollView from './src/components/horizontalScrollView';
import DraggableView from './src/components/draggableView';
import DraggableListViews from './src/components/draggableListViews';
import DraggableBlob from './src/components/draggableBlob';
import QuoteApp from './src/components/beautifulDND';
import SampleDragDrop from './src/components/sampleDragDrop';
import SampleScrollView from './src/components/sampleScrooView';
import GridExample from './src/components/collectionView';
import DraggableBoard from './src/components/draggableBoard';
import TwillioCalling from './src/components/twilliocalling';
import ChatApp from './src/components/ChatApp';
import {initializeApp} from 'firebase/app';

import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabNavigationScreen } from './src/components/tabNavigation';
import { MyDrawer } from './src/components/drawerNavigation';
import { FetchScreen } from './src/components/fetchScreen';
import { legacy_createStore as createStore } from 'redux';
import DatePicker from 'react-native-date-picker';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import ServieceHeaders from './src/utils/commonApi';
import Login from './src/components/HOC/login';
import { AppProvider,AppConsumer} from './src/utils/appProvider';
import CheckboxTreeScreen from './src/components/checkBoxScreen';
import MultiDropDown from './src/components/multiDropDown';
import CommunicationPannel from './src/components/CommunicationPannel';



  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyBRTf7LVJO1nSXID1HF9QwE3FyPOuv1-3s",
      authDomain: "chatappv2-4f842.firebaseapp.com",
      databaseURL: "https://chatappv2-4f842-default-rtdb.firebaseio.com",
      projectId: "chatappv2-4f842",
      storageBucket: "chatappv2-4f842.appspot.com",
      messagingSenderId: "249467052721",
      appId: "1:249467052721:web:ef0aa24af9d6fb088b7890"
    };

    const dropDownData = [{
      "code": 200,
      "data": [
        {
          "id": 118,
          "name": "INDIA",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "HH:mm",
          "language": "xx",
          "parentRegionId": 0,
          "autosavetimelimit": 900000
        },
        {
          "id": 428,
          "name": "North-1",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 118,
          "autosavetimelimit": 900000
        },
        {
          "id": 429,
          "name": "North-2",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 118,
          "autosavetimelimit": 900000
        },
        {
          "id": 430,
          "name": "EAST",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 118,
          "autosavetimelimit": 900000
        },
        {
          "id": 431,
          "name": "CENTRAL",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 118,
          "autosavetimelimit": 900000
        },
        {
          "id": 432,
          "name": "South",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 118,
          "autosavetimelimit": 900000
        },
        {
          "id": 433,
          "name": "WEST",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 118,
          "autosavetimelimit": 900000
        },
        {
          "id": 434,
          "name": "EUP",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 435,
          "autosavetimelimit": 900000
        },
        {
          "id": 435,
          "name": "WUP",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 428,
          "autosavetimelimit": 900000
        },
        {
          "id": 436,
          "name": "UK",
          "isDefaultUserRegion": true,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 428,
          "autosavetimelimit": 900000
        },
        {
          "id": 437,
          "name": "Delhi",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 428,
          "autosavetimelimit": 900000
        },
        {
          "id": 438,
          "name": "Rajasthan",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 428,
          "autosavetimelimit": 900000
        },
        {
          "id": 439,
          "name": "Chandigarh",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 429,
          "autosavetimelimit": 900000
        },
        {
          "id": 440,
          "name": "Himachal Pradesh",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 439,
          "autosavetimelimit": 900000
        },
        {
          "id": 441,
          "name": "Haryana",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 429,
          "autosavetimelimit": 900000
        },
        {
          "id": 442,
          "name": "Jammu & Kashmir",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 429,
          "autosavetimelimit": 900000
        },
        {
          "id": 443,
          "name": "Punjab",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 429,
          "autosavetimelimit": 900000
        },
        {
          "id": 444,
          "name": "West Bengal",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 430,
          "autosavetimelimit": 900000
        },
        {
          "id": 445,
          "name": "Odisha",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 430,
          "autosavetimelimit": 900000
        },
        {
          "id": 446,
          "name": "Assam",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 430,
          "autosavetimelimit": 900000
        },
        {
          "id": 447,
          "name": "Bihar",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 430,
          "autosavetimelimit": 900000
        },
        {
          "id": 448,
          "name": "Jharkhand",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 430,
          "autosavetimelimit": 900000
        },
        {
          "id": 449,
          "name": "ROM (Pune)",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 451,
          "autosavetimelimit": 900000
        },
        {
          "id": 450,
          "name": "Mumbai",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 433,
          "autosavetimelimit": 900000
        },
        {
          "id": 451,
          "name": "Nagpur",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 433,
          "autosavetimelimit": 900000
        },
        {
          "id": 452,
          "name": "Gujarat",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 433,
          "autosavetimelimit": 900000
        },
        {
          "id": 453,
          "name": "Goa - Corlim",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 431,
          "autosavetimelimit": 900000
        },
        {
          "id": 454,
          "name": "CG",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "HH:mm",
          "language": "xx",
          "parentRegionId": 431,
          "autosavetimelimit": 900000
        },
        {
          "id": 455,
          "name": "MP",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 431,
          "autosavetimelimit": 900000
        },
        {
          "id": 456,
          "name": "Karnataka",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 432,
          "autosavetimelimit": 900000
        },
        {
          "id": 457,
          "name": "Kerala",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 432,
          "autosavetimelimit": 900000
        },
        {
          "id": 458,
          "name": "Andhra Pradesh",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 432,
          "autosavetimelimit": 900000
        },
        {
          "id": 459,
          "name": "Telangana",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 432,
          "autosavetimelimit": 900000
        },
        {
          "id": 460,
          "name": "TN-1",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 461,
          "autosavetimelimit": 900000
        },
        {
          "id": 461,
          "name": "TN-2",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 432,
          "autosavetimelimit": 900000
        }
      ]
    }];

    // Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [hidden, setHidden] = useState(false);
  const Stack = createNativeStackNavigator();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [isConnected, setConnected] = useState(false);
//     const STYLES = ['default', 'dark-content', 'light-content'];
// const TRANSITIONS = ['fade', 'slide', 'none'];
//   // const serviceData = ServieceHeaders();
//   const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
//     STYLES[0],
//   );
//   const [statusBarTransition, setStatusBarTransition] = useState<
//     'fade' | 'slide' | 'none'
//   >(TRANSITIONS[0]);

  // React.useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener((state) => {
  //     console.log(state);
  //    setConnected(state.isConnected)
  //    if(!state.isConnected)
  //    {
  //     Snackbar.show({
  //       text: 'Hello world',
  //       duration: Snackbar.LENGTH_SHORT,
  //     })
  //    }
     
  //   });
  //   return () => {
  //     // unsubscribe();
  //   };
  // }, []);

  // React.useEffect(() => {
  //   // SplashScreen.hide();
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     // setReachable(state.isInternetReachable == null? true : 
  //     //  state.isInternetReachable)
  //     console.log(state)
  // });
  // return unsubscribe
  // }, []);
  

  // React.useEffect(() => {
  //   // const netInfoSubscription = NetInfo.addEventListener(handleNetworkChange);
  //   // return () => {
  //   //   netInfoSubscription && netInfoSubscription();
  //   // };
  //   NetInfo.fetch().then(state => {
  //     console.log("Connection type", state.type);
  //     console.log("Is connected?", state.isConnected);
  //   });
  // }, []);

  const netInfo = useNetInfo()

  React.useEffect(() => {
    console.log('net info changed, new state: ', netInfo)
    if(!netInfo.isConnected && (netInfo.isConnected != null))
    {
      Snackbar.show({
              text: 'You are on offline',
              duration: Snackbar.LENGTH_SHORT,
            })
    }
    
  }, [netInfo])

  const handleNetworkChange = (state) => {
    if(!state.isConnected)
    {
      Snackbar.show({
        text: 'Hello world',
        duration: Snackbar.LENGTH_SHORT,
      })
    }
  };

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  const _onPressButton = () => {
    Alert.alert('You tapped the button!');
  }

  const _onLongPressButton = () => {
    Alert.alert('You long-pressed the button!');
  }

  // async function getIncrementItem(){
  // AsyncStorage.setItem('increment',increment.toString);
  //  var data = await AsyncStorage.getItem('increment') || '0';
  //  var data1 = parseInt(data) || 0 + 1;
  //  AsyncStorage.setItem('increment',data1.toString);
  // }

  async function getCurrentPosition() {
    await Geolocation.requestAuthorization('always');
    await Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      default:
        return state
    }
  }

  let store = createStore(counterReducer)

  // store.subscribe(() => console.log(store.getState()))


  return (
  // <Login></Login>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //          <Stack.Screen
    //           name="HomeScreen"
    //           component={HomeScreenProp}
    //           options={{title: 'Home'}}
    //         />
    //         <Stack.Screen name="Profile" component={ProfileScreen} />
    //       </Stack.Navigator>
    // </NavigationContainer>
    // <HomeScreen></HomeScreen>
    // <View style={{ justifyContent: 'center', alignItems: 'center'}}>
    // <HorizontalScrollView></HorizontalScrollView>
    // <DraggableListViews></DraggableListViews>
    // <GridExample></GridExample>
    // <SampleScrollView></SampleScrollView>
    // <SampleDragDrop></SampleDragDrop>
    // <QuoteApp></QuoteApp>
    // <DraggableView></DraggableView>
    // <DraggableBlob></DraggableBlob>
    // <DraggableBoard></DraggableBoard>
    // <TwillioCalling></TwillioCalling>
    // <ChatApp></ChatApp>
    // <CheckboxTreeScreen></CheckboxTreeScreen>
    // <MultiDropDown data={dropDownData[0].data} onPress={(item) =>{
    //   console.log('selected item is here',item);
    // }}></MultiDropDown>
    <CommunicationPannel></CommunicationPannel>
    // <CheckboxTreeScreen></CheckboxTreeScreen>

    // </View>
     
  );


}

function getApiCall(){

  // new ServieceHeaders().ServieceHeaderGetApi("","https://jsonplaceholder.typicode.com/todos/1/posts",(error,value)=>{

  //  if(error)
  //  {
  //   console.log('its coming back')
  //   console.log(error)
  //  }
  //  else if(value)
  //  {
  //   console.log('its coming back')
  //   console.log(value)
  //  }
  //  });

  new ServieceHeaders().ServieceHeaderPostApi("","https://jsonplaceholder.typicode.com/todos/1/posts",(error,value)=>{

   if(error)
   {
    console.log('its coming back')
    console.log(error)
   }
   else if(value)
   {
    console.log('its coming back')
    console.log(value)
   }
   });

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  // centeredView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 22,
  // },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button1: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});

export default App;


