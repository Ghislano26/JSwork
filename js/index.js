                                        //Exercices sur les Types Primitifs 

// 1- Programme qui additionne deux nombres 

    let a = 9;
    let b = 10;
    let s;
        s = a + b;
    console.log(s);

// 2- Programme qui calcule la moyenne de trois nombres

    let n = 23;
    let z = 19;
    let t = 12;
    let m;
        m = (n + z + t)/3;
    console.log(m);

// 3- Programme qui concatène deux chaines de caractéres

    let starMessage = "Hello";
    let endMessage = "world";
    let chaines = starMessage + ' ' + endMessage;
        console.log(chaines); 

// 4- Programme qui vérifie si un nombre est pair ou impair.

    let x = 43;
        if (x % 2 == 0) {
            console.log(x + " est pair");
        } else {
            console.log(x + " est impair");
        }

// 5- Programme qui détermine si un nombre est positif, négatif ou nul.

    let nbr = 3;
        if (nbr > 0) {
            console.log(nbr + " est positifs");
        } else if ( nbr < 0){
            console.log(nbr + " est negatifs");
        } else {
            console.log(nbr + " est nul");
        }

// 6- Programme qui convertit une chaîne de caractères en minuscules.

    let minChaine = "CECI EST UNE CHAINE EN MAJUSCULE CONVERTIS EN MINISCULE ";
    let lowercase = minChaine.toLocaleLowerCase();
        console.log(lowercase);

// 7- programme qui compte le nombre de caractères dans une chaîne de caractères.

    let mainChaine = "Bienvenue à WorketYamo";
    let charChaine = mainChaine.length;
    let end = mainChaine + " contient " + charChaine + " Caractéres";
        console.log(end);

// 8- programme qui vérifie si une chaîne de caractères contient un certain mot ou une lettre. 

    let initChaine = "Bonjour à tous et à toutes d\'être present ce soir";
    let verifChaine = initChaine.endsWith("Bonsoir");
    console.log(verifChaine);

// 9- un programme qui vérifie si une chaîne de caractères est vide.

    let chaineVide = ' ';
        if (chaineVide === ' ') {
            console.log("Cette chaines ne contient aucun caractere");
        }

// 10- programme qui génère un nombre aléatoire entre 1 et 100.

        let aleaNumber = Math.floor(Math.random() * 100);
            console.log(aleaNumber);




                // Exercices sur les Conditions (if-else) :

// 11- programme qui compare deux nombres et affiche le plus grand.

        let longNumber = 23;
        let smallNumber = 11;
            if (longNumber > smallNumber) {
                console.log("le plus grands nombre est " + longNumber);
            } else {
                console.log("le plus grands nombre est " + smallNumber);
            }

// 12- programme qui vérifie si un nombre est divisible par 3.

        let divibleThree = 2982;
            if (divibleThree % 3 == 0) {
                console.log(divibleThree + " est divisible par 3");
            } else {
                console.log(divibleThree + " n'est pas divisible par 3");
            }

// 13- programme qui vérifie si un nombre est un multiple de 5.

        let multipleFive = 454;
            if (multipleFive % 5 == 0) {
                console.log(multipleFive + " est un multiple de 5");
            } else {
                console.log(multipleFive + " n'est pas un multiple de 5");
            }

// 14- programme qui détermine si une personne est majeure (âge >= 18) ou mineure (âge < 18).

        let age = 67;
            if (age >= 18) {
                console.log("Vous êtes majeur");
            } else {
                console.log("Vous êtes mineur");
            }

