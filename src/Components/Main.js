import React, { Component } from "react";
import List from "./List";
import Title from "./Title";


class Main extends Component
{
  render()
  {
    return <div>
      <Title/>
      <List tasks = {['Angola', 'Cabo-Verde', 'Nigeria']}/>
    </div>
  }
}

export default Main
