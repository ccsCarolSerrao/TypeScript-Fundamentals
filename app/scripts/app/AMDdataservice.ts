 export interface IDataServiceAMD {
    msg: string;
    getMessage(): string;
};

export class DataServiceAMD implements IDataServiceAMD {
    msg = 'Welcome to the Show!';
    getMessage() { return this.msg; }
}

