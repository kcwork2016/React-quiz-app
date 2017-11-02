import React from 'react';
import  { PropTypes } from 'prop-types';
import { ProgressBar } from 'react-bootstrap';

const Result = (props) => {
    const {  answerCounter, correctsAnswer, errorsAnswer } = props;
    return (
        <div className={ "quiz-result" } >
            <div>
                <h3>Number of question you had answered: </h3>
                <ProgressBar
                    className="progress-answerCounter"
                    bsStyle="info" now={ answerCounter }
                />
                <h3>Number of question you had answered correctly: </h3>
                <ProgressBar
                    className="progress-correctsAnswer"
                    bsStyle="success" now={ correctsAnswer }
                />
                <h3>Number of question you had answered incorrectly: </h3>
                <ProgressBar
                    className="progress-errorsAnswer"
                    bsStyle="danger" now={ errorsAnswer } />
            </div>
        </div>
    );
};

SelectionItem.propTypes = {
    answerCounter: PropTypes.number,
    correctsAnswer: PropTypes.number,
    errorsAnswer: PropTypes.number
};

export default Result;