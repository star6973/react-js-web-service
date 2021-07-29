import React from "react";

class DetailPage extends React.Component {
    state = {
        location: '',
        history: '',
    }
    componentDidMount() {
        const { location, history } = this.props;
        console.log(this.props);
        if (location.state === undefined) {
            console.log("Go To Home Page!!")
            history.push("/");
        } else {
            console.log("Go To Detail Page!!")
        }
    }

    render = () => {
        const { location } = this.props;
        const { poster, year, title, subtitle, director, actor, rate } = location.state;

        return <span>Hello</span>
    }
}

export default DetailPage;