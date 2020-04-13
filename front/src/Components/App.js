import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Tabs from './Tabs/Tabs.js';
import Money from './Money/Money.js';
import Health from './Health/Health.js';
import Policy from './Policy/Policy.js';
import Labs from './Labs/Labs.js';

class App extends React.Component {
  
  state={
    numberInfected: 1,
    modalAbout: false,
    usdPerSec: 0,
    productionBonus: 1,
    day: 1,
    placeHolderfundingLabs: 0,
    fundingLabs: 0,
    month: 1,
    passiveCure: 0,
    year: 2020,
    activeTab: 0,
    unrest: 0,
    passiveUnrest: 0,
    infectionRateBonus: 1,
    totalPopulation: 7794798739,
    numberDeaths: 0,
    money: 0,
    username: '',
    labsUnlocked: false,
    infectionRate: 0.20,
    progressPercentage: 0,
    deathPercentage: 5,
    modalLogin: false,
    moneyBuildings: [
      {
        id: 0,
        name: 'GoFundMe Donations',
        number: 0,
        usdPerSec: 0.1,
        description: 'Get donations from all over the world, but try not to scam them.',
        cost: 10
      },
      {
        id: 1,
        name: 'TikTok Influencers',
        number: 0,
        usdPerSec: 1,
        description: 'Have influencers sell the importance of Coronavirus for you.',
        cost: 100
      },
      {
        id: 2,
        name: 'Online Concert',
        number: 0,
        usdPerSec: 10,
        description: 'We are helping the world!',
        cost: 1100
      },
      {
        id: 3,
        name: 'Oil Export',
        number: 0,
        usdPerSec: 100,
        description: 'Oil is now Cheap! Use it to cook some stuff',
        cost: 10000
      },
      {
        id: 4,
        name: 'PornTube',
        number: 0,
        usdPerSec: 1000,
        description: 'Mike now has a beefy right arm',
        cost: 130000
      },
      {
        id: 5,
        name: 'Freemium Game',
        number: 0,
        usdPerSec: 10000,
        description: 'I swear its only Cosmetic!',
        cost: 1000000
      }
    ],
    infectionBuildings: [
      {
        id: 0,
        name: 'Soap Factory',
        number: 0,
        infectivityRate: 0.00001,
        description: 'Get your cheap soap only $99,99.',
        cost: 1000
      },
      {
        id: 1,
        name: 'Gas Masks Factory',
        number: 0,
        infectivityRate: 0.00002,
        description: 'Im sure a piece of cloth will work the same!',
        cost: 10000
      },
      {
        id: 2,
        name: 'Hospitals',
        number: 0,
        infectivityRate: 0.001,
        description: 'Im sure we dont need to fund medicine we are fine!',
        cost: 100000
      }
    ],
    policyList:[
      {
        id: 0,
        name: 'Social Distance',
        effect: 'Cuts in half Infection Rate, but starts generating unRest in your population',
        unrestAdd: 5,
        passiveUnrest: 0.1,
        production: 0,
        infectionRateBonus: -0.5,
        enacted: false,
        cost: 0  
      },
      {
        id: 1,
        name: 'HyperConectivity',
        effect: 'Doubles Infection Rate and creates passiveUnrest, but doubles production of all buildings',
        unrestAdd: 0,
        passiveUnrest: 0.5,
        production: 1,
        infectionRateBonus: 1,
        enacted: false,
        cost: 0 
      },
      {
        id: 2,
        name: 'Testing On Humans',
        effect: 'Doubles all Research but generates inmense unRest',
        unrestAdd: 20,
        passiveUnrest: 2.5,
        production: 0,
        infectionRateBonus: 1,
        enacted: false,
        cost: 0  
      },
      {
        id: 3,
        name: 'Donate Money',
        effect: 'Give money to the people to lower 20 Unrest',
        unrestAdd: -20,
        passiveUnrest: 0,
        production: 0,
        infectionRateBonus: 1,
        enacted: false,
        cost: 1000000 
      }
    ]
  }

 


