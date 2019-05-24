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
      display: "inline-flex",
      placeContent: "center flex-start",
      alignItems: "flex-start"
    };
    return (
      <div>
        <ul style={{ navStyle }}>
          <div>
            <li>new</li>
          </div>
          <div>
            <li>past</li>
          </div>
          <li>comments</li>
          <li>ask</li>
          <li>show</li>
          <li>jobs</li>
          <li>submit</li>
        </ul>
      </div>
    );
  }
}
export default newStories;
