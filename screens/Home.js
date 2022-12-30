import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title titleText='Quizzler' />
            <View style={styles.banner}>
                <Image source={require('../assets/front.png')} style={styles.homeImage} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz')}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

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
        alignItems: 'center',
        flex: 1
    },
    button: {
        width: '100%',
        backgroundColor: '#1A759F',
        padding: 15,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white'
    }
})