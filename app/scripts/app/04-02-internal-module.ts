interface IRetangle{
    height: number;
    width: number;
    getArea(): number;
}

namespace Shapes{

    export class Rectangle implements IRetangle{
        constructor(
            public height: number,
            public width: number){}
            getArea() {return this.height + this.width}
    }
}

namespace myProgram{

    function run(){
        var rect: IRetangle = new Shapes.Rectangle(4, 10);
        var area = rect.getArea();

        toastr.info('area = ' + area);
    }

    run();
}