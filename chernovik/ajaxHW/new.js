class RegData {
    constructor( id) {
        this.id = id;
        this.form = document.querySelector(this.id);
    };

    submit(info1) { //  1) оправка  логин/пароля и ajax объекта в функцию ajax;
        let loginPass = this.getData();
        let generalInfo = { ...info1, loginPass };
        this.ajaxFunction(generalInfo);
    };

    getData() { // сбор инфы с полей
        let sendData = {};
        [].forEach.call(this.form, ({ name, value, tagName }) => {
                if (tagName !== 'INPUT') {
                    return
                    }
                sendData[name] = value;
                });
                return sendData
    };
    
    ajaxFunction({ method, url, succ, error, loginPass }) {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function () {
            succ.call(xhr, this.response);
        });
        xhr.addEventListener('error', function () {
            console.log(error);
        });
        xhr.open(method, url);
        if (method === 'GET') {
            xhr.send();
        }
        else if (method === 'POST') {
            xhr.send(JSON.stringify(loginPass));
        }
    };
}


function createAnswer(respondFromServer) {
    let boxToDel = document.querySelector('div.answer');
    if (boxToDel) {
        boxToDel.remove();
    };
        let box = document.createElement('div');
        box.innerText = respondFromServer;
        box.classList.add('answer');
        document.body.append(box);
}

let xhrObj = {
        method: 'POST',
        url: 'http://localhost:1234/users',
        succ(responce) {
           if (responce === 'Unauthorized') {
               createAnswer(responce);
           }
           else {
               RegData.prototype.ajaxFunction({
                   method: 'POST',
                   url: `http://localhost:1234/users/goods`,
                   succ(responceFromGet) {
                       createAnswer(responceFromGet)
                   },
                   error(err) {
                       createAnswer(err);
                   },
                   loginPass: responce,
               });
            }
        },
        error(err) {
            createAnswer(err);
        }
};
    

let newData = new RegData('#regForm');
let subBut = newData.form;

subBut.addEventListener('submit',
    (e) => {
        newData.submit(xhrObj);
        e.preventDefault();
    }
);
