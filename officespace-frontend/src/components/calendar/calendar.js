import React, { Component } from 'react';




import Calendar from 'react-calendar'
import './calendar.css';


class CalendarCard extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div className="card">
        <div className="border-card">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        </div>
      </div>

    );
  }
}
export default CalendarCard;