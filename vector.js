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
    subVector(vec){//function that takes a vector and subtracts another vector from it
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }

    scale(s){//function that takes a scale factor s and multiplies the vector by that factor
        this.x *= s;
        this.y *= s;
        return this;
    }

    print() {
        console.log('<'+ this.x +','+ this.y + '>');
    }
}
