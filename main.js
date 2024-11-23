function triangleAreaCal(){
    var s1 = document.getElementById("side1").value;
    var s2 = document.getElementById("side2").value;
    var s3 = document.getElementById("side3").value;

    var semiPerimeter = (s1 + s2 + s3) / 2;

    var area = Math.sqrt(
        semiPerimeter *
        (semiPerimeter - s1) *
        (semiPerimeter - s2) *
        (semiPerimeter - s3)
    );

    var res = document.getElementById("triangleAreaRes")
    res.innerHTML = "The area of the triangle is: " + area.toFixed(2);
}


function MulAddCal(){
    var s1 = document.getElementById("val1").value;
    var s2 = document.getElementById("val2").value;
    var mul = Number(s1) * Number(s2)
    var div = Number(s1) / Number(s2)

    var res = document.getElementById("MulAdd")
    res.innerHTML = "Multiplication Result is:" + mul + " " +  " division Result is: " + div;
}

function stringConcat(){
    var string1 = document.getElementById("string1").value;

    var res = document.getElementById("stringConcat")
    res.innerHTML = "your final string is: " + "JavaScript " + string1
}
