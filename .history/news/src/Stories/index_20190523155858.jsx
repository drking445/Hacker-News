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
          {
            <li>
              <div onclick={this.getStories("new")}>new</div>
            </li>
          }
          {
            <li>
              <div onClick={this.getStories("past")}>past</div>
            </li>
          }
          {
            <li>
              <div onClick={this.getStories("comments")}>comments</div>
            </li>
          }
          {
            <li>
              <div onClick={this.getStories("ask")}>ask</div>
            </li>
          }
          {
            <li>
              <div onClick={this.getStories("show")}>show</div>
            </li>
          }
          {
            <li>
              <div onClick={this.getStories("jobs")}>jobs</div>
            </li>
          }
          {
            <li>
              <div href="https://www.mcdonalds.com/us/en-us.html">submit</div>
            </li>
          }
        </ul>
      </div>
    );
  }
}
export default newStories;
