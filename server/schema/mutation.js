//
// var GraphQLNonNull = require('graphql').GraphQLNonNull;
// var GraphQLString = require('graphql').GraphQLString;
// var UserType = require('./types');
// var UserModel = require('../models/user');
import { GraphQLObjectType, GraphQLString, GraphQLList,GraphQLInt } from 'graphql';
import { userType,BlogPostType } from './types';
import {CreateUserInput, CreateBlogPostInput} from './input';
var User = require('../models/user');
// var BlogPostModel = require('../models/blogPost');

const Mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createUser: {
      type: userType,
      args: {
          name: { type: GraphQLString }
        // input: {type: CreateUserInput}
      },
      resolve(root, args){
          const user = new User ({
              name:args.name
          });
          return user.save();
      }
    }
   }
});

export default Mutation;
