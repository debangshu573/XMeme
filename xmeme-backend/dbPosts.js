import mongoose from 'mongoose';

const xmemeSchema = mongoose.Schema({
    name: String,
    url: String,
    caption: String
});

export default mongoose.model('postcontents',xmemeSchema);