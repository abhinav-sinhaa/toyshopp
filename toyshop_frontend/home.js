let count =0 ;

function isClicked() {
    ++count;
    let x  = document.getElementById("age0");
    if(count%2 === 0) {
        x.style.display = "none";
    }
    else {
        x.style.display = "inline-block";
    }
}

