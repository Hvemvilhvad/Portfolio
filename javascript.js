window.addEventListener('resize', function(event){
    let width = this.window.innerWidth
    
    if (width <= 950){
        portfolio.style.gridTemplateColumns = "auto";
        portfolio.style.gridTemplateAreas = '"one" "two" "thr" "fou" "fiv" "six"';

        seperatorid.style.width = "500px";
        intro_box.style.width = "500px";
        contacts.style.width = "500px";
    }
    else if (width <= 1425){
        portfolio.style.gridTemplateColumns = "auto auto";
        portfolio.style.gridTemplateAreas = '"one two" "thr fou" "fiv six"';
    
        seperatorid.style.width = "750px";
        intro_box.style.width = "750px";
        contacts.style.width = "750px";
    }
    else if (width <= 2000){
        portfolio.style.gridTemplateColumns = "auto auto auto";
        portfolio.style.gridTemplateAreas = '"one two thr" "fou fiv six"';
    
        seperatorid.style.width = "1250px";
        intro_box.style.width = "1250px";
        contacts.style.width = "1000px";
    }
    else if (width <= 4000){
        portfolio.style.gridTemplateColumns = "auto auto auto auto";
        portfolio.style.gridTemplateAreas = '"one two thr fou" "fiv six not nor"';

        seperatorid.style.width = "1750px";
        intro_box.style.width = "1750px";
        contacts.style.width = "1000px";
    }

}, true);

// let games = window.document.getElementsByClassName("pf_game");

// games.forEach(game => {
//     game.addEventListener("hover", );
// });

