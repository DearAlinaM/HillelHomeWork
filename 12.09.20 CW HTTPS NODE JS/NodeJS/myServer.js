var express = require("express"); // подключить express(упрощение для NodeJs) из папки node_modules
var fs = require("fs"); // fs -- объект который дает возможность читать файлы(например json)
var bodyParser = require("body-parser"); // 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs
var app = express();

const prod = [
    { name: 'apple', quantity: 2 },
    {name: 'APPLE', quantity: 2}
]


const port = 1234;

app.listen(port, function() {
    console.log(`Example app listening on port http://localhost:${port}/`);

});

app.get('/get-user-info', function (req, resp) {
    fs.readFile('./models/any.json', 'utf-8', function (err, cor) {
        resp
            .send(cor)
    })
    
})