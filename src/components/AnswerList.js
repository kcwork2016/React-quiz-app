import React, { PropTypes } from 'react';
import AnswerItem from './AnswerItem';

const AnswerList = (props) => (
    <div className="answer-list">
        { ( ( ) =>
                    (
                        props.answerItems.map(( answerItem )) =>
                            <AnswerItem
                                key={  answerItem.answerID  }
                                { ...answerItem }
                            />
                    )
            ))()}
    </div>
);

export default AnswerList;