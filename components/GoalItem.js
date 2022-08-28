import { StyleSheet, Text, View, Pressable } from 'react-native';

export function GoalItem({ text, id, deleteItem }) {

    return (
        <View style={styles.goalItem}>
            <Pressable onPress={deleteItem.bind(this, id)} style={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#6495ED'
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5
    }
});
