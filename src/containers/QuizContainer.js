import React, { Component, PropTypes } from 'react';


class QuizContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
                counter: 0,
                corrects: 0,
                errors: 0
                //add state val
        };
        this.handleNextOnClick = this.handleNextOnClick.bind(this);
        this.handleFinishOnClick = this.handleFinishOnClick.bind(this);
    }
}
// functions goes here
    handleNextOnClick( ) {

}
    handleFinishOnClick( ) {

}


render( )
{
    const {  } = this.props;

    return (
      <div>

      </div>
    );
}

