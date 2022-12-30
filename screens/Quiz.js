import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quiz = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.question}>Q. Imagine this is a really cool Joke:</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>Option One</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>Option Two</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>Option Three</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>Option FOur</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttom}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                    <Text>END</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        height: '100%'
    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1
    },
    buttom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#1A759F',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    },
    question: {
        fontSize: 28,
    },
    option: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    },
    optionButton: {
        padding: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        borderRadius: 12
    }
})