import React from 'react';
import { PropTypes } from 'prop-types';
import SelectionItem from './SelectionItem';

export default  function SelectionItemList (props) {
    const {selectionItemID, selectionItemName, handleSelectionItemOnClick} = props;
    return (
        <div className="selection-item-list">

            <SelectionItem
                selectionItemID = { 1 }
                selectionItemName= {"Selection 1"}
                onClick={ () => handleSelectionItemOnClick() }
             />

            <SelectionItem
                selectionItemID = { 2 }
                selectionItemName= {"Selection 2"}
                onClick={ () => handleSelectionItemOnClick() }
            />

            <SelectionItem
                selectionItemID = { 3 }
                selectionItemName= {"Selection 3"}
                onClick={ () => handleSelectionItemOnClick() }
            />

            <SelectionItem
                selectionItemID = { 4 }
                selectionItemName= {"Selection 4"}
                onClick={ () => handleSelectionItemOnClick() }
            />
        </div>
    );
}