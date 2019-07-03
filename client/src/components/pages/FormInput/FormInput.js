
import React, { Component } from 'react';


export default class Landing extends Component {
	
	
	render() {
		
		
		return (
            <div>
                <div className="container">
                   <form>
                    <p>When</p>
                    <input
                    type="date"
                    ></input>
                    <p>Time</p>
                    <input
                    type="time"
                    ></input>
                    <button>Submit</button>
                    </form> 
                </div>
                
           
            </div>
            
		);
	}
}