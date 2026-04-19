window.addEventListener('resize', adjustSize, true);
window.addEventListener('load', adjustSize, true);

function adjustSize(){
    let width = this.window.innerWidth
    
    if (width <= 500){
        ds_text_area.style.gridTemplateAreas = '"des" "wrk" "lst"';
        ds_image_area.style.gridTemplateAreas = '"lft rgt" "img img"';
    }
    else{
        ds_text_area.style.gridTemplateAreas = '"des lst" "wrk lst"';
        ds_image_area.style.gridTemplateAreas = '"lft img rgt"';
    }

    if (width <= 950){
        portfolio.style.gridTemplateColumns = "auto";
        portfolio.style.gridTemplateAreas = '"one" "two" "thr" "fou" "fiv" "six" "sev" "eig"';
        
        seperatorid.style.width = "500px";
        // intro_box.style.width = "500px";
        contacts.style.width = "500px";

    }
    else if (width <= 1425){
        portfolio.style.gridTemplateColumns = "auto auto";
        portfolio.style.gridTemplateAreas = '"one two" "thr fou" "fiv six" "sev eig"';
        
        seperatorid.style.width = "750px";
        // intro_box.style.width = "750px";
        contacts.style.width = "750px";
    }
    else if (width <= 2000){
        portfolio.style.gridTemplateColumns = "auto auto auto";
        portfolio.style.gridTemplateAreas = '"one two thr" "fou fiv six" "sev eig nin"';
        
        seperatorid.style.width = "1250px";
        // intro_box.style.width = "1250px";
        contacts.style.width = "1000px";
    }
    else if (width <= 4000){
        portfolio.style.gridTemplateColumns = "auto auto auto auto";
        portfolio.style.gridTemplateAreas = '"one two thr fou" "fiv six sev eig"';
        
        seperatorid.style.width = "1750px";
        // intro_box.style.width = "1750px";
        contacts.style.width = "1000px";
    }

}


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
        dsImageIndex = 0;
        dsGameIndex = index;
        SetDetailSheetData(index);
    }
    viewingDetailSheet = !viewingDetailSheet;

}


function SetDetailSheetData(index){
    ds_header.textContent = gameData[index].title;
    ds_description.textContent = gameData[index].description;
    ds_image.src = gameData[index].images[dsImageIndex];
    ds_worked_on.textContent = gameData[index].work;
    ds_lang.textContent = gameData[index].language;
    ds_genr.textContent = gameData[index].genre;
    ds_engi.textContent = gameData[index].engine;
    ds_tech.textContent = gameData[index].technology;
    ds_coop.textContent = gameData[index].collaporators;
    ds_githubLink.href = gameData[index].link;
}


function ImageScrollRight(){
    dsImageIndex += 1;
    if (dsImageIndex >= gameData[dsGameIndex].images.length){
        dsImageIndex = 0;
    }
    ds_image.src = gameData[dsGameIndex].images[dsImageIndex];
}

function ImageScrollLeft(){
    dsImageIndex -= 1;
    if (dsImageIndex < 0){
        dsImageIndex = gameData[dsGameIndex].images.length-1;
    }
    ds_image.src = gameData[dsGameIndex].images[dsImageIndex];
}


