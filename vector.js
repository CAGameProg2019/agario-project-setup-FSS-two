class Vector {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    addVector(vec){
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }
//functions to write for homework
    subVector(vec){

    }

    scale(s){

    }
    
    print() {
        console.log('<'+ this.x +','+ this.y + '>');
    }
}
