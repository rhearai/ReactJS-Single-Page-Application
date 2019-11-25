import React, { Component } from "react";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        // Enter Your Api Key in below link
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey='+YOUR API KEY+'&category=technology&pageSize=10')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }





    render() {
        console.log("fare", this.state.data);
        return (

            <div className="right">
                
                <div className="News"><h3>News</h3>

                    <div>
                        {
                            this.state.data != null ?
                                this.state.data.articles.map(news => {
                                    return (
                                        <div className="news_t">
                                            <h5>{news.title}</h5>
                                        </div>
                                    )
                                })
                                : null
                        }
                    </div>
                </div>




            </div>
        );
    }
}

export default News; 