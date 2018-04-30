
import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import { userType,BlogPostType } from './types';
var UserModel = require('../models/user');
var BlogPostModel = require('../models/blogPost');


export const CreateUserInput = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: {
      name: { type: GraphQLString }
  }
});

export const CreateBlogPostInput = new GraphQLInputObjectType({
  name: 'CreateBlogPostInput',
  fields: {
    title: { type: GraphQLString},
    description: { type: GraphQLString },
  }
});
