var angles;
var slider;

function setup(){
    createCanvas(1200, 800);
}

function draw(){
    background(51);
    stroke(255);
    translate(width/2, height);
    tree(250, PI/6);
}

function tree(branch_length, angle){
    line(0, 0, 0, -branch_length);
    translate(0, -branch_length);
    if(branch_length > 4)
    {
        push();
        rotate(angle);
        tree(branch_length * 0.67, angle);
        pop();
        push();
        rotate(-angle);
        tree(branch_length * 0.67, angle);
        pop();
    }
}
