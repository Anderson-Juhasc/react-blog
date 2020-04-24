import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';
import Summary from './Summary';
import { getPosts, getAuthors } from './api';

class App extends Component {
  constructor() {
    super ();

    this.state = { posts: [], authors: [], filter: 0, sort: 'asc' };
  }

  async componentDidMount() {
    let posts = await getPosts()
      , authors = await getAuthors();

    posts = posts.data.sort((a, b) => b.metadata.publishedAt - a.metadata.publishedAt);

    this.setState({ posts: posts, authors: authors.data });
  }

  authorChange = (e) => {
    this.setState({ filter: Number(e.target.value) });
  }

  sortPosts = (e) => {
    let sortedPosts;

    if (e.target.value === 'asc') {
      sortedPosts = this.state.posts.sort((a, b) => b.metadata.publishedAt - a.metadata.publishedAt);
    }

    if (e.target.value === 'desc') {
      sortedPosts = this.state.posts.sort((a, b) => a.metadata.publishedAt - b.metadata.publishedAt);
    }

    this.setState({ posts: sortedPosts });
  }

  render() {
    const self = this;

    let posts = self.state.posts;

    if (self.state.filter !== 0) {
      posts = posts.filter(a => {
        return a.metadata.authorId === self.state.filter;
      });
    }

    if (self.state.filter === 0) {
      posts = self.state.posts;
    }

    return (
      <div className="App">
        <header className="App-header">
          <div className="Wrapper">
            <img src={ logo } className="App-logo" alt="logo" />
            <h2 className="App-title">Welcome to React Blog</h2>
          </div>
        </header>

        <section className="App-intro">
          <div className="Wrapper">
            <div className="Grid">
              <div className="Grid-cell">
                <h2>News</h2>
                <div className="Filter">
                  <div className="Filter-cell">
                    <div className="Field">
                      <div className="Field-cell">
                        <label className="Label" htmlFor="">Authors:</label>
                      </div>
                      <div className="Field-cell">
                        <select className="Select" onChange={ self.authorChange }>
                          <option value="0">All</option>
                          {self.state.authors.map((author, index) =>
                            <option key={ index } value={ author.id }>{ author.name }</option>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="Filter-cell">
                    <div className="Field">
                      <div className="Field-cell">
                        <label className="Label" htmlFor="">Sort:</label>
                      </div>
                      <div className="Field-cell">
                        <select className="Select" onChange={ self.sortPosts }>
                          <option value="asc">Ascending</option>
                          <option value="desc">Descending</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <Content posts={ posts } authors={ this.state.authors } />
              </div>

              <aside className="Grid-cell">
                <Summary posts={ posts } />
              </aside>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
