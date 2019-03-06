import React, {useState} from 'react';
import { connect } from "react-redux";
import mapDispatchToProps from "../Actions/actionCreators";
import ListGroup from 'react-bootstrap/ListGroup';
import "../App.css";

let Level10 = (props) => {
  
  let [drink1] = useState("Ramos Gin Fizz");
  let [drink2] = useState("Mojito");
  let [drink3] = useState("Long Island Ice Tea");

  let drinkArray = [drink1, drink2, drink3];
  let randomDrink = drinkArray[Math.floor(drinkArray.length * Math.random())]
  
    return (
      <div>
        <h1>I would like a {randomDrink} please</h1>
      
      <div className="container">
        
          <ListGroup>
            <b>Liquor</b>
            {props.ingredients.liquor.map((liquor, i) => <ListGroup.Item action key={i} value={liquor}>{liquor}</ListGroup.Item>)}
          </ListGroup>
          

         
          <ListGroup>
            <b>Liqeur</b>
            {props.ingredients.liquer.map((liquer, i) => <ListGroup.Item action key={i} value={liquer}>{liquer}</ListGroup.Item>)}
          </ListGroup>
          

         
          <ListGroup>
            <b>Mixers</b>
          {props.ingredients.mixers.map((mixers, i) => <ListGroup.Item action key={i} value={mixers}>{mixers}</ListGroup.Item>)}
          </ListGroup>

          <ListGroup>
            <b>Garnishes</b>
          {props.ingredients.garnishes.map((garnishes, i) => <ListGroup.Item action key={i} value={garnishes}>{garnishes}</ListGroup.Item>)}
          </ListGroup>
         
        </div>
        </div>
    )
  }

  const mapStateToProps = (state) => ({
    isGameStarted: state.isGameStarted,
    ingredients: state.ingredients
  
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Level10);