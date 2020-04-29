import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const minDate = new Date(); // Today
    const maxDate = new Date(2099, 6, 3);

    return (
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          minDate={minDate}
          maxDate={maxDate}
          weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
          months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
          previousTitle="Anterior"
          nextTitle="Próximo"
          todayBackgroundColor="#009688"
          todayTextStyle={{color: '#FFF'}}
          selectedDayColor="#0288D1"
          selectedDayTextColor="#FFF"
          scaleFactor={400}
          textStyle={{
            color: '#000000',
          }}
          onDateChange={this.onDateChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 5
  },
});
