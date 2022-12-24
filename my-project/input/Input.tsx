import {Button, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';

type IProps = {
    id: string
    title: string
    changeTitle: (taskId: string, title: string) => void
    setShow: (taskId: string) => void
}

export const Input = (props: IProps) => {
    const [value, setValue] = useState(props.title)

    const changeTitle = (title: string) => {
        setValue(title)
    }

    return (
        <View style={{flexDirection:'row'}}>
            <TextInput
                style={[styles.input]}
                value={value}
                onChangeText={(title) => changeTitle(title)}
            />
            <Button title={'+'} onPress={() => {
                props.changeTitle(props.id, value)
                props.setShow('0')
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '60%',
        backgroundColor: '#fff',
        // fontSize: 18,
        padding: 5,
    },
})

