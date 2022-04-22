const express = require('express')
//const userRouter = require('./routes/user.routes') 
//const postRouter = require('./routes/post.routes')
const manageUserRouter = require('./routes/manage-users.routes') 
//const manageGroupRouter = require('./routes/manage-groups.routes') 


const app = express()
app.use(express.json())

// CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
});

// CORS
/* app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
}); */

app.get('/', (req, res) => {
    res.send('Yoooooooooooooooooooooo!')
}) 



app.use('/api', manageUserRouter)
//app.use('/api', manageGroupRouter)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
