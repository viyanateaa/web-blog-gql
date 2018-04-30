const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