  componentDidMount(){
    fetch("/getUser")
      .then(res => res.json())
      .then(user => this.setUser(user))

    setInterval(()=>{
        this.changeMoney(this.state.usdPerSec * this.state.productionBonus)
      }, 1000);
    setInterval(()=>{
      this.changeDate()
      let diceRoll = Math.floor((Math.random() * 6) + 1)
      if(diceRoll < 6){
        this.setState(prevState => {
          let numberInfected = prevState.numberInfected;
          numberInfected += (numberInfected * this.state.infectionRate) * this.state.infectionRateBonus
          return{
            numberInfected : numberInfected
          }
        })
      }
      this.deathCount()
      this.unrestCount()
      this.passiveCure()
    }, 10000)
  }

  passiveCure = () =>{
    this.setState(prevState =>{
      let progress = prevState.progressPercentage + prevState.passiveCure
      return{
        progressPercentage: progress
      }
    })
  }

  setUser =(user)=>{
    this.setState(prevState=> {
      return{
        username: user
      }
    })
  }


  changeMoney = (delta) => {
    this.setState(prevState => {
      let money = prevState.money + delta;
      return{
        money: money
      }
    });
  }

  changeDate = () => {
    this.setState(prevState =>{
      let dayReset = prevState.day
      let monthReset = prevState.month
      let yearReset = prevState.year
      if(prevState.day === 30){
        dayReset = 1;
        if(prevState.month === 12){
          monthReset = 1;
          yearReset += 1;
        }else{
          monthReset++
        }
      }else{
        dayReset++;
      }
      return{
        day: dayReset,
        month: monthReset,
        year: yearReset
      }
    })
  }

  donateMoney = () =>{
    this.setState(prevState=>{
      let money = prevState.money
      let newCost = prevState.policyList[3].cost;
      let unRest = prevState.unrest;
      let updatedPolicies = [...prevState.policyList];
      let updatedPolicy = {...prevState.policyList[3]};
      if(prevState.money >= prevState.policyList[3].cost){
        money -= prevState.policyList[3].cost;
        newCost = newCost * 1.15;
        updatedPolicy.cost = newCost;
        if(unRest < 20){
          unRest = 0;
        }else{
          unRest -= 20;
        }
      }else{
        console.log('Not enough funds')
      }
      updatedPolicies[3] = updatedPolicy;
      return{
        money: money,
        unrest: unRest,
        policyList: updatedPolicies

      }
    })
  }

  deathCount = () =>{
    if(this.state.day === 15 || this.state.day === 1){
    this.setState(prevState => {
      let newDeaths = 0;
      let infection = prevState.numberInfected;
      newDeaths = prevState.numberDeaths + prevState.numberInfected * 0.03;
      infection -= newDeaths;
      return{
        numberDeaths: newDeaths,
        numberInfected: infection
      }
      })
    }
  }

  unrestCount = ()=>{
    this.setState(prevState=>
    {
      let newUnrest = prevState.unrest + prevState.passiveUnrest
      return{
        unrest: newUnrest
      }
    })
  }


  buyBuilding = (id) =>{
    this.setState(prevState => {
      if(this.state.money >= prevState.moneyBuildings[id].cost){
        let minusMoney = -prevState.moneyBuildings[id].cost;
        let updatedBuildings = [...prevState.moneyBuildings];
        let updatedBuilding = {...prevState.moneyBuildings[id]};
        updatedBuilding.number++;
        let cost = prevState.moneyBuildings[id].cost * 0.15;
        let realCost = Math.floor(cost);
        updatedBuilding.cost += realCost;
        updatedBuildings[id] = updatedBuilding;
        let usdPerSecNew = 0;
        for (var i = 0; i < updatedBuildings.length; i++) {
          usdPerSecNew += updatedBuildings[i].usdPerSec * updatedBuildings[i].number
        }
        return{
          moneyBuildings: updatedBuildings,
          money:  prevState.money + minusMoney,
          usdPerSec: usdPerSecNew
        }
      }else{
        console.log('You dont have enough money to buy this building')
      }
    })

  }

  changeActiveTab = (idTab) =>{
    this.setState(prevState =>{
      prevState.activeTab = idTab;
      return { activeTab: prevState.activeTab}
    })
  }


  save = () => {
    const currentGameState = this.state
    const gameStateString = JSON.stringify(currentGameState) // 
    localStorage.setItem('gameState', gameStateString)
    console.log("Game Saved!")
  }

