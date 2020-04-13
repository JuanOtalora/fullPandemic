import React from 'react';
import './Money.css'
import moneyTree from './img/moneyTree.png'

const Money = (props) => {


	return(
		<div className="totalMoney">
			<div className="moneyClick">
				<button className="mainButton" onClick={() => props.clickMoney(1)}>		
					<h1 className="moneyPer">Money per Second: {props.usdPerSec.toFixed(1)}</h1>
					<img alt="moneyTree" className="moneyTree" src={moneyTree}/>
					<h2>Money Doesn't grow on trees except for you! Click the tree for more money</h2>
				</button>
			</div>
			<div className="moneyBuildings">
				<h1 className="titleB">Money Generators:</h1>
				<div className="divider">
					<button disabled={props.moneyBuildings[0].cost > props.money} className="building" onClick={() => props.buyBuilding(0)}>
						<span/>
						<div className="insideBuilding">
							<h3>{props.moneyBuildings[0].name}</h3>
							<span className="cost">$ {props.moneyBuildings[0].cost}</span>
						</div>
						<h2 className="bigNumber">{props.moneyBuildings[0].number}</h2>
						<div className='tooltip'>
							<div className='titleTool'>
								<span/>
								<h1 className="tooltipTitle">{props.moneyBuildings[0].name}</h1>
							</div>
							<p>"{props.moneyBuildings[0].description}"</p>
							<ul>
								<li>Each {props.moneyBuildings[0].name} is producing {props.moneyBuildings[0].usdPerSec}</li>
								<li>{props.moneyBuildings[0].number} {props.moneyBuildings[0].name} producing:  {(props.moneyBuildings[0].usdPerSec * props.moneyBuildings[0].number).toFixed(1)} USD per second</li>
							</ul>
						</div>
					</button>
				</div>
				<div className="divider">
					<button disabled={props.moneyBuildings[0].cost > props.money} className="building" onClick={() => props.buyBuilding(1)}>
						<span/>
						<div className="insideBuilding">
							<h3>{props.moneyBuildings[1].name}</h3>
							<span className="cost">$ {props.moneyBuildings[1].cost}</span>
						</div>
						<h2 className="bigNumber">{props.moneyBuildings[1].number}</h2>
						<div className='tooltip'>
							<div className='titleTool'>
								<span/>
								<h1 className="tooltipTitle">{props.moneyBuildings[1].name}</h1>
							</div>
							<p>"{props.moneyBuildings[1].description}"</p>
							<ul>
								<li>Each {props.moneyBuildings[1].name} is producing {props.moneyBuildings[1].usdPerSec}</li>
								<li>{props.moneyBuildings[1].number} {props.moneyBuildings[1].name} producing:  {(props.moneyBuildings[1].usdPerSec * props.moneyBuildings[1].number).toFixed(1)} USD per second</li>
							</ul>
						</div>
					</button>
				</div>
				<div className="divider">
					<button disabled={props.moneyBuildings[0].cost > props.money} className="building" onClick={() => props.buyBuilding(2)}>
						<span/>
						<div className="insideBuilding">
							<h3>{props.moneyBuildings[2].name}</h3>
							<span className="cost">$ {props.moneyBuildings[2].cost}</span>
						</div>
						<h2 className="bigNumber">{props.moneyBuildings[2].number}</h2>
						<div className='tooltip'>
							<div className='titleTool'>
								<span/>
								<h1 className="tooltipTitle">{props.moneyBuildings[2].name}</h1>
							</div>
							<p>"{props.moneyBuildings[2].description}"</p>
							<ul>
								<li>Each {props.moneyBuildings[2].name} is producing {props.moneyBuildings[2].usdPerSec}</li>
								<li>{props.moneyBuildings[2].number} {props.moneyBuildings[2].name} producing:  {(props.moneyBuildings[2].usdPerSec * props.moneyBuildings[2].number).toFixed(1)} USD per second</li>
							</ul>
						</div>
					</button>
				</div>
				<div className="divider">
					<button disabled={props.moneyBuildings[0].cost > props.money} className="building" onClick={() => props.buyBuilding(3)}>
						<span/>
						<div className="insideBuilding">
							<h3>{props.moneyBuildings[3].name}</h3>
							<span className="cost">$ {props.moneyBuildings[3].cost}</span>
						</div>
						<h2 className="bigNumber">{props.moneyBuildings[3].number}</h2>
						<div className='tooltip'>
							<div className='titleTool'>
								<span/>
								<h1 className="tooltipTitle">{props.moneyBuildings[3].name}</h1>
							</div>
							<p>"{props.moneyBuildings[3].description}"</p>
							<ul>
								<li>Each {props.moneyBuildings[3].name} is producing {props.moneyBuildings[3].usdPerSec}</li>
								<li>{props.moneyBuildings[3].number} {props.moneyBuildings[3].name} producing:  {(props.moneyBuildings[3].usdPerSec * props.moneyBuildings[3].number).toFixed(1)} USD per second</li>
							</ul>
						</div>
					</button>
				</div>
				<div className="divider">
					<button disabled={props.moneyBuildings[0].cost > props.money} className="building" onClick={() => props.buyBuilding(4)}>
						<span/>
						<div className="insideBuilding">
							<h3>{props.moneyBuildings[4].name}</h3>
							<span className="cost">$ {props.moneyBuildings[4].cost}</span>
						</div>
						<h2 className="bigNumber">{props.moneyBuildings[4].number}</h2>
						<div className='tooltip'>
							<div className='titleTool'>
								<span/>
								<h1 className="tooltipTitle">{props.moneyBuildings[4].name}</h1>
							</div>
							<p>"{props.moneyBuildings[4].description}"</p>
							<ul>
								<li>Each {props.moneyBuildings[4].name} is producing {props.moneyBuildings[4].usdPerSec}</li>
								<li>{props.moneyBuildings[4].number} {props.moneyBuildings[4].name} producing:  {(props.moneyBuildings[4].usdPerSec * props.moneyBuildings[4].number).toFixed(1)} USD per second</li>
							</ul>
						</div>
					</button>
				</div>
				<div className="divider">
					<button disabled={props.moneyBuildings[0].cost > props.money} className="building" onClick={() => props.buyBuilding(5)}>
						<span/>
						<div className="insideBuilding">
							<h3>{props.moneyBuildings[5].name}</h3>
							<span className="cost">$ {props.moneyBuildings[5].cost}</span>
						</div>
						<h2 className="bigNumber">{props.moneyBuildings[5].number}</h2>
						<div className='tooltip'>
							<div className='titleTool'>
								<span/>
								<h1 className="tooltipTitle">{props.moneyBuildings[5].name}</h1>
							</div>
							<p>"{props.moneyBuildings[5].description}"</p>
							<ul>
								<li>Each {props.moneyBuildings[5].name} is producing {props.moneyBuildings[5].usdPerSec}</li>
								<li>{props.moneyBuildings[5].number} {props.moneyBuildings[5].name} producing:  {(props.moneyBuildings[5].usdPerSec * props.moneyBuildings[5].number).toFixed(1)} USD per second</li>
							</ul>
						</div>
					</button>
				</div>
			</div>
		</div>
	);


}

export default Money;