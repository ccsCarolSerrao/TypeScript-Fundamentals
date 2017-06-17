import al = require('./AMDAlerter')

export function run(){
    var alerter = new al.AlerterAMD();

    alerter.showMessage();
}
