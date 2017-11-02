import React, { PropTypes } from 'prop-types';
import SelectionItem from './SelectionItem';

const SelectionItemList = (props) => (
    <div className="selection-item-list">
        { ( ( ) =>
                    (
                        props.SelectionItems.map(( SelectionItem ) =>
                            <SelectionItem
                                key={  SelectionItem.selectionItemID  }
                                { ...SelectionItem }
                            />
                    )
            ) ) ( ) }
    </div>
);

SelectionItemList.propTypes = {
    SelectionItems: propTypes.array
};

export default SelectionItemList;