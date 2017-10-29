const Command = require('./command');
const { Message, OpType, Location, Profile } = require('../curve-thrift/line_types');

class LINE extends Command {
    constructor() {
        super();
    }

}

module.exports = LINE;
