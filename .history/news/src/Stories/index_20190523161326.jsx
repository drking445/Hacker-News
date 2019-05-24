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
      width: "450px"
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
              <a onclick={() => this.getStories("new")}>new|</a>
            </li>
          }
          {
            <li>
              <a onClick={() => this.getStories("past")}>past|</a>
            </li>
          }
          {
            <li>
              <a onClick={() => this.getStories("comments")}>comments|</a>
            </li>
          }
          {
            <li>
              <div onClick={() => this.getStories("ask")}>ask|</div>
            </li>
          }
          {
            <li>
              <a onClick={() => this.getStories("show")}>show|</a>
            </li>
          }
          {
            <li>
              <a onClick={() => this.getStories("jobs")}>jobs|</a>
            </li>
          }
          {
            <li>
              <a
                href="https://www.mcdonalds.com/us/en-us.html"
                style={{ textDecoration: "none", color: "black" }}
              >
                submit
              </a>
            </li>
          }
        </ul>
        <Table searchTerm={12} />
      </div>
    );
  }
}
export default newStories;
