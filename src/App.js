import React from "react";
import PropTypes from "prop-types";

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

export default App;