import React from "react";

class newStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
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
  }
  render() {
    const navStyle = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    };

    const listStyle = {
      listStyle: "none",
      display: "inline-block"
    };
    return (
      <div>
        <ul style={{ navStyle }}>
          <li style={{ listStyle }}>new</li>
          <li style={{ listStyle }}>past</li>
          <li style={{ listStyle }}>comments</li>
          <li style={{ listStyle }}>ask</li>
          <li style={{ listStyle }}>show</li>
          <li style={{ listStyle }}>jobs</li>
          <li style={{ listStyle }}>submit</li>
        </ul>
      </div>
    );
  }
}
export default newStories;
