import React, { useCallback, useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { Image, Pressable, StyleSheet, Text, View, ActionSheetIOS, ImageBackground } from 'react-native';
import { getDatabase, get, ref, onValue, off, update,limitToLast,startAt,startAfter, limitToFirst } from 'firebase/database';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { FileReference } from './uploadData';
import { getStorage, ref as dataRef, getDownloadURL, uploadBytes } from "firebase/storage";
import { collection, addDoc, query, orderBy, onSnapshot, setDoc , limit as dataLimit} from 'firebase/firestore';
import { db, appnew } from './firebase';
import * as FileSystem from 'expo-file-system';
import uuid from 'react-native-uuid';
import Video from 'react-native-video';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from 'react-native-document-picker';



export default function Chat({ onBack, myData, selectedUser }) {
  const [messages, setMessages] = useState([]);
  const [img, setImage] = useState("");


  useEffect(() => {
    //load old messages
    const loadData = async () => {
      const myChatroom = await fetchMessages();

      console.log(myChatroom.messages)
      setMessages(renderMessages(myChatroom.messages));
    };

    loadData();

    // set chatroom change listener
    // const database = getDatabase();
    // const chatroomRef = ref(database, `chatrooms/${selectedUser.chatroomId}`);
    // onValue(chatroomRef, snapshot => {
    //   const data = snapshot.val();
    //   setMessages(renderMessages(data.messages));
    // });

    // return () => {
    //   //remove chatroom listener
    //   off(chatroomRef);
    // };
  }, [fetchMessages, renderMessages, selectedUser.chatroomId]);

  const renderMessages = useCallback(
    msgs => {
      //structure for chat library:
      // msg = {
      //   _id: '',
      //   user: {
      //     avatar:'',
      //     name: '',
      //     _id: ''
      //   }
      // }

      return msgs
        ? msgs.reverse().map((msg, index) => ({
          ...msg,
          _id: index,
          user: {
            _id:
              msg.sender === myData.username
                ? myData.username
                : selectedUser.username,
            avatar:
              msg.sender === myData.username
                ? myData.avatar
                : selectedUser.avatar,
            name:
              msg.sender === myData.username
                ? myData.username
                : selectedUser.username,
          },
        }))
        : [];
    },
    [
      myData.avatar,
      myData.username,
      selectedUser.avatar,
      selectedUser.username,
    ],
  );

  // const fetchMessages = useCallback(async () => {
  //   const database = getDatabase();

  //   const snapshot = await get(
  //     ref(database, `chatrooms/${selectedUser.chatroomId}`),
  //   );

  //   return snapshot.val();
  // }, [selectedUser.chatroomId]);


  const fetchMessages = useCallback(async () => {
        const database = getDatabase();

        // const snapshot = await get(
        //   ref(database, `chatrooms/${selectedUser.chatroomId}`),
        // );
        // console.log("snapshot",snapshot)
    
    
        // const snapshot = query(ref(database, `chatrooms/${selectedUser.chatroomId}`).orderByChild('createdAt').limitToLast(10));
        const test = query(ref(database, `chatrooms/${selectedUser.chatroomId}`,dataLimit(2)));
        const value = get(test).then((snapshot) => {
            console.log(snapshot.val())
          return snapshot.val();
          // snapshot.forEach((child) => {
          //   console.log("class",child.val());
          // });
        });
        // console.log("snapshot1",snapshot1)
        // return snapshot.val();
        // console.log(snapshot.val())
        // console.log(value)
        return value;
      }, [selectedUser.chatroomId]);

  const onSend = useCallback(
    async (msg = []) => {
      //send the msg[0] to the other user
      const database = getDatabase();

      //fetch fresh messages from server
      const currentChatroom = await fetchMessages();

      const lastMessages = currentChatroom.messages || [];

      update(ref(database, `chatrooms/${selectedUser.chatroomId}`), {
        messages: [
          ...lastMessages,
          {
            text: msg[0].text,
            sender: myData.username,
            createdAt: new Date(),
          },
        ],
      });

      setMessages(prevMessages => GiftedChat.append(prevMessages, msg));
    },
    [fetchMessages, myData.username, selectedUser.chatroomId],
  );

  const gotoMedia = () => {

    ActionSheetIOS.showActionSheetWithOptions({

      options: ["Cancel", "Camera", "Photos", "Video", "Audio", "Document"],

      cancelButtonIndex: 0

    },

      buttonIndex => {

        if (buttonIndex == 2) {
          console.log('photos')

          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image.path);
            uploadMediaToFirestore(image.path, 'image');
          });

        } else if (buttonIndex == 1) {

          console.log('camers')
          ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            uploadMediaToFirestore(image.path, 'image');
          });

        } else if (buttonIndex == 3) {
          console.log('video')
          const options = {

            title: 'Video Picker',

            mediaType: 'video',

          };

          ImagePicker.openPicker({
            mediaType: "video",
          }).then((video) => {
            console.log(video);
            uploadMediaToFirestore(video.path, 'video');
          });

        }
        else if(buttonIndex == 4){
          DocumentPicker.pick({
            allowMultiSelection: true,
            type: [types.audio],
          })
            .then((value) =>{
              console.log('get audio')
              console.log(value)
              const audioFile = value;
              const audioFilePath = audioFile[0];
              uploadMediaToFirestore(audioFilePath.uri, 'audio');
            })
            .catch(handleError)
        }
        else if(buttonIndex == 5){
          DocumentPicker.pick({
            allowMultiSelection: false,
            type: [types.doc, types.docx],
          })
            .then((value) =>{
              console.log('get document')
              const audioFile = value;
              const audioFilePath = audioFile[0];
              uploadMediaToFirestore(audioFilePath.uri, 'document');
              console.log(value)
            })
            .catch(handleError)
        }

      })

  }

  const handleError = (err) => {
    if (isCancel(err)) {
      console.warn('cancelled')
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn('multiple pickers were opened, only the last will be considered')
    } else {
      throw err
    }
  }

  const uploadMediaToFirestore = async (uri, type) => {

    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

    const storage = getStorage(appnew);
    const fileRef = dataRef(storage, filename);
    const img = await fetch(uploadUri);
    const bytes = await img.blob();
    let metadata;
    if (type == 'video') {
      metadata = {
        contentType: 'video/mp4',
      };
    } else if(type == 'audio')
    {
      metadata = {
        contentType: 'audio/mp3',
      };
    } else if(type == 'document')
    {
      metadata = {
        contentType: 'doc/docx',
      };
    }else {
      metadata = {
        contentType: 'image/jpeg',
      };
    }

    uploadBytes(fileRef, bytes, metadata).then(async (uploadTask) => {
      console.log('task', uploadTask)
      getDownloadURL(uploadTask.ref).then((url) => {
        if (type == 'video') {
          setVideoData(url);
        } else if(type == 'audio')
        {
          setAudioData(url);
        } else if(type == 'document'){
          setDocumentData(url);
        } else {
          setImageData(url);
        }
      });
    }).catch((err) => {
      alert('Error while uploading Image!')
      console.log(err);
    });
  }

  const setVideoData = (url) => {
    const imageMessage = [
      {
        _id: uuid.v4(),
        createdAt: new Date(),
        video: url,
        user: {
          _id: myData?.username ? myData.username : '1',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ];
    setMessages(previousMessages => GiftedChat.append(previousMessages, imageMessage))
    const { _id, createdAt, user, video } = imageMessage[0]
    addDoc(collection(db, 'chatMessages'), { _id, createdAt, video, user: { ...user, avatar: 'https://placeimg.com/140/140/any' } });
    onSendVideo(imageMessage[0]);
  }

  const setImageData = (url) => {
    const imageMessage = [
      {
        _id: uuid.v4(),
        createdAt: new Date(),
        image: url,
        user: {
          _id: myData?.username ? myData.username : '1',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ];
    setMessages(previousMessages => GiftedChat.append(previousMessages, imageMessage))
    const { _id, createdAt, user, image } = imageMessage[0]
    addDoc(collection(db, 'chatMessages'), { _id, createdAt, image, user: { ...user, avatar: 'https://placeimg.com/140/140/any' } });
    onSendImage(imageMessage[0]);
  }

  const setAudioData = (url) => {
    const imageMessage = [
      {
        _id: uuid.v4(),
        createdAt: new Date(),
        audio: url,
        user: {
          _id: myData?.username ? myData.username : '1',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ];
    setMessages(previousMessages => GiftedChat.append(previousMessages, imageMessage))
    const { _id, createdAt, user, image } = imageMessage[0]
    // addDoc(collection(db, 'chatMessages'), { _id, createdAt, audioFile, user: { ...user, avatar: 'https://placeimg.com/140/140/any' } });
    onSendAudio(imageMessage[0]);
  }

  const setDocumentData = (url) => {
    const imageMessage = [
      {
        _id: uuid.v4(),
        createdAt: new Date(),
        doc: url,
        user: {
          _id: myData?.username ? myData.username : '1',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ];
    setMessages(previousMessages => GiftedChat.append(previousMessages, imageMessage))
    const { _id, createdAt, user, image } = imageMessage[0]
    // addDoc(collection(db, 'chatMessages'), { _id, createdAt, doc, user: { ...user, avatar: 'https://placeimg.com/140/140/any' } });
    onSendDocument(imageMessage[0]);
  }

  const onSendImage = useCallback(
    async (msg) => {
      console.log(msg)
      //send the msg[0] to the other user
      const database = getDatabase();

      //fetch fresh messages from server
      const currentChatroom = await fetchMessages();

      const lastMessages = currentChatroom.messages || [];

      update(ref(database, `chatrooms/${selectedUser.chatroomId}`), {
        messages: [
          ...lastMessages,
          {
            text: "",
            sender: myData.username,
            createdAt: new Date(),
            image: msg.image
          }
          // msg
        ],
      });
    },
    [fetchMessages, myData.username, selectedUser.chatroomId],
  );

  const onSendAudio = useCallback(
    async (msg) => {
      console.log(msg)
      //send the msg[0] to the other user
      const database = getDatabase();

      //fetch fresh messages from server
      const currentChatroom = await fetchMessages();

      const lastMessages = currentChatroom.messages || [];

      update(ref(database, `chatrooms/${selectedUser.chatroomId}`), {
        messages: [
          ...lastMessages,
          {
            text: "",
            sender: myData.username,
            createdAt: new Date(),
            audio: msg.audio
          }
          // msg
        ],
      });
    },
    [fetchMessages, myData.username, selectedUser.chatroomId],
  );

  const onSendDocument = useCallback(
    async (msg) => {
      console.log(msg)
      //send the msg[0] to the other user
      const database = getDatabase();

      //fetch fresh messages from server
      const currentChatroom = await fetchMessages();

      const lastMessages = currentChatroom.messages || [];

      update(ref(database, `chatrooms/${selectedUser.chatroomId}`), {
        messages: [
          ...lastMessages,
          {
            text: "",
            sender: myData.username,
            createdAt: new Date(),
            doc: msg.doc
          }
          // msg
        ],
      });
    },
    [fetchMessages, myData.username, selectedUser.chatroomId],
  );

  const onSendVideo = useCallback(
    async (msg) => {
      console.log(msg)
      //send the msg[0] to the other user
      const database = getDatabase();

      //fetch fresh messages from server
      const currentChatroom = await fetchMessages();

      const lastMessages = currentChatroom.messages || [];

      update(ref(database, `chatrooms/${selectedUser.chatroomId}`), {
        messages: [
          ...lastMessages,
          {
            text: "",
            sender: myData.username,
            createdAt: new Date(),
            video: msg.video
          }
          // msg
        ],
      });
    },
    [fetchMessages, myData.username, selectedUser.chatroomId],
  );

  const onBuffer = (buffer) => {
    console.log('buffered', buffer);
  }
  const videoError = (err) => {
    console.log('error', err);
  }

  const renderMessageVideo = (props) => {
    const { currentMessage } = props;
    console.log('coming to audio')
    console.log(currentMessage.video);
    return (

      <View style={{ position: 'relative', height: 150, width: 250 }}>

        <Video
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: 150,
            width: 250,
            borderRadius: 20,
          }}
          shouldPlay
          rate={1.0}
          resizeMode="cover"
          height={150}
          width={250}
          muted={false}
          source={{ uri: currentMessage.video }}
          allowsExternalPlayback={false}></Video>

      </View>
    );
  };


  return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
        <Pressable onPress={onBack}>
          <Image source={require('../../assets/images/back.png')} />
          <Text>{selectedUser?.name}</Text>
        </Pressable>
        <Pressable onPress={gotoMedia} >
          <Image source={require('../../assets/images/back.png')} />
        </Pressable>
      </View>
      {/* <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: '/Users/lavanyachebolu/Library/Developer/CoreSimulator/Devices/6D152935-B5A7-4B72-B891-C655ADF04846/data/Containers/Data/Application/DFBB6456-87AC-488D-8D80-604186723923/tmp/2F852D32-EEED-4F19-B030-A67923F520DE.jpg'}} ></ImageBackground> */}
      <GiftedChat
        messages={messages}
        onSend={newMessage => onSend(newMessage)}
        user={{
          _id: myData.username,
        }}
        renderMessageVideo={renderMessageVideo}
        // renderMessageAudio={}
      />
    </>
  );
}

const styles = StyleSheet.create({
  actionBar: {
    backgroundColor: '#cacaca',
    height: 41,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
