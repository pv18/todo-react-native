import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';

export default function App() {
    const [value, setValue] = useState('')

    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS', isDone: false},
        {id: 3, title: 'React', isDone: true},
        {id: 3, title: 'React Native', isDone: false},
    ])

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input]}
                value={value} onChangeText={setValue}
                placeholder={'Введите текст...'}
            />
            <View>
                {tasks.map(t => <View key={t.id}>
                    <Text>{t.title}</Text>
                </View>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        backgroundColor: '#fff',
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 7,
    }
});

// Глобальный стиль
const globalStyles = StyleSheet.create({
    border: {
        borderStyle: 'solid',
        borderWidth: 1,
    }
})
