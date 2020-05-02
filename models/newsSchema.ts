import * as mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
    hat: {type: String},
    title: {type: String},
    author: {type: String},
    img: {type: String},
    publishdate: {type: Date},
    link: {type: String},
    active: {type: Boolean}
});

export default NewsSchema;