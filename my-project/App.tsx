import {Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {ReactElement, ReactNode, useState} from 'react';
import Checkbox from 'expo-checkbox';
import {Input} from './input/Input';
import {globalStyles} from './global-styles';

export default function App() {
    const [value, setValue] = useState('')
    const [show, setShow] = useState<string>('0')
    const [tasks, setTasks] = useState([
        {id: '1', title: 'HTML', isDone: true},
        {id: '2', title: 'CSS', isDone: true},
        {id: '3', title: 'JS', isDone: false},
        {id: '4', title: 'React', isDone: true},
        {id: '5', title: 'React Native', isDone: false},
    ])

    const addTask = () => {
        const newTask = {id: new Date().toLocaleString(), title: value, isDone: false}
        // Alert.alert(JSON.stringify(newTask))
        setTasks([newTask, ...tasks])
        setValue('')
    }

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    const toggleCheckbox = (id: string) => {
        setTasks(tasks.map(t => t.id === id ? {...t, isDone: !t.isDone} : t))
    }

    const changeTitle = (id: string, title: string) => {
        setTasks(tasks.map(t => t.id === id ? {...t, title} : t))
    }

    return (
        <View style={styles.container}>
            <HideKeyboard>
                <View style={[{width: '100%', alignItems: 'center', paddingTop: 30}]}>
                    <TextInput
                        style={[styles.input]}
                        value={value}
                        onChangeText={setValue}
                        placeholder={'Введите текст...'}
                    />
                </View>
            </HideKeyboard>
            <View>
                <Button color={'#ff8906'} title={'Add task'} onPress={addTask}/>
            </View>
            <View style={{width: '60%'}}>
                {tasks.map(t => <View key={t.id} style={[globalStyles.border, styles.boxTask]}>
                    <Checkbox value={t.isDone} onValueChange={() => toggleCheckbox(t.id)}/>
                    {show === t.id
                        ? <Input
                            id={t.id}
                            title={t.title}
                            changeTitle={changeTitle}
                            setShow={setShow}
                        />
                        : <Text onPress={() => setShow(t.id)}>{t.title}</Text>}
                    <Button color={'#ff8906'} title={'X'} onPress={() => removeTask(t.id)}/>
                </View>)}
            </View>
        </View>
    );
}

const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0e17',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '60%',
        backgroundColor: '#fff',
        fontSize: 18,
        padding: 5,
        marginBottom: 15,
    },
    boxTask: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fffffe',
        paddingVertical: 4,
        paddingHorizontal: 20,
        marginVertical: 3,
    },
});


