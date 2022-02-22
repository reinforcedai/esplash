import React, { useState, useCallback } from "react";
import { ScrollView, StyleSheet, View, Alert } from "react-native";
import {  Text, Image } from 'react-native-elements';
import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from 'react-native-webview';


const HomeScreen = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <ScrollView style={styles.scrollView}>

      <View>
        <Image
          containerStyle={styles.img}
          source={require('../assets/images/img-2.png')}
        />
      </View>

      {/* <WebView
        source={{ uri: 'https://infinite.red' }}
      /> */}

      <View style={{marginVertical: 20}}>
        <Text style={styles.text}>Livestream</Text>
        <YoutubePlayer
          height={220}
          play={playing}
          videoId={'IWQizBJR19Q'}
          showinfo={0}
          onChangeState={onStateChange}
        />
      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  text: {
    color: '#ffffff',
    marginVertical: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
    textAlign: "center",
  },
  img: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
});

export default HomeScreen
