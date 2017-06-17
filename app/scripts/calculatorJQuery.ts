/// <reference path="../../node_modules/@types/jquery/index.d.ts"/>

$(document).ready(function () {
    var calc = new CalculatorJQuery('X','Y','Output');
});

class CalculatorJQuery {
    private x : JQuery;
    private y : JQuery;
    private output : JQuery;

    constructor(xId: string, yId: string, outputId: string) {
        this.x = $('#' + xId);
        this.y = $('#' + yId);
        this.output = $('#' + outputId);
        this.wireEvents();
    }

    wireEvents() {
        $('#Add').click(event => {
                this.output.html(this.add(parseInt(this.x.val().toString()), parseInt(this.y.val().toString())).toString())
            });
        $('#Subtract').click(event => {
                this.output.html(this.subtract(parseInt(this.x.val().toString()), parseInt(this.y.val().toString())).toString())
            });
    }

    add(x: number, y : number) {
        return x + y;
    }

    subtract(x : number, y: number) {
        return x - y;
    }
}



