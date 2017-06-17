import ds = require('./AMDdataservice')

var dataservice = new ds.DataServiceAMD();

export interface IAlerterADM {
    name: string;
    showMessage(): void;
}

export class AlerterAMD implements IAlerterADM {
    name = 'John';
    showMessage() {
        var msg = dataservice.getMessage();
        toastr.info(msg + ', ' + this.name);
    };
}
