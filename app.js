

// const switcher = document.querySelector('.btn');

// switcher.addEventListener('click', function() {
//     console.log('current class name: ' );
// });
// document.querySelector("select").addEventListener("change", function(e){

// team1_last_sign = 0;
// team2_last_sign = 0;
// team3_last_sign = 0;
// team4_last_sign = 0;




const last_signs = {
    team1_: [-1,-1,"a", "A"],
    team2_: [-1,-1,"a", "A"],
    team3_: [-1,-1,"a", "A"],
    team4_: [-1,-1,"a", "A"]
};

function table(e, team){
        team = e.target.name
        team = "team" + team + "_";
        // console.log(team);
        let val = e.target.value;
        

        // Красим галочки и крестики
        if (e.target.value[1] == 0){
            e.target.style.color = "#000000";
        }
        
        // if (e.target.value[1] == 1){
        //     e.target.style.color = "#04ff00";
        // }
        // if (e.target.value[1] == 2){
        //     e.target.style.color = "#e33232";
        // }

        // if (e.target.value[1] == 3){
        //     e.target.style.color = "#000000";
        // }

        if (e.target.value[1] == 4 ){
            e.target.style.color = "#e82020";
        }

        // Запись баллов каждой клеточки
        if (val[0] == "a"){
            var sum = localStorage.getItem(team + "a_sum");
            var bred = localStorage.getItem("t_sadsdasum");
            
            // Если предыдущие значение было галкой
            if (last_signs[team][0] == 1 && last_signs[team][2] == e.target.value[0] && last_signs[team][3] == e.target.value[2] || last_signs[team][0] == 3 && last_signs[team][2] == e.target.value[0] && last_signs[team][3] == e.target.value[2]){ 
                sum = sum - last_signs[team][1];
            }

            if (sum == bred){
                localStorage[team + "a_sum"] = Number(val.substr(4));
            }
            else{
                localStorage[team + "a_sum"] = Number(sum) + Number(val.substr(4));
            }
            // localStorage[team + "a_sum"] = Number(val.substr(3));
            document.getElementById(team + "apre").innerHTML = localStorage.getItem(team + "a_sum");
            
            // localStorage[team + "a_sum"] = Number(val.substr(3));
            // document.getElementById(team + "apre").innerHTML = localStorage.getItem(team + "a_sum");
        }
        if (val[0] == "b"){
            var sum = localStorage.getItem(team + "b_sum");
            var bred = localStorage.getItem("t_sadsdasum");

            // Если предыдущие значение было галкой
            if (last_signs[team][0] == 1 && last_signs[team][2] == e.target.value[0] && last_signs[team][3] == e.target.value[2] || last_signs[team][0] == 3 && last_signs[team][2] == e.target.value[0] && last_signs[team][3] == e.target.value[2]){ 
                sum = sum - last_signs[team][1];
            }

            if (sum == bred){
                localStorage[team + "b_sum"] = Number(val.substr(4));
            }
            else{
                localStorage[team + "b_sum"] = Number(sum) + Number(val.substr(4));
            }
            // localStorage[team + "a_sum"] = Number(val.substr(3));
            document.getElementById(team + "bpre").innerHTML = localStorage.getItem(team + "b_sum");
        }
        if (val[0] == "c"){
            // localStorage[team + "c_sum"] = Number(val.substr(3));
            // document.getElementById(team + "cpre").innerHTML = localStorage.getItem(team + "c_sum");
            var sum = localStorage.getItem(team + "c_sum");
            var bred = localStorage.getItem("t_sadsdasum");

            // Если предыдущие значение было галкой
            if (last_signs[team][0] == 1 && last_signs[team][2] == e.target.value[0] && last_signs[team][3] == e.target.value[2] || last_signs[team][0] == 3 && last_signs[team][2] == e.target.value[0] && last_signs[team][3] == e.target.value[2]){ 
                sum = sum - last_signs[team][1];
            }

            if (sum == bred){
                localStorage[team + "c_sum"] = Number(val.substr(4));
            }
            else{
                localStorage[team + "c_sum"] = Number(sum) + Number(val.substr(4));
            }
            // localStorage[team + "a_sum"] = Number(val.substr(3));
            document.getElementById(team + "cpre").innerHTML = localStorage.getItem(team + "c_sum");
        }
        if (val[0] == "d"){
            // var sum = localStorage.getItem("team1_d_sum");
            // var bred = localStorage.getItem("t_sadsdasum");
            // if (sum == bred){
            //     localStorage["team1_d_sum"] = Number(val.substr(1));
            // }
            // else{
            //     localStorage["team1_d_sum"] = Number(sum) + Number(val.substr(1));
            // }
            // localStorage["team1_d_sum"] = Number(val.substr(3));
            // document.getElementById("team1_dpre").innerHTML = localStorage.getItem("team1_d_sum");

            // localStorage[team + "d_sum"] = Number(val.substr(3));
            // document.getElementById(team + "dpre").innerHTML = localStorage.getItem(team + "d_sum");

            var sum = localStorage.getItem(team + "d_sum");
            var bred = localStorage.getItem("t_sadsdasum");

            // Если предыдущие значение было галкой
            if (last_signs[team][0] == 1 && last_signs[team][2] == e.target.value[0] && last_signs[team][3] == e.target.value[2] || last_signs[team][0] == 3 && last_signs[team][2] == e.target.value[0] && last_signs[team][3] == e.target.value[2]){ 
                sum = sum - last_signs[team][1];
            }

            if (sum == bred){
                localStorage[team + "d_sum"] = Number(val.substr(4));
            }
            else{
                localStorage[team + "d_sum"] = Number(sum) + Number(val.substr(4));
            }
            // localStorage[team + "a_sum"] = Number(val.substr(3));
            document.getElementById(team + "dpre").innerHTML = localStorage.getItem(team + "d_sum");
        }
        // localStorage["team1_sum"] = Number(localStorage["team1_a_sum"]) + Number(localStorage["team1_b_sum"]) + Number(localStorage["team1_c_sum"]) + Number(localStorage["team1_d_sum"]);
        // document.getElementById("team1_everything_sum").innerHTML = localStorage["team1_sum"];
        localStorage[team + "sum"] = Number(localStorage[team + "a_sum"]) + Number(localStorage[team + "b_sum"]) + Number(localStorage[team + "c_sum"]) + Number(localStorage[team + "d_sum"]);
        document.getElementById(team + "everything_sum").innerHTML = localStorage[team + "sum"];

        // Запоминаем последний измененный символ
        last_signs[team] = [e.target.value[1], Number(val.substr(4)), e.target.value[0], e.target.value[2]];
}



let selects = document.querySelectorAll("select");
var t = 1;
for (let k=0; k < selects.length; k++){
    //listener to each select
    t = ~~(k/16) + 1;
    // console.log(k, t)
    selects[k].addEventListener("change", function(e){table(e, t)})
}    