  loadGame = () => {
    const previousGameJsonString = localStorage.getItem('gameState')
    const stateToObject = JSON.parse(previousGameJsonString)
    // Check this
    this.setState(stateToObject) 
    console.log("Game Loaded!")
  }


  buyBuildingInfection = (idInfectionB) =>{
    this.setState(prevState => {
      if(this.state.money >= prevState.infectionBuildings[idInfectionB].cost){
        let minusMoney = -prevState.infectionBuildings[idInfectionB].cost;
        let updatedBuildings = [...prevState.infectionBuildings];
        let updatedBuilding = {...prevState.infectionBuildings[idInfectionB]};
        updatedBuilding.number++;
        let cost = prevState.infectionBuildings[idInfectionB].cost * 0.15;
        let realCost = Math.floor(cost);
        updatedBuilding.cost += realCost;
        updatedBuildings[idInfectionB] = updatedBuilding;
        let changeInInfectivity = 0;
        for (let i = 0; i < prevState.infectionBuildings.length; i++) {
          changeInInfectivity += prevState.infectionBuildings[i].infectivityRate * updatedBuildings[i].number;
        }
        return{
          infectionBuildings: updatedBuildings,
          money:  prevState.money + minusMoney,
          infectionRate: prevState.infectionRate - changeInInfectivity
        }
      }else{
        console.log('You dont have enough money to buy this building')
      }
    })

  }



  changePolicyState = (idPolicy) =>{
    this.setState(prevState => {
      let policyChange = !prevState.policyList[idPolicy].enacted;
      let updatedPolicies = [...prevState.policyList];
      let updatedPolicy = {...prevState.policyList[idPolicy]};
      let unrestNew = prevState.unrest;
      let unrestNewPassive = prevState.passiveUnrest;
      let newProductionBonus = prevState.productionBonus;
      let newInfectionBonus = prevState.infectionRateBonus;
      updatedPolicy.enacted = policyChange;
      updatedPolicies[idPolicy] = updatedPolicy;
      if(updatedPolicy.enacted){
        unrestNew += updatedPolicy.unrestAdd
        unrestNewPassive += updatedPolicy.passiveUnrest
        newProductionBonus += updatedPolicy.production
        newInfectionBonus += updatedPolicy.infectionRateBonus
      }else{
        unrestNewPassive -= updatedPolicy.passiveUnrest
        newProductionBonus -= updatedPolicy.production
        newInfectionBonus = 1
      }
      return{
        policyList: updatedPolicies,
        unrest: unrestNew,
        passiveUnrest: unrestNewPassive,
        productionBonus: newProductionBonus,
        infectionRateBonus: newInfectionBonus
      }
    })
  }


  unlockLabs = () =>{
    this.setState(prevState=> {
      let labsUnlocked = false;
      let money = prevState.money
      if(prevState.money >= 1000000){
        labsUnlocked = true;
        money = prevState.money - 1000000;
      }else{
        console.log('Not Enough money')
      }
      return{
        labsUnlocked: labsUnlocked,
        money: money
      }

    })
  }

  changeLabFunding = (delta)=>{
    this.setState(prevState => {
      let placeHolderChange = prevState.placeHolderfundingLabs;
      if(placeHolderChange + delta > prevState.usdPerSec){
        placeHolderChange = prevState.usdPerSec;
      }else{
        placeHolderChange += delta;
      }
      if(placeHolderChange + delta < 0){
        placeHolderChange = 0;
      }
      return{
        placeHolderfundingLabs: placeHolderChange
      }
    })

  }

  giveFunds = () => {
    this.setState(prevState => {
      let change = prevState.placeHolderfundingLabs;
      let things = 0;
      if(change > prevState.fundingLabs){
        things = change - prevState.fundingLabs
      }else{
        things = prevState.fundingLabs - change
      }
      let usdPerSecChange = prevState.usdPerSec;
      if(change === 0){
        usdPerSecChange += prevState.fundingLabs;
      }else if(prevState.fundingLabs > change){
        console.log('entra', things)
        usdPerSecChange += things;
      }else if(prevState.fundingLabs < change){
        usdPerSecChange -= things;
        console.log('entraMenos', things)
      }
      let fundingLabsC = change;
      let passiveGain = prevState.passiveCure;
      if(fundingLabsC > 0){
        passiveGain = change/10000;
      }else if(fundingLabsC === 0){
         passiveGain = 0;
      }
      return{
        fundingLabs: fundingLabsC,
        usdPerSec: usdPerSecChange,
        passiveCure: passiveGain
      } 
    })
  }

