// code your solution here!
function superbowlWin(record) {
    let win = record.find(function(game) {
        return game.result === "W";
    });
    return win ? win.year : undefined;
}

