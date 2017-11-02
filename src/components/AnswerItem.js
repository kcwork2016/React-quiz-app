import React, { PropTypes } from 'prop-types';
import { Radio } from 'react-bootstrap';

const AnswerItem = (props) => {
    const { answerID, answerBody, handleRadioOnClick } = props;
    return (
        <div
            className={"answer"+answerID}
            >
                <Radio
                    value={ answerID }
                    checked={ true }
                    onClick={ () => handleRadioOnClick( ) }
                />{ answerBody }<Radio/>

        </div>
    );
};

AnswerItem.propTypes = {
    answerID: number,
    answerBody: string,
    handleRadioOnClick: PropTypes.func
};