  changeModalAbout = () =>{
    this.setState(prevState=> {
      let changeState = !prevState.modalAbout
      return{
        modalAbout: changeState
      }
    })
  }

  changeModalLogin = () =>{
    this.setState(prevState=> {
      let changeState = !prevState.modalLogin
      return{
        modalLogin: changeState
      }
    })
  }



  render(){
    let tab = <Money clickMoney={this.changeMoney}
          buyBuilding={this.buyBuilding}
          moneyBuildings={this.state.moneyBuildings}/>;

    if (this.state.activeTab === 0) {
      tab = <Money 
          money={this.state.money}
          usdPerSec={this.state.usdPerSec}
          clickMoney={this.changeMoney}
          buyBuilding={this.buyBuilding}
          moneyBuildings={this.state.moneyBuildings}/>;
    } else if(this.state.activeTab === 1) {
      tab = <Health 
            healthBuildings={this.state.infectionBuildings}
            buyBuildingInfection={this.buyBuildingInfection}
            />;
    }else if(this.state.activeTab === 2){
      tab = <Policy 
            policyList={this.state.policyList}
            changePolicyState={this.changePolicyState}
            donateMoney={this.donateMoney}
            />
    }else if(this.state.activeTab === 3){
      tab = <Labs 
            labsUnlocked={this.state.labsUnlocked}
            placeHolderfundingLabs={this.state.placeHolderfundingLabs}
            unlockLab={this.unlockLabs}
            usdPerSec={this.state.usdPerSec}
            fundingLabs={this.state.fundingLabs}
            passiveCure={this.state.passiveCure}
            changeLabFunds={this.changeLabFunding}
            giveFunds={this.giveFunds}
            />
    }

    let openAbout = 'closed'
    if(this.state.modalAbout){
      openAbout = 'open'
    }else{
      openAbout = 'closed'
    }

    let openLogin = 'closed'
    if(this.state.modalLogin){
      openLogin = 'open'
    }else{
      openLogin = 'closed'
    }

    return (
      <div className="App">
        <Header
        changeModalLogin={this.changeModalLogin}
        changeModalAbout={this.changeModalAbout}
        infectionRateBonus={this.state.infectionRateBonus}
        saveGame={this.save}
        loadGame={this.loadGame}
        unrest={this.state.unrest}
        infectionRate={this.state.infectionRate}
        day={this.state.day}
        month={this.state.month}
        year={this.state.year}
        numberInfected={this.state.numberInfected}
        numberDeaths={this.state.numberDeaths}
        money={this.state.money}
        progressPercentage={this.state.progressPercentage}
        />
        <div className="colorMiddle"></div>
        <Tabs 
        changeActiveTab={this.changeActiveTab}
        activeTabId={this.state.activeTab}
        />
        {tab}
        <div className={openAbout}>
          <div className='mainModal'>
            <h1>About</h1>
            <p className="margin">You are the leader of the world! Cool!... Save as many people while researching a cure! Start with generating money and read the description of all the different tabs</p>
            <p className="marginT">This game was made with much love, but now people all over the world need love and help if you enjoyed the journey consider donating to the any of the following links:</p>
            <a rel="noopener noreferrer" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate" target="_blank" className="marginT">World Health Organization</a>
            <button className='buttonCloseModal' onClick={()=> this.changeModalAbout()}>Close</button>
          </div>
        </div>
        <div className={openLogin}>
          <div className='mainModal'>
            <form action="/login" method="post">
              <div>
                  <label>Username:</label>
                  <input type="text" name="username"/><br/>
                  </div>
                  <div>
                    <label>Password:</label>
                    <input type="password" name="password"/>
                  </div>
                  <div>
                  <input type="submit" value="Submit"/>
              </div>
              <button className='buttonCloseModal' onClick={()=> this.changeModalAbout()}>Close</button>
            </form>
            </div>
        </div>
      </div>
    );
  }

}

export default App;
