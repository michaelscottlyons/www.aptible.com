import React, { Component } from 'react';
import RiskPresentation from '../presentation/Risk';
import { unAnsweredQuestions, scoreSection } from '../lib/scoring';
import QUIZ_DATA from '../../quiz_data.json';

class Risk extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static className() {
    return 'Risk';
  }

  recordAnswer = (question, answer) => {
    this.setState({ [question]: answer });
  }

  validate = () => {
    return unAnsweredQuestions(QUIZ_DATA.risk, this.state).length === 0;
  }

  onSubmit = () => {
    if (this.validate()) {
      this.props.nextStep(scoreSection('risk', QUIZ_DATA.risk, this.state));
    }
  }

  render() {
    return (
      <RiskPresentation
        questions={QUIZ_DATA.risk.questions}
        recordAnswer={this.recordAnswer}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default Risk;
