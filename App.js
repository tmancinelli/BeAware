import React from 'react';
import { AsyncStorage } from 'react-native';
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import EventDate from './EventDate.js';

// Our states:
// - starting: when the app starts.
const STARTING = 0;
const READY = 1;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // states of our app.
    this.state = {
      state: STARTING,
      events: [],
    }
  }

  // This function is called when the this class is actually used.
  async componentDidMount() {
    let events = await AsyncStorage.getItem('events');
    // No events yet!
    if (events === null) {
      // TODO: demo... let's create a fake event!
      events = [
        {
          date: '2020-2-22',
          events: [{
            emotion: 'happyness',
            date: 1582389699669,
            rate: 5,
            note: 'Finché la barca va...',
          },
          {
            emotion: 'happyness',
            date: 1582389699669,
            rate: 5,
            note: 'Finché la barca va...',
          }]
        },
        {
          date: '2020-2-21',
          events: [{
            emotion: 'happyness',
            date: 1582389699669,
            rate: 5,
            note: 'Finché la barca va...',
          }]
        },
        {
          date: '2020-2-20',
          events: [{
            emotion: 'happyness',
            date: 1582389699669,
            rate: 5,
            note: 'Finché la barca va...',
          }]
        }
      ];
    }

    this.setState({
      state: READY,
      events: events,
    });
  }

  render() {
    let body;

    if (this.state.state === STARTING) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Be aware of your emotions</Text> 
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Be aware of your emotions</Text> 

        <ScrollView>
          {
            this.state.events.map(data => {
              return <EventDate data={data} />
            })
          }
        </ScrollView>

        <View style={styles.footer}>
          <Button
             style={styles.addButton}
             title="Add emotion"
             color="fuchsia"
             onPress={() => this.addEmotion() } />
        </View>
      </View>
    );
  }

  addEmotion() {
    console.log("CLICK!");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    paddingTop: 40,
    backgroundColor: 'powderblue',
    paddingBottom: 10,
  },
  footer: {
    backgroundColor: 'powderblue',
  },
  addButton: {
  }
});
