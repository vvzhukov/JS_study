/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var words = tweet.split(' ');
    var result = [];
    for (var i = 0; i < words.length; i++) {
        var hashstr = words[i].toString();
        if (hashstr.startsWith('#')) {
            result.push(hashstr.substring(1));
        }
    }
    // console.log(result);
    return result;
};
