var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // test
  res.render('index', { title: 'Foobar' });
});

const persons = [
  {
    route: 'sheethal',
    name: 'Sheethal Sebastian',
    age: 20,
    cityBorn: 'Kerala',
    cityResiding: 'Barrie',
    hobby: 'playing Rocket League.'
  },
  {
    route: 'shilpa',
    name: 'Shilpa Sebastianh',
    age: 22,
    cityBorn: 'Kerala',
    cityResiding: 'Kerala',
    hobby: 'watching movies.'
  },
  {
    route: 'riya',
    name: 'Riya Sebastian',
    age: 25,
    cityBorn: 'Kerala',
    cityResiding: 'Mumbai',
    hobby: ' playing with my cats.'
  }
];

router.get('/:route', (req, res, next) => {
  // Find the person where their route string equals the route parameter
  const person = persons.find(per => per.route === req.params.route);

  // if no person - render the error page
  if (!person) return next(new Error('Cannot find person'));

  // Res.render - renders a view from our views folder.
  // Pass the person we found in the array above
  return res.render('person', person);
});



module.exports = router;