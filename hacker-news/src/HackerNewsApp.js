import React, { Component } from 'react';
import './HackerNewsApp.css';

class HackerNewsApp extends Component {

  constructor(props) {
    super(props);
    this.state = {stories: []}
  }

  componentDidMount() {
    const topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    const storyBaseUrl = 'https://hacker-news.firebaseio.com/v0/item/';

    fetch(topStoriesUrl) 
      .then(res => res.json())
      .then(ids => ids.map(id => (
	fetch(`${storyBaseUrl}${id}.json`)
	  .then(res => res.json())
      )))
      .then(promises => Promise.all(promises))
      .then(stories => this.setState({stories}));
  }

  render() {
    let views = <div>Loading...</div>;
    const {stories} = this.state;

    if(stories && stories.length > 0) {
      views = stories.map((story, idx) => (
	<p key={idx}>
	  <a href={story.url}>{story.title}</a>
	  from <strong>{story.by}</strong>
	</p>
      ));
    }

    return (
      <div className="HackerNewsApp">
        <h2>Hacker News Top Stories</h2>
        {views}
      </div>
    );
  }
}

export default HackerNewsApp;
