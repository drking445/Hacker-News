import React from "react";

const base = " https://hacker-news.firebaseio.com/v0/item/",
  extension = ".json?print=pretty";

type Props = {
  searchTerm: string
};

class Table extends React.Component<Props> {
  render() {
    return (
      <div>
        <h1>Hi, I'm Paul</h1>
      </div>
    );
  }
}
export default Table;
