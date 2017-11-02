import React, { Component } from 'react';
import  { PropTypes } from 'prop-types';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import SelectionItemList from '../components/SelectionItemList';
import Question from '../components/Question';
import classNames from 'classnames';


class Quiz extends Comment {
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
        const { QuizID, QuizTitle, isLastPage } = this.props;

        return (
            <div>
                <Breadcrumb id={ QuizID }>
                    <BreadcrumbItem active>
                        <a> { QuizID } </a>
                        <a>{ QuizTitle }</a>
                    </BreadcrumbItem>
                </Breadcrumb>

                <AnswerItemList/>


                <div className="button-group">

                    //display on every page except the last page
                    <Button
                        type="button"
                        color="primary"
                        onClick={ () => handleNextOnClick(  ) } >
                        Next</Button>

                    //only display on last page
                    //!!!add condition if user is in last page
                    <Button
                        hiddent = { !isLastPage }
                        type="button"
                        color="success"
                        onClick={ () => handleFinishOnClick( ) } >
                        Finish</Button>

                </div>


            </div>
        );
    }
}

Quiz.propTypes = {
    QuizID: PropTypes.number,
    QuizTitle: PropTypes.string,
    isLastPage: PropTypes.bool
};

export default class Quiz;