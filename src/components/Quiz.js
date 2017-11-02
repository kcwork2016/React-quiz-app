import React from 'react';
import { Button, Radio } from 'react-bootstrap';
import Answer from './AnswerItem';

//quiz will act as a group for the Radio buttons

const Quize = (props) => {
    const { questionID, questionName, answerID, answerBody  } = props;
    return (
        <div className={ questionID }>
            <Answer />
        </div>
    );


};