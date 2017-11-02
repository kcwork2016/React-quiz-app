import React, { PropTypes } from 'prop-types';
import AnswerItem from './AnswerItem';

const AnswerItemList = (props) => (
    <div className="answer-item-list">
        { ( ( ) =>
                    (
                        props.answerItems.map(( answerItem ) =>
                            <AnswerItem
                                key={  answerItem.answerID  }
                                { ...answerItem }
                            />
                    )
            ) ) ( ) }
    </div>
);

AnswerItemList.propTypes = {
    answerItems: propTypes.array
};

export default AnswerItemList;