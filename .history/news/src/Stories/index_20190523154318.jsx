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

  componentDidMount() {}
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
          <li>
            <a onclick={this.getStories("new")}>new</a>
          </li>
          <li>
            <a onClick={this.getStories("past")}>past</a>
          </li>
          <li>
            <a onClick={this.getStories("comments")}>comments</a>
          </li>
          <li>
            <a onClick={this.getStories("ask")}>ask</a>
          </li>
          <li>
            <a onClick={this.getStories("show")}>show</a>
          </li>
          <li>
            <a onClick={this.getStories("jobs")}>jobs</a>
          </li>
          <li>
            <a href="https://www.mcdonalds.com/us/en-us.html">submit</a>
          </li>
        </ul>
        <Table searchTerm={12} />
      </div>
    );
  }
}
export default newStories;
