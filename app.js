var wrapperEle = document.body.querySelector(".wrapper");
var damageEle = document.body.querySelector(".damage");
var list = [{name: "Fire Attack", damage: 3}, {name: "Ice Attack", damage: 1}, {name: "Poison Attack", damage: 4}]

var dragon_damage = 0;


for (var i = 0; i < list.length; i++) {
         makeElement(list[i].name, list[i].damage);

     }

function makeElement(name, damage) {
    var Attackele = document.createElement("button");
    Attackele.innerHTML = name;
    wrapperEle.appendChild(Attackele)
    Attackele.addEventListener("click", function () {

        AttackDragon(name, damage)


    })
}

function AttackDragon(name, damage) {
    if (name === "Fire Attack") {
        dragon_damage = dragon_damage + damage - 1
        damageEle.innerHTML= dragon_damage


    } else if (name === "Ice Attack") {
        dragon_damage = dragon_damage + damage + 1
        damageEle.innerHTML = dragon_damage
    } if (name === "Poison Attack"){
        dragon_damage = dragon_damage + damage
        damageEle.innerHTML = dragon_damage
    } if(dragon_damage >= 10) {
        condition = true
        wrapperEle.innerHTML= "The user wins!"
    }


}
document.body.appendChild(wrapperele);

