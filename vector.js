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

    dist(vec){
        let x = vec.x-this.x;
        let y = vec.y-this.y;
        return Math.sqrt(x*x + y*y);
    }

    magnitude(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }

    toDirVec(){
        this.scale(1/this.magnitude());
    }

    print() {
        console.log('<'+ this.x +','+ this.y + '>');
    }
}
