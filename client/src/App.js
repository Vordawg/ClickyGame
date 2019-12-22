import React, { Component } from "react";
import { Thumbnail } from "./components";
import { Score } from "./components";

class App extends Component {

  state = {
    tiles: [
      "/images/bebestevens.png",
      "/images/pippirrup.png",
      "/images/buttersstotch.png",
      "/images/stanmarsh.png",
      "/images/clydedonovan.png",
      "/images/tokenblack.png",
      "/images/craigtucker.png",
      "/images/tweektweak.png",
      "/images/ericcartman.png",
      "/images/wendytestaburger.png",
      "/images/kennymccormick.png",
      "/images/kylebroflovski.png"
    ],
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };

  clickedTiles = [];

  handleTileClick = (evt) => {
    console.log(evt);
    const clickedTile = evt.target.src;
    const shuffled = this.state.tiles.sort(() => 0.5 - Math.random());

    if (this.clickedTiles.includes(clickedTile)) {
      const badmessage = "You guessed incorrectly!";
      this.setState({
        score: 0,
        message: badmessage,
        tiles: shuffled
      });
      this.clickedTiles.length = 0;
      console.log("Error: already clicked, score: ", this.state.score);
      return;
    }

    const newScore = this.state.score + 1;
    const topScore = newScore > this.state.topScore ? newScore : this.state.topScore;
    this.clickedTiles.push(clickedTile);

    const goodmessage = "You guessed correctly!";

    this.setState({
      tiles: shuffled,
      score: newScore,
      topScore: topScore,
      message: goodmessage
    });
  }

  render() {
    return (
      < div className="App" >
        <Score score={this.state.score} topScore={this.state.topScore} message={this.state.message} />
        {
          this.state.tiles.map((tile, idx) =>
            <Thumbnail src={tile} key={idx} onClick={this.handleTileClick} />
          )
        }
      </div >
    );
  }
}

export default App;
