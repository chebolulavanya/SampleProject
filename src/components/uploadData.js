import {getStorage, ref ,getDownloadURL, uploadBytes} from "firebase/storage";
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import {db, appnew} from './firebase';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


    const FileReference = async (storage, filename) => {
        
        const fileRef = ref(storage, filename);
        return fileRef;
      }
  
      
 export default FileReference();