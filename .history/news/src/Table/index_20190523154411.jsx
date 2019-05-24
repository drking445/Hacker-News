import React from "react";
import axios from "axios";
const base = " https://hacker-news.firebaseio.com/v0/item/",
  extension = ".json?print=pretty";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
      newStories: [],
      bestStories: [],
      ask: [],
      show: [],
      jobStories: [],
      gotStories: false
    };
  }

  componentDidMount() {
    // Get all the top story ids
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(result => {
        const topStories = result.data;
        this.setState({ topStories });
        this.setState({ gotStories: true });
      });
  }

  render() {
    console.log(this.state.topStories);
    return (
      <div>
        <div>
          {this.state.topStories.map(stories => (
            <li>{stories}</li>
          ))}
        </div>
      </div>
    );
  }
}
