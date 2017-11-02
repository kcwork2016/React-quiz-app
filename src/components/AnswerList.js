import React from 'react';
import { Radio } from 'react-bootstrap';
import AnswerItem from './AnswerItem';

const AnswerList = (props) => (
    <div className="AnswerList">
        {(() =>
            (
                props.answerItem.map((answerItem)) =>
                    <AnswerItem
                        key={ answerItem. }
                        {...answerItem}
                    />
            )
            ))()}
    </div>
);