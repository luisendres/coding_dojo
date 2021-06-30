function warning() {
    var lost = document.getElementById("live");
    lost.classList.remove("sneak")
    alert("Loading weather report...")
}

function away() {
    var lost = document.getElementById("live");
    lost.classList.add("sneak")
}


function degrees(element) {
    var fah = document.getElementById("f").innerText;
    var cel = document.getElementById("c").innerText;
    var deg = element.value;
    console.log(deg);
    if (deg == fah) {
        console.log("wow");
        document.getElementById("rainH").innerHTML = '75°';
        document.getElementById("rainL").innerHTML = '65°';
        document.getElementById("sunH").innerHTML = '80°';
        document.getElementById("sunL").innerHTML = '66°';
        document.getElementById("cloudsH").innerHTML = '69°';
        document.getElementById("cloudsL").innerHTML = '61°';
        document.getElementById("someSunH").innerHTML = '78°';
        document.getElementById("someSunL").innerHTML = '70°';
    }else if (deg == cel) {
        console.log("wow");
        document.getElementById("rainH").innerHTML = '24°';
        document.getElementById("rainL").innerHTML = '18°';
        document.getElementById("sunH").innerHTML = '27°';
        document.getElementById("sunL").innerHTML = '19°';
        document.getElementById("cloudsH").innerHTML = '21°';
        document.getElementById("cloudsL").innerHTML = '16°';
        document.getElementById("someSunH").innerHTML = '26°';
        document.getElementById("someSunL").innerHTML = '21°';
    }
}
