let F = prompt('сила действующая на тело', 'H');
let m = prompt('введите массу тела', 'кг');
let result;
result = parseInt(F) / parseInt(m);

document.write(
  '************<br />' +
    'Ускорение тела при силе F = ' +
    F +
    ', и массе m = ' +
    m +
    ':' +
    '<br /> ------------<br />' +
    'a = ' +
    result +
    '.' +
    '<br />------------ <br />' +
    'end'
);
