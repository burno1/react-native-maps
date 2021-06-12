import React, { useRef, useState, useEffect } from "react";
import { Button, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useIsFocused } from '@react-navigation/native';
import * as Location from "expo-location";
import server from "../api/server";


const HomeScreen = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [watchLocationRemover, setWatchLocationRemover] = useState(null);
  const isFocused = useIsFocused();
  

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setLocation(location);
    })();
  }, []);

  

  useEffect(() => {
    getMarkers();
  }, [isFocused]);

  const getMarkers = async () => {
    try {
        const response = await server.get('', {
            params: {}
        })
        setMarkers(response.data);
    }
    catch (e) {
        console.log(e);
    }
}
 
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}
          onLongPress={(e) => {
            navigation.navigate("Marker", { coordinate: e.nativeEvent.coordinate });
          }}>
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                        onPress={() => navigation.navigate('EditMarker', {marker: marker})}
                    />
                ))}
        </MapView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});



export default HomeScreen;
