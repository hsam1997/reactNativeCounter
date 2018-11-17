import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

import Counter from './Components/counter';
import Counters from './Components/counters';





export default class App extends React.Component {
  
/*
  handlePress = () =>{
    this.setState({ value  : this.state.value + 1 });
  }
*/
 state = {
   value : this.props.value , 
 }
  render() {
    return (
      <View>
        <Counters />
      </View>
    );
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle :{
    color :"red"
  }
});

*/

/* 

      {this.state.counters.map(x => (
        <View>
          <Button 
          title="press on me" 
          onPress={this.handlePress} 
          key={x.id} 
          id={x.id}
          /> 
          <Text>value : {x.value}</Text>
        </View>
      ))}





        <Text style={styles.textStyle}>A test from samix!</Text>
        
        <Button title="press on me" onPress={this.handlePress} /> 
        <Text>value : {this.state.value}</Text>
        */