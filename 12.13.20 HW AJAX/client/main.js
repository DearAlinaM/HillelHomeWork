function registrationCheckHW() {

    function ajaxFunction({ method, url, succ, error, postInfo }) {
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


    function userCheck(infoForAjaxPart) {
    
        let data = {
            form: document.querySelector('#regForm'),
            getData() { // сбор инфы с полей

                let sendData = {};
                    [].forEach.call(this.form, ({ name, value, tagName }) => {
                        if (tagName !== 'INPUT') {
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
                // ajaxFunction(generalInfo);
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

    // let myFormId = '#regForm';
    userCheck( xhrObj);
}

registrationCheckHW()
