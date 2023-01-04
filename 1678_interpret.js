/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let idx = command.indexOf('(al)');
    while (idx >= 0) {
        command = command.slice(0, idx) + 'al' + command.slice(idx + 4);
        idx = command.indexOf('(al)');
    }

    idx = command.indexOf('()');
    while (idx >= 0) {
        command = command.slice(0, idx) + 'o' + command.slice(idx + 2);
        idx = command.indexOf('()');
    }

    return command;
};