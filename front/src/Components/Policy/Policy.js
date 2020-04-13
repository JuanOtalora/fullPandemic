import React from 'react';
import Politician from './img/politician.png'
import './Policy.css'
import checked from './img/checked.png'
import unChecked from './img/unChecked.png'
import ribbon from './img/ribbon.png'

const Policy = (props) =>{

	let checkButton1 = <img alt="unChecked-icon" className="checkMark" src={unChecked}/>;

	if(props.policyList[0].enacted){
		checkButton1 = <img alt="checked-icon" className="checkMark" src={checked}/>
	}else{
		checkButton1 = <img alt="unChecked-icon"  className="checkMark" src={unChecked}/>
	}

	let checkButton2 = <img alt="unChecked-icon"  className="checkMark" src={unChecked}/>;

	if(props.policyList[1].enacted){
		checkButton2 = <img alt="checked-icon" className="checkMark" src={checked}/>
	}else{
		checkButton2 = <img alt="unChecked-icon"  className="checkMark" src={unChecked}/>
	}

	let checkButton3 = <img alt="unChecked-icon"  className="checkMark" src={unChecked}/>;

	if(props.policyList[2].enacted){
		checkButton3 = <img alt="checked-icon" className="checkMark" src={checked}/>
	}else{
		checkButton3 = <img alt="unChecked-icon"  className="checkMark" src={unChecked}/>
	}


	return(
		<div className="policy">
			<div className="bribePolitician">
				<img alt="politician-icon" className="pixelPolitician" src={Politician}/>
				<p className='descriptionH'>The Policy tab shows the policies you may enact, policies have costs that have to be balanced!</p>
			</div>
			<div className="policyList">
				<div className="policyButtons">
					<h1 className="titleP">Policy List:</h1>
					<div className="onePolicy">
						<div className='policyTitleDiv'>
							<img alt="ribbon-icon" className='policyRibbon' src={ribbon} />
							<h3 className="policyTitle">{props.policyList[0].name}:</h3>
						</div>
						<button onClick={() => props.changePolicyState(0)} className="policyButton">
							<p className="policyDescription">{props.policyList[0].effect}</p>
							{checkButton1}
						</button>
					</div>
					<div className="onePolicy">
						<div className='policyTitleDiv'>
							<img alt="ribbon-icon" className='policyRibbon' src={ribbon} />
							<h3 className="policyTitle">{props.policyList[1].name}:</h3>
						</div>
						<button onClick={() => props.changePolicyState(1)} className="policyButton">
							<p className="policyDescription">{props.policyList[1].effect}</p>
							{checkButton2}
						</button>
					</div>
					<div className="onePolicy">
						<div className='policyTitleDiv'>
							<img alt="ribbon-icon" className='policyRibbon' src={ribbon} />
							<h3 className="policyTitle">{props.policyList[2].name}:</h3>
						</div>
						<button onClick={() => props.changePolicyState(2)} className="policyButton">
							<p className="policyDescription">{props.policyList[2].effect}</p>
							{checkButton3}
						</button>
					</div>
					<div className="onePolicy">
						<div className='policyTitleDiv'>
							<img alt="ribbon-icon" className='policyRibbon' src={ribbon} />
							<h3 className="policyTitle">{props.policyList[3].name}:</h3>
						</div>
						<button onClick={()=> props.donateMoney()} className="policyButton">
							<p className="policyDescription">{props.policyList[3].effect} cost: {props.policyList[3].cost}$</p>
						</button>
					</div>
					
				</div>
			</div>
		</div>
	);
}

export default Policy;