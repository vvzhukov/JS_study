// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
if (typeof phbook === 'undefined') {
    var phbook = {};
    module.exports = phbook;
}
module.exports = function (command) {
    // ...
    var commandName = command.split(' ')[0];

     // console.log(commandName);
    // ...

    // Обработка команды ADD
    if (commandName === 'ADD') {
        var name = command.split(' ')[1];
        var phones = command.split(' ')[2];
        var phone = phones.split(',');

        if (phbook.hasOwnProperty(name)) {
            for (var i = 0; i < phone.length; i++) {
                phbook[name].push(phone[i]);
            }
        }
        else {
            phbook[name] = phone;
        }
        // console.log(phbook);
        // Не забыть вернуть результат выполнения функции addContact
        return phbook;
    }
    // Обработка команды REMOVE
    if (commandName === 'REMOVE_PHONE') {
        // ...
        var phone = command.split(' ')[1];
        // console.log(phone);
        // console.log(phbook);

        for (var p in phbook) {
            for (var i in phbook[p]) {
            //    console.log(phbook[p][i]);
                if (phbook[p][i] === phone.toString()) {
                  //  console.log('got ya!');
                    phbook[p].splice(i, 1);
                    if (phbook[p].length === 0) {
                        // console.log('no phones detected!')
                        delete phbook[p];
                    }
                    return true;
                }
                }
            }
        // console.log(phbook);
        return false;
    }
    // Обработка команды SHOW
    if (commandName === 'SHOW') {
        var strphbook = [];
        var i = 0;
        for (var property in phbook) {
            strphbook[i] = property + ': ' + phbook[property].join(', ');
            i++;
        }
        // console.log(strphbook.sort());
        return strphbook.sort();
    }
};
