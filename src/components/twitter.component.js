import React, { Component } from 'react';
import axios from 'axios';

class Twitter extends Component {

    

    async componentDidMount(){
        this.onSubmit()
        console.log("ComponentdidMount ran")
    }

    onSubmit() {
       

        axios.post('https://y-budge2.herokuapp.com/twitter') //'http://localhost:5000/twitter')
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