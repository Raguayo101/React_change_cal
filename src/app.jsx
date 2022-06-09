import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      total: 0,
      twenties:0,
      tens:0,
      fives:0,
      ones:0,
      quarters:0,
      dimes:0,
      nickles:0,
      pennies:0,
      change: 0,
      moreDue: false,
    }

  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  calculate() {
    let changeLeft = (this.state.amountReceived * 100) - (this.state.amountDue * 100);
    if (changeLeft < 0) {
      this.setState({
        moreDue: true,
      });
      return;
    }
    this.setState({ change: (changeLeft / 100).toFixed(2) });
    let twenty = Math.floor(changeLeft / 2000);
    changeLeft -= twenty * 2000;
    let ten = Math.floor(changeLeft / 1000);
    changeLeft -= ten * 1000;
    let five = Math.floor(changeLeft / 500);
    changeLeft -= five * 500;
    let one = Math.floor(changeLeft / 100);
    changeLeft -= one * 100;
    let quarter = Math.floor(changeLeft / 25);
    changeLeft -= quarter * 25;
    let dime = Math.floor(changeLeft / 10);
    changeLeft -= dime * 10;
    let nickel = Math.floor(changeLeft / 5);
    changeLeft -= nickel * 5;
    let penny = Math.floor(changeLeft / 1);

    this.setState({
      moreDue: false,
      twenties: twenty,
      tens: ten,
      fives: five,
      ones: one,
      quarters: quarter,
      dimes: dime,
      nickels: nickel,
      pennies: penny,
    });
  }

  render() {
    return (
    <div className="container">
        <div className="pb-2 mt-4 mb-2 border-bottom text-white">
          <h1>Change Calculator</h1>
        </div>
        <div className="row mt-4">
          <div className="col-4">
            <div className="card">
              <div className="card-header">Enter Information</div>
              <div className="card-body d-flex flex-column">
                <label className="fw-bold" htmlFor="amount-due">How much is due?</label>
                <input className="my-2" type="number" name="amountDue" id="amount-due" defaultValue={this.amountDue} onChange={e => this.handleChange(e)}></input>
                <label className="fw-bold" htmlFor="amount-received">How much was received?</label>
                <input className="my-2" type="number" name="amountReceived" id="amount-received" defaultValue={this.amountReceived} onChange={e => this.handleChange(e)}></input>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary w-100" onClick={()=> this.calculate()}>Calculate</button>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card">
              <div className="card-body text-center">
                <div className={ `alert alert-${this.state.moreDue ? 'warning' : 'success'}` } role='alert'>
                     { this.state.moreDue ? 'Additional money owed.' : (`The total change due is $${this.state.change}`) }
                </div>
                <div className="row">
                  <div className="m-3 p-4 col bg-light border border-3 rounded">
                    <h5>Twenties</h5>
                    <h5 className="change text-muted" id="twenty-output">{this.state.twenties}</h5>
                  </div>
                  <div className="m-3 p-4 col bg-light border border-3 rounded">
                    <h5>Tens</h5>
                    <h5 className="change text-muted" id="ten-output">{ this.state.tens }</h5>
                  </div>
                  <div className="m-3 p-4 col bg-light border border-3 rounded">
                    <h5>Fives</h5>
                    <h5 className="change text-muted" id="five-output">{ this.state.fives }</h5>
                  </div>
                  <div className="m-3 p-4 col bg-light border border-3 rounded">
                    <h5>Ones</h5>
                    <h5 className="change text-muted" id="one-output">{ this.state.ones }</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="m-3 p-4 col bg-light border border-3 rounded">
                    <h5>Quarters</h5>
                    <h5 className="change text-muted" id="quarters-output">{ this.state.quarters }</h5>
                  </div>
                  <div className="m-3 p-4  col bg-light border border-3 rounded">
                    <h5>Dimes</h5>
                    <h5 className="change text-muted" id="dimes-output">{ this.state.dimes }</h5>
                  </div>
                  <div className="m-3 p-4 col bg-light border border-3 rounded">
                    <h5>Nickels</h5>
                    <h5 className="change text-muted" id="nickels-output">{ this.state.nickles }</h5>
                  </div>
                  <div className="m-3 p-4 col bg-light border border-3 rounded">
                    <h5>Pennies</h5>
                    <h5 className="change text-muted" id="pennies-output">{ this.state.pennies }</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </div>

    )
  }
}

export default App;
