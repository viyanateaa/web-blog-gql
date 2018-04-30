const User = require('../models/user');
const BlogPost = require('../models/blogPost');
const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
   GraphQLID,
   GraphQLInt,
   GraphQLList,
   GraphQLNonNull
} = graphql;

export const userType = new GraphQLObjectType({
  name: 'User',
  fields: ( ) => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: GraphQLString}
})
});

export const BlogPostType = new GraphQLObjectType({
  name: 'BlogPost',
  fields: ( ) => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: GraphQLString},
    description: {type: GraphQLString}
})
});
