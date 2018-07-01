/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var copyCollection = JSON.parse(JSON.stringify(collection));
    var functionsArr = [];
    var filteredArr = copyCollection;

    var args = [].slice.call(arguments);

    if(args.length === 1) {
        return copyCollection;
    }
    else {
        functionsArr = args.sort().splice(1);
    }

    functionsArr.forEach(function(func) {
        if(func.name === 'filters') {
            filteredArr = filteredArr.filter(function(item) {
                return func(item)
            })
        }
        else if (func.name === 'select') {
            filteredArr = filteredArr.map(function(item) {
                return func(item)
            })
        }


    })

    return filteredArr;
}


/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {

    if(arguments.length < 2 || arguments[1] === 0) {
        return;
    }

    return function filters (obj) {

        for (var i = 0; i < values.length; i++) {
            if(obj[property] === values[i]) {
                return true;
            }
        }
        return false;
    }

}

function select() {

    var args = [];
    for(var j = 0; j < arguments.length; j++) {
        args[j] = arguments[j];
    }

    return function select (obj) {
        var newObj = {};
        for(var key in obj) {
            args.forEach(function (value) {
                if(value === key) {
                    newObj[key] = obj[key];
                }
            })

        }
        if(Object.keys(newObj).length == 0) {
            return obj;
        }
        return newObj;
    }

}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
