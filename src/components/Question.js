import React from 'react';
import { PropTypes } from 'prop-types';
import { Breadcrumb, BreadcrumbItem, Button, Grid, Row, Col } from 'react-bootstrap';
import SelectionItemList from './SelectionItemList';
import classNames from 'classnames';

const Question = (props) => {
    const { questionID, questionName, SelectionItemList,  correctAnswer, isLastPage,
        handleNextOnClick, handleFinishOnClick } = props;

    return (
        <Grid>
            <Row className="show-grid">
                <Col>
                    <div>
                        <Breadcrumb id={ questionID }>
                            <BreadcrumbItem active>
                                <a> { questionID } </a>
                                <a> {
                                //questionName
                                    "Question Title Header"
                                } </a>
                            </BreadcrumbItem>
                        </Breadcrumb>

                        <SelectionItemList />

                        <div>
                            {
                                //display on every page except the last page
                                }
                            <Button
                                bsStyle="primary"
                                bsSize="small"
                                type="button"
                                onClick={ () => props.handleNextOnClick(  ) } >
                                Next</Button>
                            {
                                //only display on last page
                                //!!!add condition if user is in last page
                            }
                            <Button
                                bsStyle="success"
                                bsSize="small"
                                hiddent = { !isLastPage }
                                type="button"
                                onClick={ () => props.handleFinishOnClick( ) } >
                                Finish</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    );
};

Question.propTypes = {
    isLastPage: PropTypes.bool,
    selectionItems: PropTypes.array,
    questionID: PropTypes.number,
    questionName: PropTypes.string,
    handleNextOnClick: PropTypes.func,
    handleFinishOnClick: PropTypes.func,
    handleRadioOnClick: PropTypes.func
};

export default Question;