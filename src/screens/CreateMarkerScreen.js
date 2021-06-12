import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import server from '../api/server';

const CreateMarkerScreen = ({ route, navigation }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { coordinate } = route.params;


    const Marker = async () => {
        try {
            const response = await server.post('', {
                "title": title,
                "description": description,
                "coordinate": coordinate
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='The title of the place' 
                        value={title} 
                        style={styles.input} 
                        onChangeText={(t) => setTitle(t)} 
                        />
            <TextInput placeholder='The description of the place' 
                        style={styles.input} 
                        value={description} 
                        onChangeText={(t) => setDescription(t)}
                        />
            <Button title='Confirm'
                    onPress={() => {
                            Marker();
                            navigation.navigate("Home")
                        }}
                    >
            </Button>
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
});

export default CreateMarkerScreen;