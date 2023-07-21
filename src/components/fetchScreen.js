
import { Text, View } from 'react-native';
import React, { useState, useContext, useRef, useEffect } from 'react';


const url = "https://jsonplaceholder.typicode.com/posts"

const FetchScreen = ()=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(url)
          .then((resp) => resp.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    return(
        <View style={{flex: 1,
            justifyContent: "center",
            backgroundColor: "#ecf0f1",
            padding: 8,}}>
  {loading ? (
    <Text>Loading...</Text>
  ) : (
    data.map((post) => {
      return (
        <View>
          <Text style={{fontSize: 30,
          fontWeight: "bold",}}>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      );
    })
  )}
</View>
    );
}



export default FetchScreen