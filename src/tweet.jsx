import React, { Component } from "react";

class Tweet extends Component {
  state = require('./fakeDatabase.json');

  handleData(){
  }

  getTime() {
    let d = Date.now();
    let r = this.state.time;
    let result = Math.round((d - r) / 1000);
    let output = '';
    if (result <= 59) {
        output = `${result}s`;
    }
    else if (result >= 60 && result <= 60*60) {
        output = `${Math.round(result/60)}m`;
    }

    else if (result > 60*60) {
        output = `${Math.round(result/60)}h`;
    }
    

    return output;
  }

  render() {
    return (
        
      <div className="container wrapper">
        <div className="row p-2">
          <div className="col-auto">
            <img className="prof_pic" src={this.state.profPicUrl} alt="" />
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-auto prof_name">{this.state.name}</div>
                  <div className="col-auto">@{this.state.user}</div>
                  <div className="col-auto">{this.getTime()}</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">{this.state.content}</div>
            </div>
            <div className="row">
              <div className="col">link</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tweet;
