import React from "react";
import Info from "../../components/Info";
import "./DetailPage.css";

class DetailPage extends React.Component {
    state = {
        location: '',
        history: '',
    }
    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            console.log("Go To Home Page!!")
            history.push("/");
        } else {
            console.log("Go To Detail Page!!")
        }
    }

    render = () => {
        const { location } = this.props;
        const items = location.state;
        console.log(items)

        return (
            <div className="container__detail">
                <Info
                    poster={items.poster}
                    year={items.year}
                    title={items.title}
                    rate={items.rate}
                />
            </div>
        )
    }
}

export default DetailPage;