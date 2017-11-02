import React from 'react';
import { PropTypes } from 'prop-types';
import SelectionItem from './SelectionItem';

export default  function SelectionItemList (props) {
    const {selectionItemID, selectionItemBody, handleSelectionItemOnClick} = props;
    return (
        <div className="selection-item-list">
            <SelectionItem
                selectionItemID = { 1 }
                selectionItemBody= {"xxxxx"}
                onClick={ () => handleSelectionItemOnClick() }
             />
            <SelectionItem
                selectionItemID = { 2 }
                selectionItemBody= {"xxxxx"}
                onClick={ () => handleSelectionItemOnClick() }
            />
            <SelectionItem
                selectionItemID = { 3 }
                selectionItemBody= {"xxxxx"}
                onClick={ () => handleSelectionItemOnClick() }
            />
            <SelectionItem
                selectionItemID = { 4 }
                selectionItemBody= {"xxxxx"}
                onClick={ () => handleSelectionItemOnClick() }
            />
        </div>
    );
}