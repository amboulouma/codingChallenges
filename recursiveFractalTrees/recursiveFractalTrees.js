var angles;
function setup(){
    createCanvas(500, 500);
}

function draw(){
    background(30, 100, 255);
    stroke(0, 255, 0);
    translate(width/2, height);
    tree(150, PI/6);
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
