import React from 'react';
import { PropTypes } from 'prop-types';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import SelectionItemList from './SelectionItemList';

const Question = (props) => {
    const { questionID, questionTitle } = props;
    return (
        <div>
            <Breadcrumb id={ questionID }>
                <BreadcrumbItem active>
                    <a> { questionID } </a>
                    <a>{ questionTitle }</a>
                </BreadcrumbItem>
            </Breadcrumb>

            <SelectionItemList/>
        </div>
    );
};

Question.propTypes = {
    questionID: PropTypes.number,
    questionTitle: PropTypes.string,
    handleRadioOnClick: PropTypes.func
};