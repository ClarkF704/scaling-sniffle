
import React, { Component } from 'react';
import './landing.css';
import bubble from '../../img/speech-bubble.png';
import add from '../../img/add.png';
import file from '../../img/file.png';
import lightning from '../../img/lightning.png';

export default class Landing extends Component {
	
	
	render() {
		
		
		return (
            <div>
                 <div className="jumbotron">
      <div className="container">
        <h1>Be the one.</h1>
        <p>Business configurations every 15 minutes.</p>
        <a href="#">Learn More</a>
      </div>
    </div>
    
    <div className="neighborhood-guides">
         <div className="container">
            <h2>Business Guides</h2>
            <p>Not sure what business to consider. We have YOUR back</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="thumbnail">
                    <img src={bubble} alt="speech" style={{width:'30px', height:'auto'}} />
                    </div>
                    <div className="thumbnail">
                    <img src={add} alt="add" style={{width:'30px', height:'auto'}} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumbnail">
                    <img src={file} alt="file" style={{width:'30px', height:'auto'}} />
                    </div>
                    <div className="thumbnail">
                    <img src={lightning} alt="lightning" style={{width:'30px', height:'auto'}} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumbnail">
                    <img src={lightning} alt="lightning" style={{width:'30px', height:'auto'}}/>
                    </div>
                </div>
            </div>
         </div>
    </div>
    

    <div className="learn-more">
	  <div className="container">
		<div className="row">
	      <div className="col-md-4">
			<h3>Safe</h3>
			<p>From apartments and rooms to treehouses and boats: stay in unique spaces in 192 countries.</p>
			<p><a href="#">See how to travel on Safe></a></p>
	      </div>
		  <div className="col-md-4">
			<h3>Sharp</h3>
			<p>Renting out your unused space could pay your bills or fund your next vacation.</p>
			<p><a href="#">Learn more about Sharp</a></p>
		  </div>
		  <div className="col-md-4">
			<h3>Trustworthy</h3>
			<p>From Verified ID to our worldwide customer support team, we've got your back.</p>
			<p><a href="#">Learn about trust at Trustworthy</a></p>
		  </div>
	    </div>
	  </div>
	</div>

            </div>
            
		);
	}
}