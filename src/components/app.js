import React, { Component } from "react";
import Cardlist from "./cardlist";
import { robots } from "./robots";
import Searchbox from "./SearchBox";
import Scroll from './scroll';

import "./app.css";

class App extends Component {
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
    }
  render(){
    const filteredRobots=this.state.robots.filter(robot=>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
            <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
};

export default App;
