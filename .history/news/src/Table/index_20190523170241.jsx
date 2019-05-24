import React from "react";
import axios from "axios";
const base = " https://hacker-news.firebaseio.com/v0/item/",
  extension = ".json?print=pretty";
type Props = {
  searchTerm: string
};

export default class Table extends React.Component<Props> {
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
      .get(
        "https://hacker-news.firebaseio.com/v0/" +
          this.props.searchTerm +
          ".json?print=pretty"
      )
      .then(result => {
        const topStories = result.data;
        this.setState({ topStories });
        this.setState({ gotStories: true });
      }).then(result =>
      .all(result => result.map(l => axios.get(base + l + extension)))
      .then(
        axios.spread(function(...res) {
          // all requests are now complete
          console.log(res);
        })
      );
  }

  render() {
    //console.log(this.props.searchTerm, "this is the prop");
    //console.log(this.state.topStories);
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
