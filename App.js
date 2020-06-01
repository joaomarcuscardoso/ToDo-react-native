import React from 'react';
import {Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

class App extends React.Component{
  state = {
    text:"",
    todo: []
  }
  addTodo =() =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }

  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }
  renderTodos = () => {
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
          <Text
          style={styles.todo}
          onPress={() => {this.deleteTodo(t)}}
          >{t}</Text>
        </TouchableOpacity>
      )
    })
  }
  render(){
    return(
      <View style={styles.whoStyles}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}>Notes app</Text>
          <TextInput
          style={styles.inputStyle}
          onChangeText={(text)=>this.setState({text})}
          value={this.state.text}
          />
          <Button        
            title="Add Todo"
            color="#424242"            
            onPress={this.addTodo}
          />
          <View style={{marginTop: 110}} />
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}

const styles = {
  whoStyles:{
    backgroundColor:'#b3e5fc',
    flex:1
  },
  viewStyle:{
    marginTop:50,
    alignItems: 'center', 
    justifyContent: 'center',
    margin:10,
  },
  inputStyle:{
    height:40,
    borderWidth:1,
    alignSelf: 'stretch',
    marginBottom:15

  },
  header:{
    fontSize:30,
    color:'#424242',
    fontWeight:'bold',
    marginBottom:15

  },
  todo: {
    fontSize:24,
    color: '#424242'
  }

}
export default App;