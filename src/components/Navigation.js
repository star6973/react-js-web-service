import React from "react";
import { Link } from "react-router-dom";

/*
    ** Navigation이란 보통 왼쪽이나 오른쪽 화면에 현재 페이지가 어떤 페이지인가를 설명해주는 것 **
    
    라우팅한 링크를 여러 번 클릭할 때마다 bundle.js, webpack.js 등외 여러가지 파일을 새로 다운받는 걸 확인할 수 있다. 
    최초 한 번만 모든 정보를 새로 고치면 효율적이지만 매번 모든 정보를 새로 고치는 건 매우 비효율적이다.

    이를 해결하려면 a 태그 대신 React Router DOM에서 제공하는 Link 컴포넌트를 사용하여 일부 영역만 수정토록 하면 된다.
    Link 컴포넌트를 사용하면 a 태그에 onClick 이벤트를 구현하여 앵커의 기본 동작(모든 콘텐츠 새로고침)을 방지한다.

    Linke는 라우터 안에서만 사용 가능하며, Link가 렌더링되면 html에 자동으로 a 태그로 렌더링된다.
*/

function Navigation() {
    return (
        <div className="nav">
            <Link className="nav__home" to="/">Home</Link>
            <Link className="nav__detail" to="/detail">Detail</Link>
        </div>
    );
}

export default Navigation;