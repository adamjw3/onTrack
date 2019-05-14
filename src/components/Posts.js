import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { withRouter } from "react-router";

import { fetchPosts } from "../actions";

import Paging from "./Paging";

class Posts extends Component {
  state = {
    page: 1
  };

  componentDidMount() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const page = params.get("page") ? params.get("page") : 1;

    this.onChangePagination(page);
  }

  renderPosts() {
    if (this.props.posts) {
      return this.props.posts.map(post => {
        return (
          <ListGroup.Item className="item" key={post.id}>
            <h2>{post.book_title}</h2>
            <p>
              <strong>City:</strong>
              {post.book_publication_city}
              <br />
              <strong>Country:</strong>
              {post.book_publication_country}
              <br />
              <strong>Yeah:</strong>
              {post.book_publication_year}
              <br />
              <strong>Author:</strong>
              {post.book_author}
              <br />
            </p>
          </ListGroup.Item>
        );
      });
    }
  }

  onChangePagination = page => {
    this.props.fetchPosts(page);
    this.updateHistory(page);
    this.setState({
      page
    });
  };

  updateHistory(page) {
    this.props.history.push({
      pathname: "/",
      search: `?page=${page}`
    });
  }

  render() {
    return (
      <>
        <ListGroup>{this.renderPosts()}</ListGroup>
        <Paging
          currentPage={this.state.page}
          totalPosts={this.props.count}
          onChangePagination={this.onChangePagination}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.books,
    count: state.posts.count
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchPosts }
  )(Posts)
);
