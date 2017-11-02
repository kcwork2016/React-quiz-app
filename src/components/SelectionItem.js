import React from 'react';
import  { PropTypes } from 'prop-types';
import { Radio } from 'react-bootstrap';

const SelectionItem = (props) => {
    const { selectionItemID, selectionItemBody, handleSelectionItemOnClick } = props;
    return (
        <div
            className={"answer"+selectionItemID}
            >
                <Radio
                    value={ selectionItemID }
                    checked={ true }
                    onClick={ () => handleSelectionItemOnClick( ) }
                />{ selectionItemBody }<Radio/>

        </div>
    );
};

SelectionItem.propTypes = {
    selectionItemID: PropTypes.number,
    selectionItemBody: PropTypes.string,
    handleSelectionItemOnClick: PropTypes.func
};