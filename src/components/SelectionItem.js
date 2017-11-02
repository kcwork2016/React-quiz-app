import React from 'react';
import  { PropTypes } from 'prop-types';
import { Radio } from 'react-bootstrap';

const SelectionItem = (props) => {
    const { selectionItemID, selectionItemName, handleSelectionItemOnClick } = props;
    return (
        <div className={ "answer"+selectionItemID }
            >
            <div>
                <Radio
                    type="radio"
                    value ="on"
                    id={ selectionItemID }
                    checked={ "" }
                    onClick={ () => handleSelectionItemOnClick( ) }
                >{ selectionItemName }</Radio>

            </div>
        </div>
    );
};

SelectionItem.propTypes = {
    selectionItemID: PropTypes.number,
    selectionItemName: PropTypes.string,
    handleSelectionItemOnClick: PropTypes.func
};

export default SelectionItem;