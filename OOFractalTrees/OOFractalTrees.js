var tree = []

function setup(){
    createCanvas(500, 500);
}


function mousePressed(){
    for(var i = tree.length - 1; i >= 0; i--){
        tree.push(tree[i].rightBranch())
        tree.push(tree[i].leftBranch())
    }
}


function draw(){
    background(30, 100, 255);
    stroke(0, 255, 0);
    var begin = createVector(width/2, height)    
    var end = createVector(width/2, height/1.5)    
    var root = new Branch(begin, end);
    tree[0] = root

    for(var i = 0; i < tree.length; i++){
        tree[i].show()
    }
}



