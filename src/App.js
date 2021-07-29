import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage"
import DetailPage from "./routes/DetailPage/DetailPage"
import Navigation from "./components/Navigation";

/*
  ** 라우팅(Routing)이란 경로(URL)에 따라 페이지의 이동을 설정하는 것. **

  Route: 컴포넌트의 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트, 함수를 렌더링한다.
         또한, url을 기준으로 어떤 component를 불러올지 결정한다.
         만약 exact 속성을 부여하면, 오직 정해진 path에 대해서만 라우터가 설정되며, 안그러면 동시에 렌더링 하게 된다.
*/
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/detail" component={DetailPage} />
      </Switch>
    </Router>
  )
}

export default App;