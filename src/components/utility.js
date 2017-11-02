import React from 'react';
import { Button } from 'reactstrap';


export default (props) => {
    return (
        <div>
        // display on last page
        <Button color="success">Finish</Button>

        //display on every page except the last page
        <Button color="primary">Next</Button>


        </div>
    );
};
