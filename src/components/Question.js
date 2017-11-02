import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

import AnswerList from './AnswerItemList';


export default function Question (props) {
    const { questionID, questionTitle } = props;
    return (
        <div>
            <Breadcrumb id={ questionID }>
                <BreadcrumbItem active>
                    <a> { questionID } </a>
                    <a>{ questionTitle }</a>
                </BreadcrumbItem>
            </Breadcrumb>

            <AnswerList/>


        </div>
    );
}