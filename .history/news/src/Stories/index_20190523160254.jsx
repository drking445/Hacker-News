import React from "react";
import Table from "../Table";

class newStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      searchItem: "new"
    };
    this.getStories = this.getStories.bind(this);
  }

  getStories(searchItem) {
    this.setState({ searchItem: searchItem });
  }

  componentDidMount() {
    /*
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
      */
  }
  render() {
    const navStyle = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      listStyle: "none",
      justifyContent: "space-between",
      width: "700px"
    };

    const listStyle = {
      listStyle: "none",
      display: "inline-block"
    };
    return (
      <div style={{ width: "100%" }}>
        <ul style={navStyle}>
          <img src="/img/y18.gif" />
          <li>
            <b>Hacker News</b>
          </li>
          {
            <li>
              <div>new</div>
            </li>
          }
          {
            <li>
              <div>past</div>
            </li>
          }
          {
            <li>
              <div>comments</div>
            </li>
          }
          {
            <li>
              <div>ask</div>
            </li>
          }
          {
            <li>
              <div>show</div>
            </li>
          }
          {
            <li>
              <div>jobs</div>
            </li>
          }
          {
            <li>
              <div href="https://www.mcdonalds.com/us/en-us.html">submit</div>
            </li>
          }
        </ul>
        <Table searchTerm={12} />
      </div>
    );
  }
}
export default newStories;
