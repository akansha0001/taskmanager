const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'Andrew',
    age: 78
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})