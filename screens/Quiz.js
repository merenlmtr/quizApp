import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const getQuiz = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        generateOptionsAndShuffle(data.results);
    }
    useEffect(() => {
        getQuiz();
    }, []);

    const handleNextPress = () => {
        setQues(ques + 1)
    }

    const generateOptionsAndShuffle = (_questions) => {
        const options = [...questions.incorrect_answers];
        options.push(_questions.correct_answers);
    }

    return (
        <View style={styles.container}>
            {questions && (<View style={styles.parent}>
                <View style={styles.top}>
                    <Text style={styles.question}>Q. {decodeURIComponent(questions[ques].question)}.</Text>
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
                    {ques !== 9 &&
                        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                            <Text style={styles.buttonText}>NEXT</Text>
                        </TouchableOpacity>
                    }
                    {ques === 9 &&
                        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                            <Text style={styles.buttonText}>SHOW RESULT</Text>
                        </TouchableOpacity>
                    }

                </View>
            </View>)}
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        height: '100%'
    },
    parent: {
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