const userRoutes = require('./user');

const appRouter = (app, fs) => {
  app.get('/',(req,res)=> {
    res.send('welcome to my server to my routes')
  });

  userRoutes(app, fs);

   // CREATE
      app.post('/users', (req, res) => {

        // readFile(data => {
        //     const newUserId = Object.keys(data).length + 1;

        //     // add the new user
        //     data[newUserId.toString()] = req.body;

        //     writeFile(JSON.stringify(data, null, 2), () => {
        //         res.status(200).send('new user added');
        //     });
        // },
        //     true);
        var user = new User( {
            name: req.body.name,
            password: req.body.password,
            profession: req.body.profession
        });
        user.save(err => {
            if(err) {
                console.log(err);
                res.status(400).send('cannot create user');
            }
            res.status(200).send('user added.')
        })
    });




    // UPDATE
    app.put('/users/:name', (req, res) => {

        // readFile(data => {

        //     // add the new user
        //     const userId = req.params["id"];
        //     data[userId] = req.body;

        //     writeFile(JSON.stringify(data, null, 2), () => {
        //         res.status(200).send(`users id:${userId} updated`);
        //     });
        // },
        //     true);

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

module.exports = appRouter;