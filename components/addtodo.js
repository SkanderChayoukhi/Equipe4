
import { View, TextInput, Button, Alert} from 'react-native';

const AddTodo = ({setTodos, todos}) => {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }

    const submitHandler = () => { 
        if (text.length === 0) return Alert.alert('EMPTY TO DO?', 'You should be ashamed of yourself!', [{text: 'Sorry thy lord for I have sinned.'}]);
        setTodos((prevTodos) => ([...prevTodos, { text: text, key: todos.length + 1 }]))
    }


    return (
    <View>
        <TextInput
            placeholder='new todo...'
            onChangeText={changeHandler}
            style= {{padding: 10, borderBottomColor: 'coral', borderBottomWidth: 1, marginBottom: 10}}
        />
        <Button
                onPress={submitHandler}
                title="Add Todo"
                color='coral'
        />  
    </View>
    );
};

export default AddTodo;
