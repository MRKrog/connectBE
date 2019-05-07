const express = require('express');
const app = express();

// add CORS
const cors = require('cors');

// add app-level middleware
app.use(cors());


app.set('port', process.env.NODE_ENV || 3001)

// const cors = require('cors')
// app.use(express.json());
// app.use(cors());

// const express = require('express');
// const app = express();

app.use(express.json());


app.locals.pets = [
  { id: 'a1', name: 'Rover', type: 'dog' },
  { id: 'b2', name: 'Marcus Aurelius', type: 'parakeet' },
  { id: 'c3', name: 'Craisins', type: 'cat' }
];


// app.get('/', (request, response) => {
//   response.status(200).json("Hello World");
// });
//
// app.get('/api/v1/resource', (request, response) => {
//   response.status(200).json(app.locals.pets);
// });

//
// var whitelist = ['http://localhost:3001', 'http://localhost:3000']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

app.get('/api/v1/resource', (request, response) => {
  response.status(201).json(app.locals.pets)
});
//
// app.get('/api/v1/resource', cors(corsOptions), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
// })



app.listen(app.get('port'), () => console.log(`Our app is running on port ${app.get('port')}`))
