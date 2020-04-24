import React, { Component, Fragment } from 'react';

class Content extends Component {
  render() {
    const self = this;

    function GetDate(props) {
      let dateObj = new Date(props.date)
        , monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        , month = monthNames[dateObj.getMonth()]
        , day = String(dateObj.getDate()).padStart(2, '0')
        , year = dateObj.getFullYear()
        , output = month  + ' ' + day  + ', ' + year;

      return output;
    }

    function GetAuthor(props) {
      let authors = self.props.authors
        , output
        , i = 0
        , len = authors.length;

      for (; i < len; i++) {
        if (authors[i].id === props.authorId) {
          output = authors[i].name;
        }
      }

      return output;
    }

    return (
      <Fragment>
        {this.props.posts.map((post, index) =>
          <article key={ index } id={ index } className="Article">
            <h1 className="Article-title">{ post.title }</h1>
            <ul className="Article-metadata">
              <li>
                <GetDate date={ post.metadata.publishedAt } />
              </li>
              <li>
                <GetAuthor authorId={ post.metadata.authorId } />
              </li>
            </ul>
            <p className="Article-body">{ post.body }</p>
          </article>
        )}
      </Fragment>
    );
  }
}

export default Content;
