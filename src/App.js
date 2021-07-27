import React from "react";
import PropTypes from "prop-types";

/*
// 동적으로 데이터를 보내주기
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5.0
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
 },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];

function Food({name, picture, rating}) { // props를 인자로 받으면, Object 안에 favorite이라는 변수가 있음. 왼쪽 같이 표현하는 것은 ES6 문법임.
  return (
    <div>
      <h1>I love {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  )
}

// type checker
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function renderFood(food) {
  return (
    <Food
      key={food.id}
      name={food.name}
      picture={food.image}
      rating={food.rating}
    />
  )
}

// component -> component로 정보를 보내는 방법
// Food component에 favorite이라는 이름의 property를 potato라는 value로 전달
// 누군가가 Food component에 정보를 보내려고 하면, react는 밑에 보이는 속성들을 가져올 것임
// 그 속성들은 Food function component의 argument로 들어가짐
// jsx + props를 사용하여 재사용성을 높인다
function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}
*/

// class component
// 상속해서 function 사용
// React는 자동으로 class component의 render method를 실행함
// class component를 사용하면 로컬 state와 life cycle method와 같은 부가적인 기능을 사용할 수 있다
// state는 object이며 동적으로 변한다

// 기본적으로 React에서 render function은 state의 상태가 변경된다고 다시 호출되지 않는다
// state의 변경을 원한다면 setState를 사용해야 한다
// setState를 사용하면 원하는 부분만 변경 가능하다 => 이게 바로 React의 SPA!!

// setState를 사용할 때, React에서 외부의 상태에 의존하지 않는 좋은 방법은 current를 사용하는 것이다
// current === this.state
class App extends React.Component {
  state = {
    count: 0
  }

  handleIncrease = () => {
    this.setState(current => ({ count: current.count + 1 }));
  }

  handleDecrease = () => {
    this.setState(current => ({ count: current.count - 1 }));
  }

  render () {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleDecrease}>Decrease</button>
      </div>
    )
  }
}

export default App;