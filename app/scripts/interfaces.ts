module demo {

    interface SquareFunction {
        (x: number): number;
    }
    var squareItBasic: SquareFunction = (num) => num * num;




    interface Rectangle {
        h: number;
        w?: number;
    }

    var squareIt: (rect: Rectangle) => number;
    //var squareIt: (rect: {h: number; w?: number;}) => number;

    var rectA = {h: 7};
    var rectB = {h: 7, w: 12};

    squareIt = function(rect){
        if(rect.w !== undefined){
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    }

    console.log(squareIt(rectA));
    console.log(squareIt(rectB));


    //person interface
    interface Person {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }


    var p: Person = {
        name: 'Carolina',
        age: 30,
        kids: 0,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
            return msg + ', ' + this.name;
        },
       // favoriteMovie: 'LOTR',
    };

    var pets = p.calcPets();
    console.log(pets);

    p.makeYounger(15);
    console.log(p.age);

    var msg = p.greet('Good day to you');
    console.log(msg);







    interface SessionEval {
        addRating: (rating: number) => void;
        calcRating: () => number;
    }

    function sessionEvaluator(): SessionEval {
        var ratings: number[] = [];
        var addRating = (rating: number = 5) =>
            ratings.push(rating);
        ;
        var calcRating = () => {
            var sum: number = 0;
            ratings.forEach(function (score) {
                sum += score;
            });

            return sum / ratings.length;
        };

        return {
            addRating: addRating,
            calcRating: calcRating
        }
    }

    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(5);
    s.addRating(5);
    console.log(s.calcRating());
}