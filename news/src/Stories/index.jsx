import React from "react";
import Table from "../Table";

class newStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      searchItem: "newstories"
    };
    this.getStories = this.getStories.bind(this);
  }

  getStories(searchItem) {
    this.setState({ searchItem: searchItem });
    //console.log(this.state.searchItem);
  }

  componentDidMount() {}
  render() {
    const navStyle = {
      display: "inline-flex",
      placeContent: "center",
      items: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      listStyle: "none",
      justifyContent: "space-between",
      width: "470px"
    };

    const listStyle = {
      listStyle: "none",
      display: "inline-block"
    };
    return (
      <div style={{ width: "90%" }}>
        <ul style={navStyle}>
          <img src="/img/y18.gif" />
          <li>
            <b>Hacker News</b>
          </li>
          {
            <li>
              <a
                onClick={() => this.getStories("new")}
                style={{ color: "white" }}
              >
                {" "}
                new |
              </a>
            </li>
          }
          {
            <li>
              <a onClick={() => this.getStories("past")}>past |</a>
            </li>
          }
          {
            <li>
              <a onClick={() => this.getStories("comments")}>comments |</a>
            </li>
          }
          {
            <li>
              <div onClick={() => this.getStories("askstories")}>ask |</div>
            </li>
          }
          {
            <li>
              <a onClick={() => this.getStories("showstories")}>show |</a>
            </li>
          }
          {
            <li>
              <a onClick={() => this.getStories("jobstories")}>jobs |</a>
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
        <Table searchTerm={this.state.searchItem} />
      </div>
    );
  }
}
export default newStories;
