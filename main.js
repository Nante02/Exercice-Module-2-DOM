// Declaration du nom de la class où les couleurs changent
let color ="";

// Les fonctions des évennements sur les couleurs
function changeOne(){
    color = "color-one";
    console.log(color);
}
function changeTwo(){
    color = "color-two";
    console.log(color);
}
function changeThree(){
    color = "color-three";
    console.log(color);
}
function changeFour(){
    color = "color-four";
    console.log(color);
}

// Fonction de création du tableau
function  creatTable(){
    // Prise des information dans l'input
    let row = parseInt(document.getElementById("ranger").value);
    let col = parseInt(document.getElementById("colonne").value);
    // Recuperation de la table deja ecrit dans index
    let table = document.getElementById("result");
    //Suppression de tous c qui peut etre dans table
    table.innerHTML = '<table id="result"></table>';
    console.log(table);

    for (let i = 0; i< row; i++){
        // creation de ranger temporaire
        let rowTmp = document.createElement("tr");
        for (let j = 0; j< col; j++){
            //Creation colonne
            let colTmp = document.createElement("th");
            // attribuer la class cell a th
            colTmp.classList.add("cell");
            // ajouter un evenement de click sur chacun des th
            colTmp.addEventListener("click",()=>{
                // attribuer la class donner par color sur chaque th cliquer
                colTmp.classList.toggle(color);
                //supprimer la couleur precedente
                if (colTmp.classList.length > 2){
                    colTmp.classList.remove(colTmp.classList[1]);
                }
                console.log(colTmp.classList);
            });
            // ajouter un texte vide dans le colonne
            colTmp.textContent = " ";
            //inserer la balise th dans tr
            rowTmp.appendChild(colTmp);
         }
        //  inserer la balise tr dans la balise table
        table.appendChild(rowTmp);
        console.log(table);
    }

}


//Exercice 2

//Declaration du compteur hors de la boucle
let compter = [];

function run(){
    let num = Math.floor(Math.random() * 10);
    let essais = document.getElementById("input").value;
    let affichageEssai = document.getElementById("nbr-essais");
    let affichageRandom = document.getElementById("random");
    if(essais > 10 || essais < 1){
        alert("Seulement entre 1 - 10.")
    }

    if(num == essais){
        affichageRandom.textContent = `Le nombre = ${num}`;
        alert("Vous avez gagné!");
        essais.value = 0;
        affichageRandom.textContent = "Le nombre = ";
        affichageEssai.textContent = "Vos essais : ";
        compter = [];
    } else{
        affichageEssai.textContent += essais + " ";
        affichageRandom.textContent = `Le nombre = ${num}`;
        document.getElementById("msg").textContent = "Faux !";
        compter.push(essais);

    }
    console.log(compter);
    if (compter.length == 3){
        if (confirm("Vous avez perdu.\n Voulez vous recommencer?") == true) {
            console.log()
            essais.value = 0;
            affichageRandom.textContent = "Le nombre = ";
            affichageEssai.textContent = "Vos essais : ";
            compter = [];
            num = 0;
            document.getElementById("msg").textContent = "";

        }
    }
}

































