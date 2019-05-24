import React from "react";
import axios from "axios";
const base = " https://hacker-news.firebaseio.com/v0/item/",
  extension = ".json?print=pretty";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
      newStories: [],
      bestStories: [],
      ask: [],
      show: [],
      jobStories: []
    };
  }

  componentDidMount() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(result => {
        const stories = result.data;
        this.setState({ topStories });
      });
  }

  render() {
    return (
      <div>
        <h1>Hi, I'm Paul</h1>
      </div>
    );
  }
}
export default Table;
