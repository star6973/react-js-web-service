import React from "react";

function Food({favorite1, favorite2}) { // props를 인자로 받으면, Object 안에 favorite이라는 변수가 있음. 왼쪽 같이 표현하는 것은 ES6 문법임.
  return (
    <div>
      <h1>I love {favorite1}</h1>
      <h2>I love {favorite2}</h2>
    </div>
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
      <h1>Hello</h1>
      <Food favorite1="tomato" />
      <Food favorite2="potato" />
      <Food favorite3="samgiopsal" />
    </div>
  );
}

export default App;