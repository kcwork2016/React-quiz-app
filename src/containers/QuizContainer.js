import React, { Component } from 'react';
import  { PropTypes } from 'prop-types';
import Question from '../components/Question';
import quizReducer from '../reducers/quizReducer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';




export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answerCounter: 0,
            correctsAnswer: 0,
            errorsAnswer: 0,
            //add state val
        };
        //function goes here
        // this.handleRadioOnClick = this.handleRadioOnClick.bind(this);
        // this.handleNextOnClick = this.handleNextOnClick.bind(this);
        // this.handleFinishOnClick = this.handleFinishOnClick.bind(this);
    }

    render( ) {
        const {  questionID, questionName, selectionItems,   isLastPage } = this.props;

        return (
            <div className="quiz-container">
                        {/*<Question*/}
                            {/*questionID={ 1 }*/}
                            {/*questionName={ "" }*/}
                            {/*isLastPage={ false }*/}
                        {/*/>*/}

                <Question />
            </div>
        );
    }
}


// const defaultQuizState = {
//     questionID: '',
//     questionName: '',
//     selectionItems: [
//         {
//             selectionItemID:'',
//             selectionItemName:''
//         }
//     ],
//     isLastPage: false
// };


function mapStateToProps(state) {
    return {
    }
    // const {  questionID, questionName, selectionItems,   isLastPage  } = state.quizReducer;
    // return {
    //     questionID,
    //     questionName,
    //     selectionItems,
    //     isLastPage
    // }
}



Quiz.propTypes = {
    questionID: PropTypes.number,
    questionName: PropTypes.string,
    selectionItems: PropTypes.array,
    isLastPage: PropTypes.bool
};
