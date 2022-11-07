import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput, Button, ScrollView} from 'react-native';

export default function App() {
  const [text , settext] = useState('')
  const [todolist , settodolist] = useState([])
  const todoInput = (input) =>{
    settext(input)
  }

  const addTodo = () =>{    
    settodolist(() =>[...todolist,text])
    settext('')
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <TextInput style={styles.inputfiled} placeholder='add task' value={text} onChangeText={todoInput} />
        <Button title='add' onPress={addTodo} />
      </View>
      <View style={styles.tasks}>
        <ScrollView>
        {todolist.map((list) => 
        <View key={list} style={styles.listContainer} ><Text style={styles.list}>{list}</Text></View>)}
        </ScrollView>  
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    
  },
  inputfiled:{
    borderColor:'white' ,
    borderWidth: 0.5,
    padding: 10,
    width: '80%',
    height: 50,
    color: 'white',
  },
  tasks: {
    flex: 6,
    alignItems:'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    width: 300,
    marginBottom: 7,
    borderRadius: 20,
    backgroundColor: '#0000aa',
    
  },
  list: { 
    padding: 5,
    width: '100%',
    textAlign: 'center',
    color: 'white',
  }
});
