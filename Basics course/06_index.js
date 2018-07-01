
/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var spassed = Date.parse(date);
        return {
            value: date,
            secs: spassed,
            add: function (dadd, wadd, flag) {
                //Integer
                if (typeof flag === 'undefined') {flag = 1;}
                    else {flag = -1;}

                if (dadd < 0) {throw new TypeError;}
                    else {
                        d1 = new Date(this.secs);
                        switch (wadd) {
                            case 'minutes':
                                d1.setMinutes(d1.getMinutes() + dadd * flag);
                                break;
                            case 'hours':
                                d1.setMinutes(d1.getMinutes() + dadd * 60 * flag);
                                break;
                            case 'days':
                                d1.setMinutes(d1.getMinutes() + dadd * 60 * 24 * flag);
                                break;
                            case 'months':
                                d1.setMonth(d1.getMonth() + dadd * flag);
                                break;
                            case 'years':
                                d1.setFullYear(d1.getFullYear() + dadd * flag);
                                break;
                            default:
                                throw new TypeError;
                        }
                        this.secs = Date.parse(d1);
                        var a = d1;
                        var year = a.getFullYear();
                        var month = a.getMonth() + 1; // getMonth range 0...11
                        var monthstr = (month.toString().length<2 ? '0' + month : month);
                        var date = (a.getDate().toString().length<2 ? '0' + a.getDate() : a.getDate());
                        var hour = (a.getHours().toString().length<2 ? '0' + a.getHours() : a.getHours());
                        var min = (a.getMinutes().toString().length<2 ? '0' + a.getMinutes() : a.getMinutes());
                        var time = year + '-' + monthstr + '-' + date + ' ' + hour + ':' + min;
                        //"YYYY‒MM‒DD HH:MM"
                        this.value = time;
                    }
                return this;
            },
            subtract: function (dadd, wadd) {
                if (dadd<0) {
                    throw new TypeError;
                }
                else {
                    this.add(dadd, wadd, -1);
                    }
                return this;
            }
        }
};