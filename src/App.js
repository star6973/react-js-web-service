import React from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
import { ID_KEY, SECRET_KEY } from "./Key";

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

// 위에서 언급한 React Component는 Life Cycle이 존재하는데, 앱을 개발하면서 렌더링 직전에 특정한 작업을 해야 하거나, 컴포넌트 업데이트 전후에 처리해야 할 작업이 있을 수 있다.
// 이때 Life Cycle 관련 함수들을 이용하면 이를 처리할 수 있다.
// 종류: Mount, Update, UnMount
/*
  [Mount] ==> DOM 객체가 생성되고 브라우저에 나타나는 것
  - constructor: 컴포넌트 클래스 생성자 함수, state의 초기값을 지정할 때 사용
  - getDerivedStateFromProps: props와 state 값을 동기화할 때 사용하는 함수
  - render: 컴포넌트의 기능을 정의하는 함수
  - componentDidMount: 컴포넌트를 생성하고 첫 렌더링이 끝났을 때 호출하는 함수

  [Update] ==> props값 변경, state값 변경, 부모 컴포넌트가 리렌더링, this.forceUpdate로 강제로 리렌더링
  - getDerivedStateFromProps
  - shouldComponentUpdate: 컴포넌트를 리렌더링 할지 말지 결정하는 함수
  - render: 새로운 값을 사용하여 View를 리렌더링
  - getSnapshotBeforeUpdate: 변경된 요소에 대해 DOM 객체에 반영하기 직전에 호출되는 함수
  - ComponentDidUpdate: 컴포넌트 업데이트 작업이 끝난 리렌더링 후에 호출되는 함수

  [UnMount] ==> 컴포넌트가 DOM에서 제거되는 것
  - componentWillUnmount: 컴포넌트가 제거되기 직전에 호출되는 함수
*/

/*
class App extends React.Component {
  state = {
    count: 0
  }

  constructor(props) {
    super(props);
    console.log("constructor 호출 --- create class App");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps 호출");
    return null
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate 호출 --- do you want to update?")
    return true
  }

  componentDidUpdate() {
    console.log("componentDidUpdate 호출 --- update is done")
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate 호출")
    return null
  }

  componentDidMount() {
    console.log("componentDidMount 호출 --- first rendering is done");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount 호출 --- component is dead")
  }

  handleIncrease = () => {
    this.setState(current => ({ 
      count: current.count + 1 
    }));
  }

  handleDecrease = () => {
    this.setState(current => ({ 
      count: current.count - 1 
    }));
  }

  render () {
    console.log("render 호출 --- rendering now");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleDecrease}>Decrease</button>
      </div>
    )
  }
}
*/

/*
  [axios]
  - fetch 위에 작은 layer
  - 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
  - 백엔드랑 프론트엔드와 통신을 쉽게하기 위해 Ajax와 더불어 사용
*/
class App extends React.Component {
  state = {
    isLoading: true,
    movieList: []
  }

  // get 요청이 들어올 때까지 대기
  getMovies = async () => {
    // const movies_json = await axios.get("http://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    // console.log(movies_json.data.data.movies);
    // ES6 문법
    // const {
    //   data: {
    //     data: { movies }
    //   }
    // } = await axios.get("http://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");

    // 네이버 영화 검색 OPEN API 사용해보기
    try {
      // const naver_movies_api = await axios.get("/api/v1/search/movie.json", {
      //   params: {
      //     query: "트랜스포머",
      //     display: 100
      //   },
      //   headers: {
      //     'X-Naver-Client-Id': ID_KEY,
      //     'X-Naver-Client-Secret': SECRET_KEY
      //   }
      // })
      // console.log(naver_movies_api.data.items);

      const {
        data: { items }
      } = await axios.get("/api/v1/search/movie.json", {
        params: {
          query: "트랜스포머",
          display: 100
        },
        headers: {
          'X-Naver-Client-Id': ID_KEY,
          'X-Naver-Client-Secret': SECRET_KEY
        }
      })
      
      console.log(items);
      this.setState({ movieList: items, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }
  
  componentDidMount = () => {
    this.getMovies();
  }

  render = () => {
    // ES6 문법
    const { isLoading, movieList } = this.state;
    return (
      // javascript에서 사용하는 class와 html에서 사용하는 class 이름이 같기 때문에, 구분을 위해서 className을 사용한다
      <section className="container"> {
        isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movieList">
            {
              movieList.map((movie, index) => {
                if (movie.image !== '') {
                  // Movie 앱의 props
                  return (
                    <Movie
                      key={index}
                      year={movie.pubDate}
                      title={movie.title}
                      subtitle={movie.subtitle}
                      director={movie.director}
                      rate={movie.userRating}
                      poster={movie.image}
                    />
                  );
                }
              })
            }
          </div>
        )
      } </section>
    );
  }
}

export default App;