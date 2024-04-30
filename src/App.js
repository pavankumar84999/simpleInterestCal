import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    amount: '',
    interest: '',
    date: '',
    isResultShowing: false,
    result: 0,
  }

  calcualteRate = () => {
    const {amount, interest, date} = this.state
    const presentDate = new Date()
    const selectedDate = new Date(date)
    const days = Math.round((selectedDate - presentDate) / (1000 * 3600 * 24))
    const simpleIntrest = ((amount * days * interest) / 100) * (1 / 365)
    const convertInt = Number(amount) + Number(simpleIntrest.toFixed(2))
    this.setState({isResultShowing: true, result: convertInt})
  }

  readFormData = event => {
    event.preventDefault()
    const {amount, interest, date} = this.state
    if (amount !== '' && interest !== '' && date !== '') {
      if (amount >= 0 && interest >= 0) {
        this.calcualteRate()
      }
    }
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  getInterest = event => {
    this.setState({interest: event.target.value})
  }

  getPeriod = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {isResultShowing, result} = this.state
    return (
      <div className="bgContainer">
        <form className="formContainer" onSubmit={this.readFormData}>
          <h1 className="MainHeading">Simple Interest Calculator</h1>
          <div className="eachInputDiv">
            <label htmlFor="principal amount" className="labelItem">
              principal amount
            </label>
            <br />
            <input
              type="number"
              className="eachInput"
              placeholder="Enter Amount"
              id="principal amount"
              onChange={this.getAmount}
            />
          </div>
          <div className="eachInputDiv">
            <label htmlFor="principal amount" className="labelItem">
              interest rate
            </label>
            <br />
            <input
              type="number"
              className="eachInput"
              placeholder="Enter interest"
              id="principal amount"
              onChange={this.getInterest}
            />
          </div>
          <div className="eachInputDiv">
            <label htmlFor="time period" className="labelItem">
              time period
            </label>
            <br />
            <input
              type="date"
              className="eachInput"
              placeholder="Enter timePeriod"
              id="time period"
              onChange={this.getPeriod}
            />
          </div>
          <div className="buttonContainer">
            <button type="submit" className="calculateButton">
              Calculate Simple Interest
            </button>
          </div>
          <h1 className="simpleIntrestResult">
            Simple Intrest : {isResultShowing && <span>{result} /-</span>}
          </h1>
        </form>
      </div>
    )
  }
}

export default App
