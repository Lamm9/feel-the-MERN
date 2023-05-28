const { gql } = require('apollo-server-express');

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  }
`;

const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  }
`;

const SAVE_BOOK = gql`
  mutation saveBook(
    $authors: [String]
    $description: String!
    $title: String!
    $bookId: String!
    $image: String
    $link: String
  ) {
    saveBook(
      authors: $authors
      description: $description
      title: $title
      bookId: $bookId
      image: $image
      link: $link
    ) {
      _id
      username
      email
      password
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      password
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

module.exports = { LOGIN, ADD_USER, SAVE_BOOK, REMOVE_BOOK };
