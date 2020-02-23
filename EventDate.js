import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Event from './Event.js';

export default class EventDate extends React.Component {
  render() {
    const now = new Date();

    const today = now.getUTCFullYear() + "-" + (now.getUTCMonth() + 1) + "-" + now.getUTCDate();

    // yesterday is now - 24 hours (in milliseconds)
    const y = new Date(now.getTime() - 86400000);
    const yesterday = y.getUTCFullYear() + "-" + (y.getUTCMonth() + 1) + "-" + y.getUTCDate();

    let day = this.props.data.date;
    if (today === day) day = "Today"
    else if (yesterday === day) day = "Yesterday";

    return (
      <View>
        <Text style={styles.date}>{day}</Text>
        {
          this.props.data.events.map(event => {
            return <Event event={event}/>
          })
        }
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  date: {
    fontSize: 15,
    paddingTop: 3,
    paddingBottom: 3,
    fontWeight: 'bold',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
