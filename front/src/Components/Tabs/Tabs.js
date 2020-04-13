import React from 'react';
import './Tabs.css'
import PolicyTab from './img/policyTab.png'
import PillTab from './img/pill.png'
import MoneyTab from './img/moneyBag.png'
import LabTab from './img/labTab.png'

const Tabs = (props) =>{
	let tab1 =	'inActive'
	let tab2 =	'inActive'
	let tab3 = 'inActive'
	let tab4 = 'inActive'
	if (props.activeTabId === 0) {
		tab1 = 'activeM'
		tab2 =	'inActive'
		tab3 = 'inActive'
		tab4 = 'inActive'
	}else if(props.activeTabId === 1){
		tab1 = 'inActive'
		tab2 =	'activeH'
		tab3 = 'inActive'
		tab4 = 'inActive'
	}else if(props.activeTabId === 2){
		tab1 = 'inActive'
		tab2 =	'inActive'
		tab3 = 'activeP'
		tab4 = 'inActive'
	}else{
		tab4 = 'activeH'
		tab1 = 'inActive'
		tab2 = 'inActive'
		tab3 = 'inActive'
	}
	return(
		<div className="tabs">
			<button className="buttonTab" className={tab1} onClick={()=> props.changeActiveTab(0)}>
				<img alt="money-icon" className="iconTabM" src={MoneyTab} />
				<p className="iconP">Money Tab</p>
			</button>
			<button className="buttonTab" className={tab2} onClick={()=> props.changeActiveTab(1)}>
				<img alt="health-icon" className="iconTab" src={PillTab} />
				<p className="iconP">Health Tab</p>
			</button>
			<button className="buttonTab" className={tab3} onClick={()=> props.changeActiveTab(2)}>
				<img alt="policy-icon" className="iconTab" src={PolicyTab} />
				<p className="iconP">Policy Tab</p>
			</button>
			<button className="buttonTab" className={tab4} onClick={()=> props.changeActiveTab(3)}>
				<img alt="lab-icon" className="iconTabL" src={LabTab} />
				<p className="iconP">Lab Tab</p>
			</button>
		</div>
	);


}

export default Tabs;