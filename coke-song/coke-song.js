function Song() {}

Song.prototype.verse = function (canNumber) {
    var canNumberMinusOne = parseInt(canNumber) - 1;
    if (canNumber > 2)
        return canNumber.toString() + ' cans of coke in the box, ' + canNumber.toString() + ' cans of coke.\nTake one down and pass it around, ' + canNumberMinusOne.toString() + ' cans of coke in the box.\n';
    if (canNumber === 2)
        return canNumber.toString() + ' cans of coke in the box, ' + canNumber.toString() + ' cans of coke.\nTake one down and pass it around, ' + canNumberMinusOne.toString() + ' can of coke in the box.\n';
    if (canNumber === 1)
        return '1 can of coke in the box, 1 can of coke.\nTake it down and pass it around, no more cans of coke in the box.\n';
    if (canNumber === 0)
        return 'No more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n';
}

Song.prototype.sing = function (startVerseNumber, endVerseNumber) {
    let song = "";

    if (startVerseNumber === undefined && endVerseNumber === undefined)
        return "full song";

    if (endVerseNumber === undefined) {
        while (startVerseNumber >= 0) {
            if (startVerseNumber == 0) {
                song = song.concat(this.verse(startVerseNumber));
            } else {
                song = song.concat(this.verse(startVerseNumber) + '\n');
            }
            startVerseNumber = startVerseNumber - 1;
        }

        return song;
    }

    if (startVerseNumber < endVerseNumber)
        return null;
    if (startVerseNumber === endVerseNumber)
        return this.verse(startVerseNumber);

    for (let i = startVerseNumber; i >= endVerseNumber; i--) {
        if (i > endVerseNumber)
            song = song.concat(this.verse(i) + '\n');
        else
            song = song.concat(this.verse(i) + '');
    }

    return song;
}

module.exports = Song;
