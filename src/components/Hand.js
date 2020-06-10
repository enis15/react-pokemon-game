import React, { Component } from "react";
import Card from "./Card";
import "../css/Hand.css";
import charmander from "../Images/charmander.png";
import eeve from "../Images/eeve.png";
import gengar from "../Images/gengar.png";
import jigglypuff from "../Images/jigglypuff.png";
import metapod from "../Images/metapod.png";
import pikachu from "../Images/pikachu.png";
import squirtle from "../Images/squirtle.png";
import butterfree from "../Images/butterfree.png";
import vaporeon from "../Images/vaporeon.png";

class Hand extends Component {
  pokemons = [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      exp: 62,
      src: charmander,
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      exp: 63,
      src: squirtle,
    },
    {
      id: 3,
      name: "Metapod",
      type: "bug",
      exp: 72,
      src: metapod,
    },
    {
      id: 4,
      name: "Butterfree",
      type: "flying",
      exp: 178,
      src: butterfree,
    },
    {
      id: 5,
      name: "Pikachu",
      type: "electric",
      exp: 112,
      src: pikachu,
    },
    {
      id: 6,
      name: "Jigglypuff",
      type: "normal",
      exp: 95,
      src: jigglypuff,
    },
    {
      id: 7,
      name: "Gengar",
      type: "poison",
      exp: 225,
      src: gengar,
    },
    {
      id: 8,
      name: "Eeve",
      type: "normal",
      exp: 65,
      src: eeve,
    },

    {
      id: 9,
      name: "Vaporeon",
      type: "water",
      exp: 166,
      src: vaporeon,
    },
  ];

  getRandomPokemon() {
    let id = Math.floor(Math.random() * 9);
    return this.pokemons[id];
  }

  render() {
    const numberOfCards = 4;
    let chosenPokemons = [];

    function exists(pokemon) {
      for (let i = 0; i < chosenPokemons.length; i++) {
        if (pokemon.id === chosenPokemons[i].id) {
          return true;
        }
      }
      return false;
    }

    for (let i = 0; i < numberOfCards; i++) {
      let theNextPokemon = this.getRandomPokemon();
      if (!exists(theNextPokemon)) {
        chosenPokemons.push(theNextPokemon);
      } else {
        i--;
      }
    }

    function getExp() {
      return (
        chosenPokemons[0].exp +
        chosenPokemons[1].exp +
        chosenPokemons[2].exp +
        chosenPokemons[3].exp
      );
    }

    this.props.total(getExp());

    return (
      <div className="hand">
        {/* <p id="exp">Total Experience : {getExp()}</p> */}
        <br></br>
        <Card
          name={chosenPokemons[0].name}
          type={chosenPokemons[0].type}
          exp={chosenPokemons[0].exp}
          src={chosenPokemons[0].src}
        />
        <Card
          name={chosenPokemons[1].name}
          type={chosenPokemons[1].type}
          exp={chosenPokemons[1].exp}
          src={chosenPokemons[1].src}
        />
        <Card
          name={chosenPokemons[2].name}
          type={chosenPokemons[2].type}
          exp={chosenPokemons[2].exp}
          src={chosenPokemons[2].src}
        />
        <Card
          name={chosenPokemons[3].name}
          type={chosenPokemons[3].type}
          exp={chosenPokemons[3].exp}
          src={chosenPokemons[3].src}
        />
      </div>
    );
  }
}

export default Hand;
