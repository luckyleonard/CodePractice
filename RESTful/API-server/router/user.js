
const userRoutes = (app, fs) => {

  // variables
  const dataPath = './data/user.json';

  // helper methods
  const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
      fs.readFile(filePath, encoding, (err, data) => {
          if (err) {
              throw err;
          }

          callback(returnJson ? JSON.parse(data) : data);
      });
  };

  const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

      fs.writeFile(filePath, fileData, encoding, (err) => {
          if (err) {
              throw err;
          }

          callback();
      });
  };

  // READ
  app.get('/users', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
          if (err) {
              throw err;
          }

          res.send(JSON.parse(data));
      });
      // User.find({}, (err, users) => {
      //     if (err) {
      //       res.status(404);
      //       res.send('Users not found!');
      //     }
      
      //     // return a view with data
      //     res.send(users);
      //   });
  });

  // app.get('/users/:name', (req, res) => {
  //     User.findOne({name: req.params.name}, (err, user) => {
  //         if (err) {
  //           res.status(404);
  //           res.send('Users not found!');
  //         }
      
  //         // return a view with data
  //         res.send(user);
  //       });
  // })

    // CREATE
  app.post('/users', (req, res) => {

    readFile(data => {
        const newUserId = Object.keys(data).length + 1;

        // add the new user
        data[newUserId.toString()] = req.body;

        writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send('new user added');
        });
    },
        true);
    // var user = new User( {
    //     name: req.body.name,
    //     password: req.body.password,
    //     profession: req.body.profession
    // });
    // user.save(err => {
    //     if(err) {
    //         console.log(err);
    //         res.status(400).send('cannot create user');
    //     }
    //     res.status(200).send('user added.')
    // })
  });
 // UPDATE
  app.put('/users/:name', (req, res) => {

      readFile(data => {

          // add the new user
          const userId = req.params["id"];
          data[userId] = req.body;

          writeFile(JSON.stringify(data, null, 2), () => {
              res.status(200).send(`users id:${userId} updated`);
          });
      },
          true);

  });
  // DELETE
  app.delete('/users/:id', (req, res) => {

      readFile(data => {

          // add the new user
          const userId = req.params["id"];
          delete data[userId];

          writeFile(JSON.stringify(data, null, 2), () => {
              res.status(200).send(`users id:${userId} removed`);
          });
      },
          true);
  });
};

module.exports = userRoutes;