import React, { Component } from 'react';
import  { PropTypes } from 'prop-types';
import Question from '../components/Question';
import quizReducer from '../reducers/quizReducer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';




export default class Quiz extends Comment {
    constructor(props) {
        super(props);
        this.state = {
            answerCounter: 0,
            correctsAnswer: 0,
            errorsAnswer: 0,
            //add state val
        };
        //function goes here
        this.handleRadioOnClick = this.handleRadioOnClick.bind(this);
        this.handleNextOnClick = this.handleNextOnClick.bind(this);
        this.handleFinishOnClick = this.handleFinishOnClick.bind(this);
    }

    render( ) {
        const {  questionID, questionTitle, selectionItems,   isLastPage } = this.props;

        return (
            <div className="quiz-container">
                        <Question
                            questionID={ 12 }
                            questionTitle={ "11" }
                            isLastPage={ false }
                        />

            </div>
        );
    }
}


const defaultQuizState = {
    questionID: '1',
    questionTitle: 'xx',
    selectionItems: [
        {
            selectionItemID:'2',
            selectionItemBody:'assdsd'
        }
    ],
    isLastPage: false
};


function mapStateToProps(state) {
    return {
    }
    // const {  questionID, questionTitle, selectionItems,   isLastPage  } = state.quizReducer;
    // return {
    //     questionID,
    //     questionTitle,
    //     selectionItems,
    //     isLastPage
    // }
}



Quiz.propTypes = {
    questionID: PropTypes.number,
    questionTitle: PropTypes.string,
    selectionItems: PropTypes.array,
    isLastPage: PropTypes.bool
};

//export default class Quiz;