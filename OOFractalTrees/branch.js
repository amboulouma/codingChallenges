class Branch {
    constructor(begin, end) {
        this.begin = begin;
        this.end = end;
    }

    show(){
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    rightBranch(){
        var dir = p5.Vector.sub(this.end, this.begin)
        dir.rotate(PI/4)
        dir.mult(0.67)
        var newEnd = p5.Vector.add(dir, this.end)
        var rightBranch = new Branch(this.end, newEnd)
        return rightBranch
    }

    
    leftBranch(){
        var dir = p5.Vector.sub(this.end, this.begin)
        dir.rotate(-PI/4)
        dir.mult(0.67)
        var newEnd = p5.Vector.add(dir, this.end)
        var leftBranch = new Branch(this.end, newEnd)
        return leftBranch
    }
}
