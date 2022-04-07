'use strict'

// const switcher = document.querySelector('.btn');

// switcher.addEventListener('click', function() {
//     console.log('current class name: ' );
// });
// document.querySelector("select").addEventListener("change", function(e){
let selects = document.querySelectorAll("select");
// // alert(selects[0].length);


// document.getElementById("apre").innerHTML = localStorage.getItem("team1_a_sum");
// document.getElementById("bpre").innerHTML = localStorage.getItem("team1_b_sum");
// document.getElementById("cpre").innerHTML = localStorage.getItem("team1_c_sum");
// document.getElementById("dpre").innerHTML = localStorage.getItem("team1_d_sum");
// localStorage["team1_sum"] = Number(localStorage["team1_a_sum"]) + Number(localStorage["team1_b_sum"] + Number(localStorage["team1_c_sum"]) + Number(localStorage["team1_d_sum"]));
// document.getElementById("everything_sum").innerHTML = localStorage["team1_sum"];

for (let k=0; k < selects.length; k++){
    
    // document.querySelector("select").addEventListener("change", function(e){
    // let val = e.target.value;
    selects[k].addEventListener("change", function(e){
    // let val = selects[k].value;
    let val = e.target.value;
    if (e.target.textContent == "X"){
        // e.target.style.background-color = "#7be2c3d5";
        e.target.style.visibility = 'hidden';
    }
    // alert(val);
    // localStorage.clear()
    if (val[0] == "a"){
        var sum = localStorage.getItem("team1_a_sum");
        var bred = localStorage.getItem("t_sadsdasum");
        if (sum == bred){
            localStorage["team1_a_sum"] = Number(val.substr(1));
        }
        else{
            localStorage["team1_a_sum"] = Number(sum) + Number(val.substr(1));
        }
        // localStorage.setItem("team1_a_sum", Number(sum) + Number(val.substr(1)));
        // alert(localStorage.getItem("team1_a_sum"));
        
        document.getElementById("apre").innerHTML = localStorage.getItem("team1_a_sum");
        // localStorage["team1_sum"] = Number(localStorage["team1_a_sum"]) + Number(localStorage["team1_b_sum"] + Number(localStorage["team1_c_sum"]) + Number(localStorage["team1_d_sum"]));
        // document.getElementById("everything_sum").innerHTML = localStorage["team1_sum"];
    }
    if (val[0] == "b"){
        var sum = localStorage.getItem("team1_b_sum");
        var bred = localStorage.getItem("t_sadsdasum");
        if (sum == bred){
            localStorage["team1_b_sum"] = Number(val.substr(1));
        }
        else{
            localStorage["team1_b_sum"] = Number(sum) + Number(val.substr(1));
        }
        // localStorage.setItem("team1_a_sum", Number(sum) + Number(val.substr(1)));
        // alert(localStorage.getItem("team1_b_sum"));
        document.getElementById("bpre").innerHTML = localStorage.getItem("team1_b_sum");
        // localStorage["team1_sum"] = Number(localStorage["team1_a_sum"]) + Number(localStorage["team1_b_sum"] + Number(localStorage["team1_c_sum"]) + Number(localStorage["team1_d_sum"]));
        // document.getElementById("everything_sum").innerHTML = localStorage["team1_sum"];
    }
    if (val[0] == "c"){
        var sum = localStorage.getItem("team1_c_sum");
        var bred = localStorage.getItem("t_sadsdasum");
        if (sum == bred){
            localStorage["team1_c_sum"] = Number(val.substr(1));
        }
        else{
            localStorage["team1_c_sum"] = Number(sum) + Number(val.substr(1));
        }
        // localStorage.setItem("team1_a_sum", Number(sum) + Number(val.substr(1)));
        // alert(localStorage.getItem("team1_c_sum"));
        document.getElementById("cpre").innerHTML = localStorage.getItem("team1_c_sum");
        // localStorage["team1_sum"] = Number(localStorage["team1_a_sum"]) + Number(localStorage["team1_b_sum"] + Number(localStorage["team1_c_sum"]) + Number(localStorage["team1_d_sum"]));
        // document.getElementById("everything_sum").innerHTML = localStorage["team1_sum"];
    }
    if (val[0] == "d"){
        var sum = localStorage.getItem("team1_d_sum");
        var bred = localStorage.getItem("t_sadsdasum");
        if (sum == bred){
            localStorage["team1_d_sum"] = Number(val.substr(1));
        }
        else{
            localStorage["team1_d_sum"] = Number(sum) + Number(val.substr(1));
        }
        // localStorage.setItem("team1_a_sum", Number(sum) + Number(val.substr(1)));
        // alert(localStorage.getItem("team1_d_sum"));
        document.getElementById("dpre").innerHTML = localStorage.getItem("team1_d_sum");
        // localStorage["team1_sum"] = Number(localStorage["team1_a_sum"]) + Number(localStorage["team1_b_sum"] + Number(localStorage["team1_c_sum"]) + Number(localStorage["team1_d_sum"]));
        // document.getElementById("everything_sum").innerHTML = localStorage["team1_sum"];
    }
    // console.log(Number(localStorage["team1_a_sum"]), localStorage["team1_b_sum"], localStorage["team1_c_sum"],localStorage["team1_d_sum"]);
    // console.log(Number(localStorage["team1_a_sum"])+ Number(localStorage["team1_b_sum"])+Number(localStorage["team1_c_sum"])+Number(localStorage["team1_d_sum"]));
    localStorage["team1_sum"] = Number(localStorage["team1_a_sum"]) + Number(localStorage["team1_b_sum"]) + Number(localStorage["team1_c_sum"]) + Number(localStorage["team1_d_sum"]);
    document.getElementById("team1_everything_sum").innerHTML = localStorage["team1_sum"];
    // localStorage["team1_sum"] = Number(localStorage["team1_a_sum"]) + Number(localStorage["team1_b_sum"] + Number(localStorage["team1_c_sum"]) + Number(localStorage["team1_d_sum"]));
    // console.log(localStorage["team1_sum"]);
    

    }
    )
    

}    
