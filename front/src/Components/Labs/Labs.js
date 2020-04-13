import React from 'react';
import './Lab.css';
import LabsDoor from './img/labDoors.png';
import labsUnlocked from './img/labUnlocked.png';

const Labs = (props) => {

	let imgLab = <img alt="labDoorClosed-icon" className="labDoors" src={LabsDoor}/>
	let differentComponent = <button onClick={()=> props.unlockLab()} className="buyLabs">Unlock Labs Cost: $1,000,000</button>
	if(props.labsUnlocked){
		imgLab = <img alt="labDoorUnlocked-icon" className="labUn" src={labsUnlocked}/>
		differentComponent =
		<div>
			<h1 className="titleB">Funding:</h1>
			<p className="descriptionL">Select the funding you wish to give to your labs</p>
			<p className="descriptionL">Available USD per Sec: {props.usdPerSec}</p>
			<div className="changeFunds">
				<button onClick={()=> props.changeLabFunds(-1)} className="minus">&#60;</button>
				<span className="fund">{props.placeHolderfundingLabs} <span className="minor">Usd per sec</span></span>
				<button onClick={()=> props.changeLabFunds(1)} className="minus">&#62;</button>
			</div>
			<p className="descriptionL">You are giving {props.fundingLabs} usdPerSec for labs at the moment</p>
			<p className="descriptionL">Generating {props.passiveCure}% daily </p>
			<p className="descriptionL">Every 1 USD per sec you give contributes to 0.00001%  of daily progress</p>
			<button onClick={()=> props.giveFunds()} className="buttonFunds">Give Funds</button>
		</div>
	}



	return(
		<div className="lab">
			<div className="labButton">
				{imgLab}
				<p className='descriptionH'>To begin to research the cure you must first unlock labs and then give money to funding</p>
			</div>
			<div className="funding">
				{differentComponent}
			</div>
		</div>
	);


}

export default Labs;