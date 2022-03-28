// Våra variablar
text = document.getElementById("cmdText");
task = document.getElementById("task");
container = document.getElementById("container");

// Event så ifall key går upp
text.addEventListener("keyup", function(event) {
    // Om det är enter key.
    if (event.key === 'Enter') {
        // Få deras input, gör det till alla små bokstäver & ta bort all white space.
        input = text.value.toLowerCase().replace(/\s+/g, "");
        switch(input) {
            case "fattar":
                updateTask("Första lektionen: Vad är flexbox? Flexbox är ett en-dimensionellt sätt att placera saker på ett responsivt sätt. (Ok)");
                break;
            
            case "ok":
                updateTask("Vi börjar med hur man definerar, vi säger du har en div med 3 fyrkanter och du vill ha en flexbox på diven, du börjar med att tilläga 'display: flex;' till diven")
                break;
            
            case "display:flex;":
                // Gör så containern blir en flex-container
                container.style.display = 'flex';
                updateTask("Nu kan du se att container som håller våra fyrkanter har blivit en 'flex-container' Skriv 'justify-content: center;' för att centrera flexboxen");
                break;    

            case "justify-content:center;":
                // Centrera den på x-axeln
                container.style.justifyContent = 'center';
                updateTask("Flex-boxen är nu centrerad på x-axeln, som du ser så finns det inget mellanrum mellan dessa, skriv 'gap: 5%;' för att tilläga ett mellanrum mellan flex-objekten");
                break;

            case "gap:5%;":
                // Lägg till 5% gap mellan varje flex-item
                container.style.gap = '5%';
                updateTask("Grattis! Flexboxen har nu ett mellanrum mellan sina 'flex-items' (fyrkanterna), Men vad om du inte vill att de ska gå åt X-axeln utan åt Y-axeln? Jo vi kan ändra det med 'flex-flow', testa lägga 'flex-flow: column;' ")
                break;

            case "flex-flow:column;":
                // Sätt flex-flow till att gå ner (vertikalt)/columns så 1 column per rad.
                container.style.flexFlow = 'column';
                updateTask("Du märker nog att den inte är centrerad längre, det är för att 'justify-content: center;' endast funkar för x-axeln, för att uppnå samma sak fast för y-axeln (vertikalt) så använder vi oss utav 'align-items: center;' Testa det!");
                break;

            case "align-items:center;":
                // Centrera för columns
                container.style.alignItems = 'center';
                updateTask("Låt oss gå tillbaks till en horizontell look med 'flex-flow: row;'")
                break;

            case "flex-flow:row;":
                // Sätt tillbaks flex-flow i rader.
                container.style.flexFlow = 'row';
                updateTask("Flex-wrap som vi kommer använda strax existerar för ifall ett flex-objekt går utanför flexboxen så kommer flexboxen justera sig för att passa det. Standard-inställningen är att det inte kommer justera sig. T.e.x du har en container som är 500px width och flex-objekten går utanför det. Då kommer flexboxen justera sig så att allt passar. Testa skriva 'flex-wrap: wrap;'")
                break;
            
            case "flex-wrap:wrap;":
                // Flex wrap så att flex objekten justerar sig så att det passar
                container.style.flexWrap = 'wrap';
                container.style.width = '100px';
                updateTask("Nu kan du se hur två flex-objekt är på en linje, medans det sista är på linjen därpå, detta är pågrund av att widthen av boxen inte är stor nog för alla. Testa skriva 'flex-wrap: nowrap;' för att se skillnaden direkt.")
                break;

            case "flex-wrap:nowrap;":
                // Sätt tillbaks så det inte justerar sig
                container.style.flexWrap = 'nowrap';
                updateTask("Ser du skillnaden? Flex-wraps användning är bra ifall man vill göra en responsiv webbsida! (Ja)")
                break;
            
            case "ja":
                // Sätt tillbaks width 
                container.style.width = '100%';
                updateTask("Nu har du lärt dig flexbox en aning bra! Testa göra din egna webbsida med hjälp av flexbox.")
                break;
        }
    }
});



// Våran funktion för att uppdatera texten & adda fade animation på texten
function updateTask(newValue) {
    // Adda css klassen för att fadea
    task.classList.add('fade');
    setTimeout(function(){
        // Ändra värdet av task/vad de ska göra
        task.innerHTML = newValue;

        // Ta bort css klassen
        task.classList.remove('fade')
    }, 500);    
}