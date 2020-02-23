import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Event extends React.Component {
  render() {
    const date = new Date(this.props.event.date);

    return (
      <View style={this.style()}>
        <Text style={styles.emotionDate}>{date.toLocaleString('en-US')}</Text>
        <Text style={styles.emotionName}>{this.props.event.emotion}</Text>
        <Text style={styles.emotionNote}>{this.props.event.note}</Text>
      </View>
    )
  } 

  style() {
    return {
      // TODO: color must be choosen based on the emotion and the rate!
      backgroundColor: 'red',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    }
  }
}

const styles = StyleSheet.create({
  emotionDate: {
    fontSize: 12,
  },
  emotionName: {
    fontSize: 20,
  },
  emotionNode: {
  },
});

