//var hello='hello world ! ! ! ';
//hello.replace(/\s/g,"")
//console.log(hello);

function lazyGuy() {}

lazyGuy.prototype.hey = function (sentence) {
    if (sentence.trim() === '')
        return 'Fine. Be that way!';

    let newSentence = sentence.replace(/\s/g, "");
    let sentenceWithNoDigits = newSentence.replace(/[0-9]/g, "");
    let upperCaseSentence = sentenceWithNoDigits.toUpperCase();
    if (sentenceWithNoDigits.charAt(sentenceWithNoDigits.length - 1) === "?") {
        if ((sentenceWithNoDigits.localeCompare(upperCaseSentence) === 0) && (sentenceWithNoDigits.length > 1))
            return 'Calm down, I know what I\'m doing!'
        else
            return 'Sure.'

    }

    if (sentenceWithNoDigits.localeCompare(upperCaseSentence) === 0)
        return 'Whoa, chill out!';
    else
        return 'Whatever.';

}

module.exports = lazyGuy;
