import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native'
import server from '../api/server';

const EditMarkerScreen = ({ route, navigation }) => {
    const [oldMarker, setOldMarker] = useState({});
    
    useEffect(() => {
        setOldMarker(route.params.marker)
     },[]);

    const remove = async () => {
        try {
            await server.delete(`/${oldMarker.id}`);
        } catch (e) {
            console.log(e);
        }
    }

    const edit = async () => {
        try {
            const response = await server.put(`/${oldMarker.id}`,{...oldMarker});
        } catch (e) {
            console.log(e);
        }
    }

    

    return (
        <View style={styles.container}>
            <TextInput placeholder='The title of the marker' 
                        style={styles.input} 
                        value={oldMarker.title} 
                        onChangeText={(t) => setOldMarker({id:oldMarker.id, 
                                                            coordinate: oldMarker.coordinate,
                                                            title:t,
                                                            description: oldMarker.description})} 
            />
            <TextInput placeholder='The description of the marker' 
                        style={styles.input} 
                        value={oldMarker.description} 
                        onChangeText={(t) => setOldMarker({id:oldMarker.id, 
                                                            coordinate: oldMarker.coordinate,
                                                            title: oldMarker.title,
                                                            description: t})} 
            />
            <View style={styles.button}>
                <Button title='Update'
                        onPress={() => {
                                edit();
                                navigation.navigate("Home")
                            }}
                        ></Button>
            </View>
            <View style={styles.button}>                        
                <Button title='Delete'
                        onPress={() => {
                            remove();
                            navigation.navigate("Home")
                        }}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        padding: 5,
        borderColor: 'gray',
        borderRadius:20,
        margin: 5,
        fontSize: 16,
        borderWidth: 2,
        height: 50,
        width: 300,
    },
    button: {
        marginTop: 5,
        marginBottom:5,
        padding:5
    },
});

export default EditMarkerScreen;