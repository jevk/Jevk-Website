function mapBox(name, img, video, script) {
    const mapBox = document.createElement("div");
    mapBox.className = "map-box";
    mapBox.style.backgroundImage = `url(${img})`;

    const h3 = document.createElement("h3");
    h3.innerText = name;
    mapBox.appendChild(h3);

    const ul = document.createElement("ul");

    for (let i = 0; i < 2; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = i == 0 ? video : script;
        a.target = "_blank";
        a.innerText = i == 0 ? "Video" : "Script";

        li.appendChild(a);
        ul.appendChild(li);
    }

    mapBox.appendChild(document.createElement("br"));
    mapBox.appendChild(ul);
    
    const mapBoxContainer = document.querySelector(".map-box-container");
    mapBoxContainer.appendChild(mapBox);
}

const mapData = [{ 
    name: "Conflict", img: "/images/ConflictToast.webp",
    video: "https://www.youtube.com/watch?v=NicNQA67NqE",
    script: "https://github.com/jevk/JevkMaps/tree/main/Conflict"
}, {
    name: "GHOUL", img: "/images/ghoul.webp",
    video: "https://youtu.be/o0vC9ymtMAg?si=7Tv3Ca679e1LKonS&t=15",
    script: "https://github.com/jevk/JevkMaps/tree/main/GHOUL"
}, { 
    name: "Armageddon", img: "/images/Armageddon.webp",
    video: "https://www.youtube.com/watch?v=yO7H7taf2Mk",
    script: "https://github.com/jevk/JevkMaps/tree/main/Armageddon"
}, {
    name: "GHOST", img: "/images/ghost.webp",
    video: "https://www.youtube.com/watch?v=xh3Vijx4xXc",
    script: "https://github.com/jevk/JevkMaps/tree/main/GHOST"
}];

function buildAllMaps() {
    mapData.forEach(map => {
        mapBox(map.name, map.img, map.video, map.script);
    });
}