let x = 0
function combien(l, a){
    let s = 0;
    for(let i = 0 ; i < l.length ; i++ ){
        if(Object.is(l[i], a)) s++;
    }
    return s
}
function my_round(x, y){
    return Math.round(x*(10**y))/(10**y);
}
function verif(ch){
    {x}globalThis 
    if (combien(ch, "/") === 0){
        try{
            if(ch!==""){
                if(Number(ch)>=0 && Number(ch)<=20) return Number(ch);
                else{
                    x += 1;
                    return -0;
                }
            }
            else return -0;
        }
        catch{
            x += 1;
            return -0;
        }
    }else{
        let mo = 0;
        let com = combien(ch, "/");
        console.log(com, "hi");
        for(let i = 0 ; i < com ; i++){
            mo += verif(ch.substring(0, ch.indexOf("/")));
            console.log(ch, "d");
            ch = ch.substr(ch.indexOf("/") + 1);
            console.log(ch, "f");
        }
        mo += verif(ch);
        return my_round(mo/(com + 1), 2);
    }
}
function calcul_moyen(a, b, c, d){
    l = [a, b, c, d, d];
    s = combien(l, -0);
    if (s == 5) return "_";
    else return my_round((a+b+c+d*2)/(5-s), 2);
}
function moyen_arab(a, b, c, d){
    if (calcul_moyen(-0, b, c, d) === "_") return "_";
    else if (a !== 0) return my_round((calcul_moyen(-0, b, c, d)*2+a)/3, 2);
    else if (a === 0) return calcul_moyen(a, b, c, d);
}
function s8ayrouna(lista){
    let s = 0;
    for (const i of lista){
        if (!(i === "_")) s+=i;
    }
    return s;
}
function append(lista, variabl){
    lista[lista.length]=variabl;
}
const moy = document.querySelector(".moy");
const mo1 = document.querySelector(".mo1")
const mo2 = document.querySelector(".mo2")
const mo3 = document.querySelector(".mo3")
const mo4 = document.querySelector(".mo4")
const mo5 = document.querySelector(".mo5")
const mo6 = document.querySelector(".mo6")
const mo7 = document.querySelector(".mo7")
const mo8 = document.querySelector(".mo8")
const mo9 = document.querySelector(".mo9")
const mo10 = document.querySelector(".mo10")
const mo11 = document.querySelector(".mo11")
const mo12 = document.querySelector(".mo12")
const mo13 = document.querySelector(".mo13")
const mo14 = document.querySelector(".mo14")
const mo15 = document.querySelector(".mo15")
const om1 = document.querySelector(".om1")
const om2 = document.querySelector(".om2")
const om3 = document.querySelector(".om3")
const om4 = document.querySelector(".om4")
const om5 = document.querySelector(".om5")
const om6 = document.querySelector(".om6")
const om7 = document.querySelector(".om7")
const om8 = document.querySelector(".om8")
const om9 = document.querySelector(".om9")
const om10 = document.querySelector(".om10")
const om11 = document.querySelector(".om11")
const om12 = document.querySelector(".om12")
const om13 = document.querySelector(".om13")
const om14 = document.querySelector(".om14")
const om15 = document.querySelector(".om15")
const fois_total = document.querySelector(".fois_total")
const om_total = document.querySelector(".om_total")
function ok(){
    {x}globalThis
    const l1 = [verif(document.getElementById("fois1").value), verif(document.getElementById("fois2").value), verif(document.getElementById("fois3").value), verif(document.getElementById("fois4").value), verif(document.getElementById("fois5").value), verif(document.getElementById("fois6").value), verif(document.getElementById("fois7").value), verif(document.getElementById("fois8").value), verif(document.getElementById("fois9").value), verif(document.getElementById("fois10").value), verif(document.getElementById("fois11").value), verif(document.getElementById("fois12").value), verif(document.getElementById("fois13").value), verif(document.getElementById("fois14").value), verif(document.getElementById("fois15").value)];
    const l2 = [verif(document.getElementById("ch1").value), verif(document.getElementById("ch2").value), verif(document.getElementById("ch3").value), verif(document.getElementById("ch4").value), verif(document.getElementById("ch5").value), verif(document.getElementById("ch6").value), verif(document.getElementById("ch7").value), verif(document.getElementById("ch8").value), verif(document.getElementById("ch9").value), verif(document.getElementById("ch10").value), verif(document.getElementById("ch11").value), verif(document.getElementById("ch12").value), verif(document.getElementById("ch13").value), verif(document.getElementById("ch14").value), verif(document.getElementById("ch15").value)];
    const l3 = [verif(document.getElementById("fm1").value), verif(document.getElementById("fm2").value), verif(document.getElementById("fm3").value), verif(document.getElementById("fm4").value), verif(document.getElementById("fm5").value), verif(document.getElementById("fm6").value), verif(document.getElementById("fm7").value), verif(document.getElementById("fm8").value), verif(document.getElementById("fm9").value), verif(document.getElementById("fm10").value), verif(document.getElementById("fm11").value), verif(document.getElementById("fm12").value), verif(document.getElementById("fm13").value), verif(document.getElementById("fm14").value), verif(document.getElementById("fm15").value)];
    const l4 = [verif(document.getElementById("mf1").value), verif(document.getElementById("mf2").value), verif(document.getElementById("mf3").value), verif(document.getElementById("mf4").value), verif(document.getElementById("mf5").value), verif(document.getElementById("mf6").value), verif(document.getElementById("mf7").value), verif(document.getElementById("mf8").value), verif(document.getElementById("mf9").value), verif(document.getElementById("mf10").value), verif(document.getElementById("mf11").value), verif(document.getElementById("mf12").value), verif(document.getElementById("mf13").value), verif(document.getElementById("mf14").value), verif(document.getElementById("mf15").value)];
    const l5 = [verif(document.getElementById("ft1").value), verif(document.getElementById("ft2").value), verif(document.getElementById("ft3").value), verif(document.getElementById("ft4").value), verif(document.getElementById("ft5").value), verif(document.getElementById("ft6").value), verif(document.getElementById("ft7").value), verif(document.getElementById("ft8").value), verif(document.getElementById("ft9").value), verif(document.getElementById("ft10").value), verif(document.getElementById("ft11").value), verif(document.getElementById("ft12").value), verif(document.getElementById("ft13").value), verif(document.getElementById("ft14").value), verif(document.getElementById("ft15").value)];
    let l6 = [];
    let l7 = [];
    if (x !== 0){
        moy.textContent = "error des reel";
        x = 0
    }else{
        if (l1[0]!==0 && moyen_arab(l2[0], l3[0], l4[0], l5[0]) !== "_"){
            append(l6, moyen_arab(l2[0], l3[0], l4[0], l5[0]));
            append(l7, my_round(l6[0] * l1[0], 2));
        }else{
            append(l6, "_");
            append(l7, "_");
        };
        for (let i = 1 ; i<l1.length; i++){
            if (l1[i]!==0 && calcul_moyen(l2[i], l3[i], l4[i], l5[i]) !== "_"){
                append(l6, calcul_moyen(l2[i], l3[i], l4[i], l5[i]));
                append(l7, my_round(l6[i] * l1[i], 2));
            }else{
                append(l6, "_");
                append(l7, "_");
            };
        }
        mo1.textContent = l6[0];
        mo2.textContent = l6[1];
        mo3.textContent = l6[2];
        mo4.textContent = l6[3];
        mo5.textContent = l6[4];
        mo6.textContent = l6[5];
        mo7.textContent = l6[6];
        mo8.textContent = l6[7];
        mo9.textContent = l6[8];
        mo10.textContent = l6[9];
        mo11.textContent = l6[10];
        mo12.textContent = l6[11];
        mo13.textContent = l6[12];
        mo14.textContent = l6[13];
        mo15.textContent = l6[14];
        om1.textContent = l7[0];
        om2.textContent = l7[1];
        om3.textContent = l7[2];
        om4.textContent = l7[3];
        om5.textContent = l7[4];
        om6.textContent = l7[5];
        om7.textContent = l7[6];
        om8.textContent = l7[7];
        om9.textContent = l7[8];
        om10.textContent = l7[9];
        om11.textContent = l7[10];
        om12.textContent = l7[11];
        om13.textContent = l7[12];
        om14.textContent = l7[13];
        om15.textContent = l7[14];
        fois_total.textContent = s8ayrouna(l1);
        om_total.textContent = my_round(s8ayrouna(l7), 2);
        moy.textContent = my_round(s8ayrouna(l7)/s8ayrouna(l1), 2);
    };
}