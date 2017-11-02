import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

class QuizStore {

    quiz =
        [
            { answerCounter: 0, correctsAnswer: 0, errorsAnswer: 0 },
        ];

    questions =
        [
            { questionID: 1, questionName:"Mock question 1",
                SelectionItemList: [
                    { selectionItemID: 1, selectionItemName: "test answer number 1" },
                    { selectionItemID: 2, selectionItemName: "test answer number 2" },
                    { selectionItemID: 3, selectionItemName: "test answer number 3" },
                    { selectionItemID: 4, selectionItemName: "test answer number 4" },
                ],
                correctAnswer:2,
                isLastPage: false },


            { questionID: 2, questionName:"Mock question 2",
                SelectionItemList: [
                    { selectionItemID: 1, selectionItemName: "test answer number 1" },
                    { selectionItemID: 2, selectionItemName: "test answer number 2" },
                    { selectionItemID: 3, selectionItemName: "test answer number 3" },
                    { selectionItemID: 4, selectionItemName: "test answer number 4" },
                ],
                correctAnswer:1,
                isLastPage: false },


            { questionID: 3, questionName:"Mock question 3",
                SelectionItemList: [
                    { selectionItemID: 1, selectionItemName: "test answer number 1" },
                    { selectionItemID: 2, selectionItemName: "test answer number 2" },
                    { selectionItemID: 3, selectionItemName: "test answer number 3" },
                    { selectionItemID: 4, selectionItemName: "test answer number 4" },
                ],
                correctAnswer:3,
                isLastPage: false },

            { questionID: 4, questionName:"Mock question 4",
                SelectionItemList: [
                    { selectionItemID: 1, selectionItemName: "test answer number 1" },
                    { selectionItemID: 2, selectionItemName: "test answer number 2" },
                    { selectionItemID: 3, selectionItemName: "test answer number 3" },
                    { selectionItemID: 4, selectionItemName: "test answer number 4" },
                ],
                correctAnswer:4,
                isLastPage: true }
        ];
}
