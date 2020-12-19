function registrationCheckHW() {

    function ajaxFunk({ method, url, succ, error, postInfo }) {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function () {
            succ.call(xhr, this.response);
        })
        xhr.addEventListener('error', function () {
            console.log(error);
        })
        xhr.open(method, url);
        if (method === 'GET') {
            xhr.send();
        }
        else if (method === 'POST') {
            xhr.send(JSON.stringify(postInfo));
        }
    }


    function userCheck(idForm, infoForAjaxPart) {
    
        let data = {
            form: document.querySelector(idForm),
            getData() { // сбор инфы с полей

                let sendData = {};
                    [].forEach.call(this.form, ({ name, value, tagName }) => {
                        if (tagName != 'INPUT') {
                            return
                        }
                        sendData[name] = value;
                    });
                return sendData
            },
            submit() {
            
                this.form.addEventListener('submit', function (e) {
                    let { login, password } = data.getData();
                    data.dataToSend(infoForAjaxPart, { login, password });
                    e.preventDefault();
                });
            },
        
            dataToSend(info1, postInfo) {
                let generalInfo = { ...info1, postInfo }
                ajaxFunk(generalInfo);
            }
        };

        data.submit();

    }


    function createAnswer(respondFromServer) {
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

    let myFormId = '#regForm';
    userCheck(myFormId, xhrObj);
}

registrationCheckHW()
