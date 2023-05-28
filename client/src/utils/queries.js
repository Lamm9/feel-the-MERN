const { gql } = require('apollo-server-express');

const GET_ME = gql`
  {
    me {
      _id
      username
      email
      password
      savedBooks{
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

module.exports = GET_ME;
