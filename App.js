import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {

    const [courseGoals, setCourseGoals] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const addGoalHandler = (enteredGoalText) => {
        setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {
            text: enteredGoalText,
            key: Math.random().toString()
        }])
        setModalVisible(false);
    };

    const removeGoalHanlder = (key) => {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.key !== key)
        })
    }

    const startAddGoalHandler = () => {
        setModalVisible(true);
    }

    const endAddGoalHandler = () => {
        setModalVisible(false);
    }

    return (
        <View style={styles.appContainer}>
            <Button title='Add Goal' color={'#6495ED'} onPress={startAddGoalHandler} />
            {modalVisible && <GoalInput addGoalHandler={addGoalHandler} modalVisible={modalVisible} cancelHandler={endAddGoalHandler}/>}
            <View style={styles.goalsContainer}>
                <FlatList data={courseGoals} renderItem={(itemData) => {
                    return <GoalItem text={itemData.item.text} id={itemData.item.key} deleteItem={removeGoalHanlder} />
                }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
        backgroundColor: "#f0ffff",
    },
    goalsContainer: {
        flex: 5
    }
});
