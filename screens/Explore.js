import React, { useState, useCallback } from "react";
import { ScrollView, StyleSheet, View, Alert } from "react-native";
import {  Text, Icon } from 'react-native-elements';
import YoutubePlayer from "react-native-youtube-iframe";

const ExploreScreen = () => {
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
        <YoutubePlayer
          height={220}
          play={playing}
          videoId={'OPn54yWoQ5U'}
          onChangeState={onStateChange}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Testimonies</Text>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'qR60VIc1Knw'}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'47WY1-oUlkA'}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'47WY1-oUlkA'}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'47WY1-oUlkA'}
              onChangeState={onStateChange}
            />
          </View>

        </ScrollView>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Deliverance</Text>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'47WY1-oUlkA'}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'47WY1-oUlkA'}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'47WY1-oUlkA'}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'47WY1-oUlkA'}
              onChangeState={onStateChange}
            />
          </View>

        </ScrollView>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Healing</Text>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'47WY1-oUlkA'}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'47WY1-oUlkA'}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'47WY1-oUlkA'}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'47WY1-oUlkA'}
              onChangeState={onStateChange}
            />
          </View>

        </ScrollView>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Sermons/Devotionals</Text>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'Ngn3Bklh3WE'}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'13BU80p84tA'}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'47WY1-oUlkA'}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              height={220}
              width={150}
              videoId={'47WY1-oUlkA'}
              onChangeState={onStateChange}
            />
          </View>

        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    height: 150
  },
  contentContainer: {
    flexGrow: 1,
    paddingVertical: 0,
    flexDirection: 'row',
  },
  video: {
    marginHorizontal: 5,
  },
  text: {
    color: '#ffffff',
    marginVertical: 15,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default ExploreScreen
