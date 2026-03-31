window.addEventListener('resize', adjustSize, true);
window.addEventListener('load', adjustSize, true);

function adjustSize(){
    let width = this.window.innerWidth
    
    if (width <= 950){
        portfolio.style.gridTemplateColumns = "auto";
        portfolio.style.gridTemplateAreas = '"one" "two" "thr" "fou" "fiv" "six"';
        
        seperatorid.style.width = "500px";
        // intro_box.style.width = "500px";
        contacts.style.width = "500px";
    }
    else if (width <= 1425){
        portfolio.style.gridTemplateColumns = "auto auto";
        portfolio.style.gridTemplateAreas = '"one two" "thr fou" "fiv six"';
        
        seperatorid.style.width = "750px";
        // intro_box.style.width = "750px";
        contacts.style.width = "750px";
    }
    else if (width <= 2000){
        portfolio.style.gridTemplateColumns = "auto auto auto";
        portfolio.style.gridTemplateAreas = '"one two thr" "fou fiv six"';
        
        seperatorid.style.width = "1250px";
        // intro_box.style.width = "1250px";
        contacts.style.width = "1000px";
    }
    else if (width <= 4000){
        portfolio.style.gridTemplateColumns = "auto auto auto auto";
        portfolio.style.gridTemplateAreas = '"one two thr fou" "fiv six not nor"';
        
        seperatorid.style.width = "1750px";
        // intro_box.style.width = "1750px";
        contacts.style.width = "1000px";
    }

}


let viewingDetailSheet = false;
function ToggleDeatilSheet(index){
    // to page
    if (viewingDetailSheet){
        page.style.display = "block";
        detail_sheet_page.style.display = "none";
        body.style.paddingTop = "50px"
    }
    // to sheet
    else{
        page.style.display = "none";
        detail_sheet_page.style.display = "block";
        body.style.paddingTop = "0px"
        SetDetailSheetData(index);
    }
    viewingDetailSheet = !viewingDetailSheet;

}


function SetDetailSheetData(index){
    ds_header.textContent = gameData[index].title;
    ds_description.textContent = gameData[index].description;
    ds_image.src = gameData[index].images[0];
    ds_lang.textContent = gameData[index].language;
    ds_genr.textContent = gameData[index].genre;
    ds_engi.textContent = gameData[index].engine;
    ds_tech.textContent = gameData[index].technology;
    ds_coop.textContent = gameData[index].collaporators;
    ds_githubLink.href = gameData[index].link;
}



let gameData =
[
    {
        title: "Necrotroph",
        description: "Wander through a dark forest to recollect your lost memories and pass on. \nBut be wary, as the forest won't let you go just because you've died... \nNecrotroph uses the sounds and shadows to give you the feeling of being watched from the shadows.",
        images: ["Necrotroph1.png","Necrotroph2.png"],
        language: ["C#", "HLSL"],
        genre: "Horror",
        engine: "MonoGame",
        technology: ["Shaders", "Pathfinding"], 
        collaporators: ["Emma","Ellie","Malthe"],
        link: "https:\/\/github.com/Hargaflarb/Necrotroph"
    },
    {
        title: "Unnamed",
        description: "An unnamed, unfinished dungeon crawler made as a hobby project.\nThe player traverses procedurally generated rooms, finding chests and fighting monsters for looting to sell and craft into better weapons.\nThe game is build with a homemade engine using windows forms as a base.",
        images: ["dungeon5.png","dungeon1.png"],
        language: ["C#"],
        genre: "Dungeon Crawler",
        engine: "None/Own",
        technology: ["procedural generation"],
        collaporators: ["Malthe"],
        link: "https:\/\/github.com/"
    },
    {
        title: "Unicorns Gaze",
        description: "A Beat-'em-up side-scroller, where you use your unicorn horn as well as the environment to beat up candy creatures.",
        images: ["UnicornsGaze10.png","UnicornsGaze8.png"],
        language: ["C#"],
        genre: "Beat-'em-up",
        engine: "MonoGame",
        technology: [], 
        collaporators: ["Emma","Ellie","Malthe"],
        link: "https:\/\/github.com/Hvemvilhvad/Unicorn-s-Gaze"
    },
    {
        title: "Ring Figther",
        description: "A Street Figher inspired game, with stop-motion animations and an 16-bit vibe.\nUse the different moves to avoid, counter and combo the enemy, pushing them closer and closer to the edge.",
        images: ["RingFighter3.png","RingFighter2.png","RingFighter1.png"],
        language: ["Python"],
        genre: "Fighter",
        engine: "Pygame",
        technology: ["Behavioral AI"], 
        collaporators: ["Emma","Ellie","Malthe"],
        link: "https:\/\/github.com/Hargaflarb/Ring-Fighter"
    },
    {
        title: "Fossil Hunter",
        description: "An educational game, made to teach kids about how and where fossils are made and found.\nFossils are dug up, cleaned and then displayed in the players collection.\nThe game was developed in Unity, using the Scrum framework to organize the process.",
        images: ["FossilHunter5.png","FossilHunter4.png"],
        language: ["C#",],
        genre: "Educational Sim",
        engine: "Unity",
        technology: ["Spritemasks", "Scrum-Framework"], 
        collaporators: ["Emma","Ellie","David","Asbjørn","Malthe"],
        link: "https:\/\/github.com/Theaidable/FossilHunter"
    },
    
];