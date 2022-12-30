import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Result Page</Text>
            </View>
            <View style={styles.banner}>
                <Image source={require('../assets/front.png')} style={styles.homeImage} />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        height: '100%'
    },
    homeImage: {
        height: 300,
        width: 300,
    },
    banner: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})