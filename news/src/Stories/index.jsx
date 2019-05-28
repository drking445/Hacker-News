import React from "react";
import axios from "axios";

const base = " https://hacker-news.firebaseio.com/v0/item/",
  extension = ".json?print=pretty";
/*
type props = {};

type StateProps = {
  error: null,
  isLoaded: boolean,
  items: Array<String>,
  searchItem: string
};
*/

type props = {
  searchTerm: string
};

type StateProps = {
  topStories: Array<Number>,
  newStories: Array<Object>,
  bestStories: Array<Object>,
  ask: Array<Object>,
  show: Array<Object>,
  jobStories: Array<Object>,
  gotStories: boolean,
  promises: Array<Object>,
  searchItem: string,
  isMounted: boolean,
  pageCount: number,
  currentPage: number,
  todosPerPage: number
};

class newStories extends React.Component<props, StateProps> {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      searchItem: "newstories",
      topStories: [],
      newStories: [],
      bestStories: [],
      ask: [],
      show: [],
      jobStories: [],
      gotStories: false,
      promises: [{}],
      isMounted: false,
      currentPage: 1,
      todosPerPage: 15
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //this.getStories = this.getStories.bind(this);

  // Onclick change the data onscreen by setting the state of the search item
  getStories(searchItem: string) {
    this.setState({ searchItem: searchItem });
  }

  componentWillMount() {
    this._isMounted = false; //you don't load anything before the component is mounted
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount() {
    const { searchItem } = this.state;
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/" +
          this.state.searchItem +
          ".json?print=pretty"
      )
      .then(result => {
        // Store category ids
        const topStories = result.data;
        const promises = topStories.map(story => {
          return axios.get(base + story + extension).then(res => res.data);
        });
        Promise.all(promises).then(data => {
          console.log(data);
          this.setState({
            promises: data,
            isMounted: true,
            pageCount: data.length / 10
          });
        });
      });
  }
  render() {
    const largeColumn = {
      width: "40%"
    };
    const midColumn = {
      width: "30%"
    };
    const smallColumn = {
      width: "10%"
    };

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

    const { currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = this.state.promises.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.state.promises.length / todosPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    let displayData =
      this.state.isMounted === true ? (
        currentTodos.map(
          (stories, index) =>
            stories && (
              <div style={{ listStyle: "none" }} key={stories.id}>
                  <a style={{textDecoration: "none", color:"black"}}href={stories.url}>  {index + 1} {stories.title} </a>
                  <div><pre>{stories.score} points by {stories.by}</pre></div>
              </div>
            )
        )
      ) : (
        <h3>Loading data</h3>
      );

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          style={{ listStyle: "none" }}
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div style={{ width: "90%" }}>
        <ul style={navStyle}>
          <img src="../y.jpg" alt="logo" />
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            placeContent: "flex-start"
          }}
        >
          <ul>{displayData}</ul>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <ul
            style={{
              display: "flex",
              alignContent: "center",
              placeContent: "space-between",
              alignItems: "center",
              width: "100%"
            }}
          >
            {renderPageNumbers}
          </ul>
        </div>
      </div>
    );
  }
}
export default newStories;
