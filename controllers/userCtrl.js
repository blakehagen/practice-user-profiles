///////////////
//userCtrl.js//
///////////////
var users = [
    {
        name: 'blake',
        password: 'pass',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];


module.exports = {

    login: function (req, res, next) {
        console.log(req.body);
        var userFound;
        for (var i = 0; i < users.length; i++) {
            if (users[i].name === req.body.userName && users[i].password === req.body.password) {
                console.log('here i am ');
                req.session.currentUser = users[i];
                userFound = true;
                console.log(userFound);
                break;
            } else {
                userFound = false;
                console.log(userFound);
            }
        }
        var result = {userFound: userFound};
        console.log(result);
        res.send(result);
    }





};