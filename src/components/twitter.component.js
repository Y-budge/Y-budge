import React, { Component } from 'react';
import axios from 'axios';

class Twitter extends Component {

    

    async componentDidMount(){
        this.onSubmit()
        console.log("ComponentdidMount ran")
    }

    onSubmit() {
       

        axios.post('http://localhost:5000/twitter')
        .then(res => console.log(res.data))


    }

    render() {
        return(
            <div>
                This is the twitter page.
            </div>
        )
    }
}

export default Twitter;