// 15- programme qui classe trois nombres dans l'ordre croissant.

        let firstNbr = 32;
        let secondNbr = 14;
        let threeNbr = 22;

           if ((firstNbr < secondNbr) && (firstNbr < threeNbr) && (secondNbr < threeNbr)) {
                console.log(firstNbr +' '+ secondNbr +' '+ threeNbr);
           } else if ((secondNbr < firstNbr) && (secondNbr < threeNbr) && (firstNbr < threeNbr)) {
                console.log(secondNbr +' '+ firstNbr+ ' '+ threeNbr);
           } else if ((secondNbr < firstNbr) && (secondNbr < threeNbr) && (threeNbr < firstNbr)) {
                console.log(secondNbr +' '+ threeNbr+ ' '+ firstNbr);
           } else if ((threeNbr < firstNbr) && (threeNbr < secondNbr) && (secondNbr < firstNbr)) {
                console.log(threeNbr +' '+ secondNbr+ ' '+ firstNbr);
           } else if ((threeNbr < firstNbr) && (threeNbr < secondNbr) && (firstNbr < secondNbr)) {
                console.log(threeNbr +' '+ firstNbr+ ' '+ secondNbr);
           } else {
                false;
           }

// 16- programme qui détermine si une année est bissextile 

        let yearOld = 2064;
            if ((yearOld % 4 == 0) || (yearOld % 100 == 0)) {
                console.log("Annee bissextile");
            }

// 18- programme qui détermine le jour de la semaine en fonction d'un numéro (1 pour lundi, 2 pour mardi, etc.).

            let num = 7;
            switch (num) {
                case 1:
                    console.log("Lundi");    
                break;
                case 2:
                    console.log("Mardi");
                break;
                case 3:
                    console.log("Mercredi");
                break;
                case 4:
                    console.log("Jeudi");
                break;
                case 5:
                    console.log("Vendredi");
                break;
                case 6:
                    console.log("Samedi");
                break;
                case 7:
                    console.log("Dimanche");
                break;
                default:
                    console.log("Ce chiffre ne correspond pas à un jour de la semaine");
                    break;
            }


            
                    // Exercices Combinés (Types Primitifs et Conditions) :

// 19- programme qui demande à l'utilisateur son âge et détermine s'il peut voter (âge >= 18).
            let voteAge = prompt("Entrez votre âge :");
                if (voteAge >= 18) {
                    console.log("Vous pouvez voter");
                } else {
                    console.log("Vous ne pouvez pas voter");
                }

// 20-programme qui calcule l'IMC (indice de masse corporelle) en demandant à l'utilisateur sa masse (en kg) et sa taille (en mètres).

            let masse = prompt ("Entrez votre masse corporelle :");
            let taille = prompt ("Entrez votre taille :");
            let imc = masse / (taille * taille);
                console.log("Votre indice de masse corporelle est de : " +imc);

// 21- programme qui calcule la somme de tous les nombres pairs entre 1 et 100.

          let som = 0;
                for( var i = 1; i < 100; i++){
                    if (i % 2 == 0) {
                        som = som + i;
                    }
                }
                    console.log("La somme des nombres pairs entre 1 et 100 est : " +som);

           
// 22- programme qui vérifie si une année est un nombre premier. 

        let old = 2013;
            if ((old / 1 == 0) && (old / old == 0)) {
                console.log(old +" est un nombre premier");
            } else {
                console.log(old +" n'est pas un nombre premier");
            }

// 23- programme qui demande à l'utilisateur de saisir deux nombres et une opération (+, -, *, /) et affiche le résultat de l'opération.

            let xNumber = parseInt(prompt("Entrez un nombre"));
            let yNumber = parseInt(prompt("Entrez un autre nombre"));
            let opération = prompt("Vous souhaitez effectuer quelle operation (+ ; - ; * ; / ) ??");

                switch (opération) {
                    case "+":
                        somNumber = xNumber + yNumber;
                            console.log(somNumber);    
                    break;
                    case "-":
                        difNumber = xNumber - yNumber;
                            console.log(difNumber);    
                    break;
                    case "*":
                        prodNumber = xNumber * yNumber;
                            console.log(prodNumber);    
                    break;
                    case "/":
                        divNumber = xNumber / yNumber;
                            console.log(divNumber);    
                    break;    
                    default:
                        console.log("Operation Invalide !!!!");
                    break;
                }