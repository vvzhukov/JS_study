/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (vary) {
    return {
        ffirst: function (num) {
            vary += num;
            return this;
        },
        ssecond: function (num) {
            vary -= num;
            return this;
        }
    }
}