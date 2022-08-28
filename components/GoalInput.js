import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

export function GoalInput({ addGoalHandler, modalVisible, cancelHandler }) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoal = () => {
        if (enteredGoalText === '') return;
        addGoalHandler(enteredGoalText);
        setEnteredGoalText("");
    };

    return (
        <Modal visible={modalVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/goal.png")} />
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={cancelHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'grey'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#f0ffff',
        backgroundColor: '#f0ffff',
        color: '#120438',
        width: '100%',
        borderRadius: 6,
        marginRight: 8,
        padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    button: {
        marginHorizontal: 8,
        width: 100
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});
