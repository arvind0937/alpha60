import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/alpha60', {
  connectTimeoutMS: 1000,
})
.then(
    () => {
        console.info('mongo connected');
    },
    err => console.error(err),
);
