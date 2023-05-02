//Chapter7

let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);


function moveUpDown(e){
    let robotPart = e.target;
    let top = 0;
    let id = setInterval(frame, 10)
    
    function frame(){
        robotPart.style.top = top + '%';
        top++;
        if(top === 20){
            clearInterval(id);
        }
    }
};




function moveRightLeft(e){
    let robotPart = e.target;
    let lft = 0;
    let id = setInterval(frame, 10);

    function frame(){
        robotPart.style.left = lft + '%';
        lft++;
        if(lft === 70){
            clearInterval(id);
        }
    }
};

let nose = document.getElementById('nose');
nose.addEventListener('click', moveUpDown2);

function moveUpDown2(e){
    let robotPart = e.target;
    let top = 0;
    let id = setInterval(frame, 10);

    function frame(){
        robotPart.style.top = top + '%';
        top++;
        if(top === 50){
            clearInterval(id);
        }
    }
};



