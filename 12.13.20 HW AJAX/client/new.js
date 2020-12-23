

class RegData {
    constructor(name, id, infoAjax) {
        this.name = name,
        this.id = id;
        this.form = document.querySelector(this.id);
        this.ajaxObj = infoAjax;

    };
    dataToSend(info1, loginPass) { /// отправка инфы на сервер
        let generalInfo = { ...info1,  loginPass}
        this.ajaxFunction(generalInfo);
    };

    submit() { // клик на кнопку 
        let { login, password } = this.getData();
        this.dataToSend( this.ajaxObj, { login, password }); 
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
            // console.log(this.response);
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
            createAnswer(responce);
        },
        error(err) {
            createAnswer(err);
        }
    };
    

let newData = new RegData('newData', '#regForm', xhrObj);
let subBut = newData.form;

subBut.addEventListener('submit',
    (e) => {
        newData.submit();
        e.preventDefault();
    }
);



