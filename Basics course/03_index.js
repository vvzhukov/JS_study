/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var result = [];
    for (var i = 0; i < hashtags.length; i++) {
        var hashstr = hashtags[i].toString().toLowerCase();
        if (result.indexOf(hashstr) === -1) {
            result.push(hashstr);
        }
    }
    // console.log(result.join(', '));
    return result.join(', ');
};
