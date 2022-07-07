import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";

const posts = [
  {
    id: "0",
    description: "Beatyfull Land",
    imageLink: ""
  },
  {
    id: "1",
    description: "Beatyfull Land",
    imageLink: ""
  },
  {
    id: "2",
    description: "Beatyfull Land",
    imageLink: ""
  }
]


class Main extends Component
{
  render()
  {
    return <div>
      <Title title={"MyAPP"}/>
      <PhotoWall posts={posts}/>
    </div>
  }
}

export default Main
