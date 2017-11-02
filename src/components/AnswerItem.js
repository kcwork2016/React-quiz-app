import React from 'react';
import { Radio } from 'react-bootstrap';

export default function Question (props) {
    const { answerID, answerBody } = props;
    return (
        <div>
            <Radio value={answerID}
            />
            <a>
                { answerBody }
            </a>
        </div>
    );
}