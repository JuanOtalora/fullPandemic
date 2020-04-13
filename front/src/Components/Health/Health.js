import React from 'react';
import './Health.css'
import hospital from './img/hospital.png'

const Health = (props) =>{

	return(
		<div className="totalHealth">
			<div className="cureClick">
				<img alt="hospital-icon" className="hospital" src={hospital}/>
				<p className='descriptionH'>The Health tab shows the buildings you may buy to lower Infection Rate, remember ALWAYS USE SOAP</p>
			</div>
			<div className="cureBuildings">
				<h1 className="titleB">Health Providers:</h1>
				<div className="divider">
					<button onClick={() => props.buyBuildingInfection(0)} className="building" >
						<span/>
						<div className="insideBuilding">
							<h3>{props.healthBuildings[0].name}</h3>
							<span className="cost">$ {props.healthBuildings[0].cost}</span>
						</div>
						<h2 className="bigNumber">{props.healthBuildings[0].number}</h2>
						<div className='tooltip'>
							<div className='titleTool'>
								<span/>
								<h1 className="tooltipTitle">{props.healthBuildings[0].name}</h1>
							</div>
							<p>"{props.healthBuildings[0].description}"</p>
							<ul>
								<li>Each {props.healthBuildings[0].name} is reducing {props.healthBuildings[0].infectivityRate}</li>
								<li>{props.healthBuildings[0].number} {props.healthBuildings[0].name} reducing:  {(props.healthBuildings[0].infectivityRate * props.healthBuildings[0].number).toFixed(1)} Infection Rate per Day</li>
							</ul>
						</div>
					</button>
				</div>
				<div className="divider">
					<button onClick={() => props.buyBuildingInfection(1)} className="building" >
						<span/>
						<div className="insideBuilding">
							<h3>{props.healthBuildings[1].name}</h3>
							<span className="cost">$ {props.healthBuildings[1].cost}</span>
						</div>
						<h2 className="bigNumber">{props.healthBuildings[1].number}</h2>
						<div className='tooltip'>
							<div className='titleTool'>
								<span/>
								<h1 className="tooltipTitle">{props.healthBuildings[1].name}</h1>
							</div>
							<p>"{props.healthBuildings[1].description}"</p>
							<ul>
								<li>Each {props.healthBuildings[1].name} is reducing {props.healthBuildings[1].infectivityRate}</li>
								<li>{props.healthBuildings[1].number} {props.healthBuildings[1].name} reducing:  {(props.healthBuildings[1].infectivityRate * props.healthBuildings[1].number).toFixed(1)} Infection Rate per Day</li>
							</ul>
						</div>
					</button>
				</div>
				<div className="divider">
					<button onClick={() => props.buyBuildingInfection(2)} className="building" >
						<span/>
						<div className="insideBuilding">
							<h3>{props.healthBuildings[2].name}</h3>
							<span className="cost">$ {props.healthBuildings[2].cost}</span>
						</div>
						<h2 className="bigNumber">{props.healthBuildings[2].number}</h2>
						<div className='tooltip'>
							<div className='titleTool'>
								<span/>
								<h1 className="tooltipTitle">{props.healthBuildings[2].name}</h1>
							</div>
							<p>"{props.healthBuildings[2].description}"</p>
							<ul>
								<li>Each {props.healthBuildings[2].name} is reducing {props.healthBuildings[2].infectivityRate}</li>
								<li>{props.healthBuildings[2].number} {props.healthBuildings[2].name} reducing:  {(props.healthBuildings[2].infectivityRate * props.healthBuildings[2].number).toFixed(1)} Infection Rate per Day</li>
							</ul>
						</div>
					</button>
				</div>
			</div>
		</div>
	);

}

export default Health;