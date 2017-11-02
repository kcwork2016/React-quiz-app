import React from 'react';
import { PropTypes } from 'prop-types';
import { Breadcrumb, BreadcrumbItem, Button } from 'react-bootstrap';
import SelectionItemList from './SelectionItemList';
import classNames from 'classnames';

const Question = (props) => {
    const { questionID, questionTitle, handleNextOnClick, handleFinishOnClick, isLastPage } = props;
    return (
        <div>
            <Breadcrumb id={ questionID }>
                <BreadcrumbItem active>
                    <a> { questionID } </a>
                    <a>{ questionTitle }</a>
                </BreadcrumbItem>
            </Breadcrumb>

            <SelectionItemList ></SelectionItemList>

            <div>
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
};

Question.propTypes = {
    isLastPage: PropTypes.bool,
    selectionItems: PropTypes.array,
    questionID: PropTypes.number,
    questionTitle: PropTypes.string,
    handleNextOnClick: PropTypes.func,
    handleFinishOnClick: PropTypes.func,
    handleRadioOnClick: PropTypes.func
};

export default Question;