let viewingDetailSheet = false;
let dsImageIndex = 0;
let dsGameIndex = 0;
let gameData =
[
    {
        title: "Necrotroph",
        description: "Wander through a dark forest to recollect your lost memories and pass on. \nBut be wary, as the forest won't let you go just because you've died... \nNecrotroph uses the sounds and shadows to give you the feeling of being watched from the shadows.",
        images: ["Necrotroph/Necrotroph1.png","Necrotroph/Necrotroph4.png","Necrotroph/Necrotroph5.png","Necrotroph/Necrotroph6.png","Necrotroph/Necrotroph7.png","Necrotroph/Necrotroph Code1.png","Necrotroph/Necrotroph Code2.png"],
        work: ["Shaders", " Collision", " GameStates", " Pathfinding", " Map Generation", " Timeline Manager"],
        language: ["C#", "HLSL"],
        genre: "Horror",
        engine: "MonoGame",
        technology: ["Shaders", " Pathfinding"], 
        collaporators: ["Emma Brøcher"," Ellie Rasmussen"," Malthe Birch"],
        link: "https://github.com/Hargaflarb/Necrotroph"
    },
    {
        title: "Unnamed",
        description: "An unnamed, unfinished dungeon crawler made as a hobby project.\nThe player traverses procedurally generated rooms, finding chests and fighting monsters for looting to sell and craft into better weapons.\nThe game is build with a homemade engine using windows forms as a base.\n(The code is old, so no github link has been provided)",
        images: ["Dungeon/dungeon5.png","Dungeon/dungeon6.png","Dungeon/dungeon3.png","Dungeon/dungeon4.png"],
        work: ["Everything"],
        language: ["C#"],
        genre: "Dungeon Crawler",
        engine: "None/Custom",
        technology: ["Procedural Generation"],
        collaporators: ["Malthe"],
        link: "https://github.com/"
    },
    {
        title: "Unicorns Gaze",
        description: "A Beat-'em-up side-scroller, where you use your unicorn horn as well as the environment to beat up candy creatures.",
        images: ["UnicornsGaze/UnicornsGaze10.png","UnicornsGaze/UnicornsGaze9.png","UnicornsGaze/UnicornsGaze7.png","UnicornsGaze/UnicornsGaze5.png","UnicornsGaze/UnicornsGaze4.png","UnicornsGaze/Unicorns Gaze Code.png"],
        work: ["Throwing Mechanics", " Breakable Objects", " Item Rotation", " Shadows", " Walking 'Animation'", " Parallax Effect", " Psudo-3D"],
        language: ["C#"],
        genre: "Beat-'em-up",
        engine: "MonoGame",
        technology: [], 
        collaporators: ["Emma Brøcher"," Ellie Rasmussen"," Malthe Birch"],
        link: "https://github.com/Hvemvilhvad/Unicorn-s-Gaze"
    },
    {
        title: "Ring Figther",
        description: "A Street Figher inspired game, with stop-motion animations and an 16-bit vibe.\nUse the different moves to avoid, counter and combo the enemy, pushing them closer and closer to the edge.",
        images: ["RingFighter/RingFighter3.png","RingFighter/RingFighter2.png","RingFighter/RingFighter1.png","RingFighter/Ring Fighters Code.png","RingFighter/Ring Fighters Code2.png","RingFighter/Ring Fighters Code3.png"],
        work: ["Attacks", " Input Command Pattern", " Character Asset Pack", " Physics", " Collision & Knockback", " Game Manager", " Event System", " Wizardry :D"],
        language: ["Python"],
        genre: "Fighter",
        engine: "Pygame",
        technology: ["Behavioral AI"], 
        collaporators: ["Emma Brøcher"," Ellie Rasmussen"," Malthe Birch"],
        link: "https://github.com/Hargaflarb/Ring-Fighter"
    },
    {
        title: "Fossil Hunter",
        description: "An educational game, made to teach kids about how and where fossils are made and found.\nFossils are dug up, cleaned and then displayed in the players collection.\nThe game was developed in Unity, using the Scrum framework to organize the process.",
        images: ["FossilHunter/FossilHunter5.png","FossilHunter/FossilHunter4.png","FossilHunter/FossilHunter3.png","FossilHunter/FossilHunter1.png","FossilHunter/FossilHunter6.png",],
        work: ["Museum Scene", " Fossil Rarity", " FossileInfo_SO", " Fossile Cleaning", " Info Popup"],
        language: ["C#",],
        genre: "Educational Sim",
        engine: "Unity",
        technology: ["Spritemasks", " Scrum-Framework"], 
        collaporators: ["Emma Brøcher"," Ellie Rasmussen"," David Danielsen"," Asbjørn Ryberg"," Malthe Birch"],        
        link: "https://github.com/Theaidable/FossilHunter"
    },
    {
        title: "Astar",
        description: "A console project i made, that uses the Astar algorithm to pathfind from A to B.\nEdges can be given weights to alter priotization. It also has 'AwayStar',\nan algorithm based on Astar that pathfinds away from a point.",
        images: ["Astar/Astar2.png","Astar/Astar3.png","Astar/Astar4.png","Astar/Astar5.png","Astar/Astar6.png","Astar/AstarCode.png"],
        work: ["Everthing"],
        language: ["C#",],
        genre: "Sim",
        engine: "None",
        technology: ["Astar"], 
        collaporators: ["Malthe Birch"],        
        link: "https://github.com/Hvemvilhvad/AStar"
    },
    {
        title: "Solitair",
        description: "A simple engine/framework for development of solitair-games.\nThe framework makes it easy to define the games setup, stacking rules and win conditions.\nCurrently, both klondike and spider are implemented.",
        images: ["Solitair/Solitair1.png","Solitair/Solitair2.png","Solitair/Solitair Code3.png","Solitair/Solitair Code2.png","Solitair/Solitair Code1.png"],
        work: ["Everthing"],
        language: ["C#",],
        genre: "Card Game",
        engine: "Custom",
        technology: [""], 
        collaporators: ["Malthe Birch"],        
        link: "https://github.com/Hvemvilhvad/Solitair"
    },
    {
        title: "LinkedList",
        description: "A simple double-linked list. Because i don't have any finished c++ projects yet,\n i made this as a fun little temporary project.",
        images: ["LinkedList/LinkedListCode1.png","LinkedList/LinkedListCode2.png","LinkedList/LinkedListCode3.png"],
        work: ["Everthing"],
        language: ["C++",],
        genre: "Data Management",
        engine: "None",
        technology: [""], 
        collaporators: ["Malthe Birch"],        
        link: "https://github.com/Hvemvilhvad/DoubledLinkedList"
    },



];