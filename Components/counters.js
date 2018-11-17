import React, { Component } from 'react';
import {Button , View , Text } from 'react-native';
import Counter from './counter';



class Counters extends Component {
    state = {
        counters: [
          { id: 0, value: 0 },
          { id: 1, value: 0 },
          { id: 2, value: 0 },
          { id: 3, value: 11 },
          { id: 4, value: 22 },

        ]
      };
    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }
    render() { 
        return ( 
            <View>
                {this.state.counters.map(counter => (
                        <Counter 
                        key={counter.id}
                        value={counter.value}
                        id={counter.id}
                        onDelete={this.handleDelete}
                        selcted={true}
                        />
                ))}
            </View>
         );
    }
}
 
export default Counters;