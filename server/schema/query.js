
import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { userType,BlogPostType } from './types';
var UserModel = require('../models/user');
var BlogPostModel = require('../models/blogPost');
// Query
const Query = new GraphQLObjectType({
name: 'RootQueryType',
  fields: function () {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: function () {
          const users = UserModel.find().exec()
          if (!users) {
            throw new Error('Error')
          }
          return users
        }
    },
      blogPost: {
        type: new GraphQLList(BlogPostType),
        resolve: function () {
          const blogPost = BlogPostModel.find().exec()
          if (!blogPost) {
            throw new Error('Error')
          }
          return blogPost
        }
      }
    }
  }
});


export default Query;
