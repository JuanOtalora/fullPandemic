import React from 'react';
import './Header.css';
import money from './img/money.png';
import corona from './img/corona.png';
import death from './img/death.png';
import science from './img/science.png';
import unrest from './img/unrest.png';
import calendar from './img/calendar.png'
import icon from './img/icon.png'


const Header = (props) =>{

	return(
		<header className="main-header">
			<div className="divLogo">
				<div className="f">
					<img alt="icon" className='iconT' src={icon}/>
					<h1>PANDEMIC</h1>
				</div>
				<div>
					<button className="save" onClick={()=> props.saveGame()}>Save Game</button>
	        		<button className="save" onClick={()=> props.loadGame()}>Load Game</button>
	        		<button className='save' onClick={()=> props.changeModalAbout()}>About</button>
	        		<button className='save' onClick={()=> props.changeModalLogin()}>Login</button>
        		</div>
			</div>
			<div className="divStats">
				<div className="iconDiv">
					<img alt="money-icon" className="icon" src={money}/>
					<span>{Math.floor(props.money)} $ USD</span>
					<div className="headerTooltip">
						<p>US dollars</p>
					</div>
				</div>
				<div className="iconDiv">
					<img alt="corona-icon" className="icon" src={corona}/>
					<span>{Math.floor(props.numberInfected)} Infection Rate: {(props.infectionRate * 100 * props.infectionRateBonus).toFixed(2)}%</span>
					<div className="headerTooltip">
						<p>Number of people infected</p>
					</div>
				</div>
				<div className="iconDiv">
					<img alt="death-icon" className="icon" src={death}/>
					<span>{Math.floor(props.numberDeaths)}</span>
					<div className="headerTooltip">
						<p>Total Deaths</p>
					</div>
				</div>
				<div className="iconDiv">
					<img alt="progress-icon" className="icon" src={science}/>
					<span>{props.progressPercentage.toFixed(3)} %</span>
					<div className="headerTooltip">
						<p>Progress Cure</p>
					</div>
				</div>
				<div className="iconDiv">
					<img alt="unrest-icon" className="iconUn" src={unrest}/>
					<span>{props.unrest.toFixed(2)} %</span>
					<div className="headerTooltip">
						<p>Unrest</p>
					</div>
				</div>
				<div className="iconDiv">
					<img alt="calendar-icon" className="iconUn" src={calendar}/>
					<span className='margin'>{props.day}.</span>
					<span className='margin'>{props.month}.</span>
					<span >{props.year}</span>
					<div className="headerTooltip">
						<p>Date</p>
					</div>
				</div>
			</div>
		</header>
	);

}

export default Header;
