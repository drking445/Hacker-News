import React from "react";
import axios from "axios";
const base = " https://hacker-news.firebaseio.com/v0/item/",
  extension = ".json?print=pretty";
type Props = {
  searchTerm: string
};

type StateType = {
  topStories: object,
  newStories: [],
  bestStories: [],
  ask: [],
  show: [],
  jobStories: [],
  gotStories: false,
  promises: []
};

export default class Table extends React.Component<Props, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
      newStories: [],
      bestStories: [],
      ask: [],
      show: [],
      jobStories: [],
      gotStories: false,
      promises: []
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
        // this.setState({ gotStories: true });
        //console.log("Hi");
        // console.log(topStories);
        let promises = [];
        for (let i = 0; i < topStories.length; i++) {
          axios.get(base + topStories[i] + extension).then(res => {
            const newItem = res.data;
            promises.push(newItem);
          });
        }
        // console.log(promises, "these are the promises");
        this.setState({ promises });
        console.log(this.state.promises, "is the state updating");
      });
  }

  render() {
    let counter = 0;
    return (
      <div>
        <div>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              placeContent: "flex-start",
              alignItems: "center"
            }}
          >
            {this.state.topStories.map(stories => (
              <li style={{ listStyle: "none" }}>
                {(counter += 1)}. {stories}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
