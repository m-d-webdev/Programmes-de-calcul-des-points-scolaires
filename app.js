function calculer() {
    var math = document.getElementById("math").value;
    var pc = document.getElementById("pc").value;
    var svt = document.getElementById("svt").value;
    var philosophie = document.getElementById("phpilo").value;
    var english = document.getElementById("anglais").value;
    const inputt = document.getElementById("resultinput");

    const notemath = math * 7;
    const notepc = pc * 7;
    const notesvt = svt * 5;
    const noteanglais = english * 3;
    const notephilo = philosophie * 2;
    a = noteanglais + notemath + notepc + notesvt + notephilo;

    if (math > 20 || pc > 20 || svt > 20 || english > 20 || philosophie > 20) {
        alert("entre des notes valid ");
    }
    else {
        inputt.innerHTML = a / 24;

    }

}
function calculermoyenne() {
    var regio = document.getElementById("noteregio").value;
    var generale = document.getElementById("moygene").value;
    var nationnale = document.getElementById("moynationnale").value;
    const resul = document.getElementById("resultmoyenne");
    demo = document.getElementById("demo");
    dmo2 = document.getElementById("demo2");
    var partmonion = document.getElementById("natija");
    errorr = "Une faux";
    regionote = regio * 0.25;
    annnenote = generale * 0.25;
    nationote = nationnale * 0.50;

    moyyen = regionote + annnenote + nationote;

    resul.innerHTML = moyyen;
    if (regio > 20 || generale > 20 || nationnale > 20) {
        resul.innerHTML = errorr;
        partmonion.style.visibility = "hidden";
        demo.innerHTML = "les note sont incorrect";
        resul.style= "none";

    }

    if (regio < 0 || generale < 0 || nationnale < 0) {
        demo.innerHTML = "les note sont incorrect";
        resul.innerHTML = errorr;
        partmonion.style.visibility = "hidden";
        resul.style= "none";
    }

    else {
        if (moyyen >= 10 && moyyen <= 20  && regio <= 20 && regio >= 0 && generale <= 20 && generale >= 0 && nationnale <= 20 && nationnale >= 0) {
            demo.innerHTML = " valid";
            partmonion.style.visibility = "visible"
            if (moyyen >= 10 && moyyen <= 11.99  && regio <= 20 && regio >= 0 && generale <= 20 && generale >= 0 && nationnale <= 20 && nationnale >= 0) {
                demo2.innerHTML = "passable"
                document.getElementById("demo2").style.color = "rgb(0, 229, 255)";
                resul.style.filter= "drop-shadow(1px 1px 6px rgb(0, 229, 255))";
                document.getElementById("demo2").style.filter= "drop-shadow(1px 1px 1px black)";

            }
            if (moyyen >= 12 && moyyen <= 14.50  && regio <= 20 && regio >= 0 && generale <= 20 && generale >= 0 && nationnale <= 20 && nationnale >= 0) {
                demo2.innerHTML = "bien"
                document.getElementById("demo2").style.color = "rgb(0, 17, 255)";
                resul.style.filter= "drop-shadow(1px 1px 6px rgb(0, 17, 255))";               
                document.getElementById("demo2").style.filter= "drop-shadow(1px 1px 1px black)";



            } if (moyyen >= 14.50 && moyyen <= 17.99  && regio <= 20 && regio >= 0 && generale <= 20 && generale >= 0 && nationnale <= 20 && nationnale >= 0) {
                demo2.innerHTML = " Tre bien";
                document.getElementById("demo2").style.color = "rgb(0, 149, 2)";
                document.getElementById("demo2").style.filter= "drop-shadow(1px 1px 1px black)";
                resul.style.filter= "drop-shadow(1px 1px 6px rgb(0, 149, 2))";


            }
            if (moyyen >= 18 && moyyen <= 20  && regio <= 20 && regio >= 0 && generale <= 20 && generale >= 0 && nationnale <= 20 && nationnale >= 0) {
                demo2.innerHTML = " Exelent "
                document.getElementById("demo2").style.color = "yellow";
                document.getElementById("demo2").style.filter= "drop-shadow(1px 1px 1px black)";
                resul.style.filter= "drop-shadow(1px 1px 8px yellow)";


            }
        }
        if (moyyen < 10 && moyyen >= 0 && regio <= 20 && regio >= 0 && generale <= 20 && generale >= 0 && nationnale <= 20 && nationnale >= 0) {
            demo.innerHTML = "non valid";

        }
    }

}