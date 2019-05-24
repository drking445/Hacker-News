import React from "react";
Import axios from "axios";
const base = " https://hacker-news.firebaseio.com/v0/item/",
  extension = ".json?print=pretty";

type Props = {
  searchTerm: string
};

class Table extends React.Component<Props> {
  fetchTopStories = (searchTerm, pageNo, 0) => {
    const url = `${base}`

  }
  render() {
    return (
      <div>
        <h1>Hi, I'm Paul</h1>
      </div>
    );
  }
}
export default Table;
