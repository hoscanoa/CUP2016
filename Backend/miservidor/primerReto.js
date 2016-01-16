var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');


var generaUsuario = function(){
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomImage = faker.image.avatar();
  return {
    nombre: randomName,
    email: randomEmail,
    imagen: randomImage
  }
}


var generaPost = function(){
	var randomId = faker.random.uuid();
	var randomNombre = faker.name.findName();
	var randomContenido = faker.lorem.sentence();
	var randomFecha = faker.date.past();
	var randomImage = faker.image.avatar();
	return {
		id: randomId,
	 	nombre: randomNombre,
	 	contenido: randomContenido,
	 	fecha: randomFecha,
	 	imagen: randomImage
	}
}


app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
});

app.get('/friends', function (req, res) {
  var cantidad= _.random(5,10);
  var usuarios = _.times(cantidad, generaUsuario);
  res.json(usuarios);
});

app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
});


app.get('/post', function(req, res)
{
	var cantidad = _.random(5,10);
	var posteos = _.times(cantidad, generaPost);
	res.json(posteos);
});

app.listen(3000);