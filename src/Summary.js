import React, { Component, Fragment } from 'react';

class Summary extends Component {
  render() {
    return (
      <Fragment>
        <h2>Summary</h2>
        <ul className="Summary">
          {this.props.posts.map((post, index) =>
            <li key={ index }>
              <a href={ '#' + index }>{ post.title }</a>
            </li>
          )}
        </ul>
      </Fragment>
    );
  }
}

export default Summary;
