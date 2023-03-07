import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  updateCount = e => {
if(e === 'Good'){
  this.setState({ good: this.state.good + 1 });
}else if(e === 'Neutral'){
  this.setState({neutral: this.state.neutral + 1})
}else if(e === 'Bad'){
  this.setState({bad: this.state.bad + 1})
}
  }
countTotalFeedback = () => {
  let total = this.state.good + this.state.neutral + this.state.bad
  return total 
}

countPositiveFeedbackPercentage = () => {
  let positiveFeedback = ((this.state.good / countTotalFeedback()) * 100)
}

render(){
  return(
  <div
  style={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101',
  }}>
       <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.countTotalFeedback}
          />{' '}
        </Section>
        <Section title="Statistics">
          {this.updateCount() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.updateCount()}
              positivePercentage={this.positiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
  </div>
  )
}
};
