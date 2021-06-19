for (var i = 25; i > 0; i--) {
    let slider = document.createElement("div");
    slider.setAttribute("class", "slider animate");
    slider.setAttribute("id", "slider" + i);
    document.getElementById("game").append(slider);
}
// document.addEventListener("keydown", function (event) { jump(); });
var out = false;
var slideWidth = 400;
function fade() {
    setTimeout(function () {
        $('#start').fadeOut();
    }, 100);
}
function stopSliding(slider) {
    console.log(slider);
    var sliderCurrent = document.getElementById("slider".concat(slider));
    var sliderAbove = document.getElementById("slider".concat(slider + 1));
    if (slider % 2 == 1) {
        sliderCurrent.style.backgroundImage = "url('build.png')"
    } else {
        sliderCurrent.style.backgroundImage = "url('build2.png')"
    }
    if (slider == 1) {
        var sliderBelow = sliderCurrent;
    } else {
        var sliderBelow = document.getElementById("slider".concat(slider - 1));
    }
    document.getElementById("score").textContent = "SCORE : " + slider;
    var left = window.getComputedStyle(sliderCurrent).getPropertyValue("left");
    sliderCurrent.classList.remove("animate");
    sliderCurrent.style.left = left;
    var width = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue("width"));
    var leftBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue("left"));
    left = parseInt(left);
    var difference = left - leftBelow;
    var absDifference = Math.abs(difference);
    // if (difference > width || difference < -width) {
    //     var score = "score: ".concat(slider - 1);
    //     alert(score)
    // }
    if (difference < 0 && absDifference < width) {
        left = left + absDifference;
        sliderCurrent.style.width = (width - absDifference).toString().concat("px");
        sliderCurrent.style.left = left.toString().concat("px");
        sliderAbove.style.width = (width - absDifference).toString().concat("px");
    }
    else if (difference >= 0 && absDifference < width) {
        sliderCurrent.style.width = (width - absDifference).toString().concat("px");
        sliderCurrent.style.left = left.toString().concat("px");
        sliderAbove.style.width = (width - absDifference).toString().concat("px");
    }
    else if (absDifference >= width || slider == 24) {
        document.getElementById("btn").style.display = "none";
        out = true;
        console.log(out)
    }

    // } else {
    //     left = left - difference
    //     sliderCurrent.style.left = left.toString().concat("px");
    // }
    // var offSet = (width - absDifference).toString().concat("px");
    // sliderCurrent.style.width = offSet;
    // sliderAbove.style.width = offSet;
    sliderAbove.style.visibility = "visible";
    slideWidth = slideWidth + absDifference;
    document.documentElement.style.setProperty('--width', slideWidth + "px");
    if (out == true) {
        sliderAbove.style.visibility = "hidden";
        // document.getElementById("all").style.visibility = 50;
        document.getElementById("all").style.filter = "blur(10px)";
        document.getElementById("resu").textContent = "SCORE : " + (slider - 1);
        document.getElementById("end").style.display = "block";



    }
    else {
        var onclick = "stopSliding(" + (slider + 1) + ")";
        console.log(onclick);
        document.getElementById("btn").setAttribute("onclick", onclick)
    }
}

function restart() {
    window.location.reload();
}