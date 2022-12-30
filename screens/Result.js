import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/Title';

const Result = ({ navigation, route }) => {
    const { score } = route.params;
    return (
        <View style={styles.container}>
            <View>
                <Title titleText='Results' />
            </View>
            <View>
                <Text style={styles.scoreText}>Score: {score}</Text>
            </View>
            <View style={styles.banner}>
                <Image source={require('../assets/score.gif')} style={styles.homeImage} />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Goto Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
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
    },
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
    },
    scoreText: {
        fontSize: 24,
        fontWeight: '800',
        alignSelf: 'center'
    }
})