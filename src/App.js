/*import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './App.css';

let styles = {
  margin: 'auto',
  width: '300px'
};
let voteCountStyle = {
  display: 'flex',
  justify: 'center',
  align: 'center',
  padding: '0 5px'
};
let foodNameStyle = {
  width: '200px',
  display: 'flex',
  justify: 'center',
  align: 'center',
  padding: '0 5px'
};
let foodName2Style = {
  width: '100px',
  display: 'flex',
  justify: 'center',
  align: 'right',
  padding: '0 15px',
  background: 'yellow'
};

let myButtonStyle = {
  display: 'flex',
  /*justify: 'center',*/ /*
color: 'rgb(57, 116, 3)',

font: '20px',
/*    margin:10px;*/ /*
outline: 'none',
cursor: 'pointer',
padding: '0 5px'
};


class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    food: [
      { name: "Meatballs with potatoes", price: 50, votes: 0, amount: 0 },
      { name: "Spaghetti ", price: 60, votes: 0, amount: 0 },
      { name: "Pasta ", price: 70, votes: 0, amount: 0 },
      { name: "Pizza slice", price: 40, votes: 0, amount: 0 }
    ]
  }
}

vote(i) {
  let myChoice = [...this.state.food];
  myChoice[i].votes++;
  myChoice[i].amount = myChoice[i].price * myChoice[i].votes;
  this.setState({ food: myChoice });
}
unvote(i) {
  let myChoice = [...this.state.food];
  myChoice[i].votes--;
  myChoice[i].amount = myChoice[i].price * myChoice[i].votes;
  this.setState({ food: myChoice });
}


render() {
  return (
    <>
      <h2>Today's menu</h2>
      <div style={styles}>
        <Carousel>
          <div>
            <img src="https://thecozyapron.com/wp-content/uploads/2018/05/swedish-meatballs_thecozyapron_1.jpg" alt="Meatballs 40kr" />
            <p className="legend">Meatballs in a plate</p>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFnAV2zo8osLPZQR_46Npr7o5DjXSNunRQNltrNtxnANq_n0bV" alt="Spaghetti" />
            <p className="legend">Spaghetti of your choice</p>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShGOKLDo5ZYcOKmfDVoCRQdcSkFJZLLQ-1Z71L1Vv31RqTZhqZ" alt="Pasta" />
            <p className="legend">The best Pasta </p>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLn4ckA_tZJ2WQlKHy3WQYIlL0FHMAyVQ3o8Cl_QYoA1NsKC6s" alt="Pizza" />
            <p className="legend">Pizza slice</p>
          </div>
        </Carousel>
      </div>
      
      <div className="foodList">
      <div class="foodHead">
        <div style={foodNameStyle}>
          <h3>Name of item</h3>
        </div>
        <div style={foodNameStyle}>
          <h3>Price</h3>
        </div>
        <div style={foodNameStyle}>
          <h3>Quantity</h3>
        </div>
        <div>
          <h3>Amount</h3></div>
      </div>
        {
          this.state.food.map((option, i) =>
            <div class="foodItem" key={i} >
              <div style={foodNameStyle}>
                {option.name}
              </div>
              <div style={foodNameStyle}>
                {option.price}
              </div>
              <button style={myButtonStyle} onClick={this.vote.bind(this, i)}>+</button>
              <button style={myButtonStyle} onClick={this.unvote.bind(this, i)}>-</button>
              <div style={voteCountStyle}>
                {option.votes}
              </div>
              <div style={foodName2Style}>
                {option.amount}
              </div>
            </div>

          )
        }

      </div>

    </>
  )
}
}


export default App; */


/************************ */
/* new code begins */
/*************** */
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [
        { name: "Meatballs", price: 50, votes: 0, amount: 0 },
        { name: "Spaghetti ", price: 60, votes: 0, amount: 0 },
        { name: "Pasta ", price: 70, votes: 0, amount: 0 },
        { name: "Pizza slice", price: 40, votes: 0, amount: 0 }
      ]
    }
  }

  vote(i) {
    let myChoice = [...this.state.food];
    myChoice[i].votes++;
    if (myChoice[i].votes > 9) {
      alert('Sorry!! We do not accept more than 9 orders!!');
      myChoice[i].votes = 9;
    }
    myChoice[i].amount = myChoice[i].price * myChoice[i].votes;
    this.setState({ food: myChoice });
  }
  unvote(i) {
    let myChoice = [...this.state.food];
    myChoice[i].votes--;
    if (myChoice[i].votes < 0) {
      alert('Sorry!! You cannot reduce your order any further!!');
      myChoice[i].votes = 0;
    }
    myChoice[i].amount = myChoice[i].price * myChoice[i].votes;
    this.setState({ food: myChoice });
  }


  render() {
    return (
      <>
        <h2>Today's menu</h2>
        <div class="menuDisplay">
          <Carousel>
            <div>
              <img src="https://thecozyapron.com/wp-content/uploads/2018/05/swedish-meatballs_thecozyapron_1.jpg" alt="Meatballs 40kr" />
              <p className="legend">Meatballs in a plate</p>
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFnAV2zo8osLPZQR_46Npr7o5DjXSNunRQNltrNtxnANq_n0bV" alt="Spaghetti" />
              <p className="legend">Spaghetti of your choice</p>
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShGOKLDo5ZYcOKmfDVoCRQdcSkFJZLLQ-1Z71L1Vv31RqTZhqZ" alt="Pasta" />
              <p className="legend">The best Pasta </p>
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLn4ckA_tZJ2WQlKHy3WQYIlL0FHMAyVQ3o8Cl_QYoA1NsKC6s" alt="Pizza" />
              <p className="legend">Pizza slice</p>
            </div>
          </Carousel>
        </div>

        <div className="foodList">
          <div class="foodHead">
            <div class="menuName">
              <h3>Name of item</h3>
            </div>
            <div class="menuName">
              <h3>Price</h3>
            </div>
            <div class="menuName">
              <h3>Quantity</h3>
            </div>
            <div class="menuName">
              <h3>Amount</h3></div>
          </div>
          {
            this.state.food.map((option, i) =>
              <div class="foodItem" key={i} >
                <div class="menuName">
                  {option.name}
                </div>
                <div class="menuName">
                  {option.price}
                </div>
                <div class="voteCount">
                  <div class="countDisplay">
                    {option.votes}
                  </div>
                  <button class="myButton" onClick={this.vote.bind(this, i)}>+</button>
                  <button class="myButton" onClick={this.unvote.bind(this, i)}>-</button>
                </div>

                <div class="amountDisplay">
                  {option.amount}
                </div>
              </div>

            )
          }

        </div>

      </>
    )
  }
}


export default App; 