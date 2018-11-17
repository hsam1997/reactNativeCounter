import React, { Component } from 'react';
import { StyleSheet, Text, View ,Button , Alert} from 'react-native';



class Counter extends Component {

    
    state = {
        value : this.props.value
    }
    
    render() { 
        return ( 
        <View style={styles.container } >

            <View style={{
                marginRight : 15 ,
                backgroundColor : this.valueColor() ,
                padding : 7 ,
                borderRadius : 15}}>
                <Text> {this.valueFormat()} </Text>
            </View>
            
            <View style={styles.eachBox}>
                <Button 
                    title="Increment"
                    onPress={this.handleIncrement} 
                />
            </View>
            <View style={styles.eachBox}>
                <Button 
                    title="Delete"
                    onPress={() => this.props.onDelete(this.props.id)}
                    color="red"
                />
            </View>
        </View> 
        );
    }
    handleIncrement = () =>{
        this.setState({value : this.state.value+1} );
      }
      
    valueColor() {
        return this.state.value === 0 ? "gold" : "green" ;
    }

    valueFormat() {
        return this.state.value === 0 ? "Zero" : this.state.value;
      }
}
let styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop : 25 ,

        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    } , 
    eachBox :{
        marginRight : 15 ,
    } ,

});


export default Counter;