const json = {
    maps: [
        {
            name: "Camellia - GHOUL",
            contents: [
                "This is my favourite map I've made, I'm really proud of it. I spent a lot of time on this map, and I think it shows. The effects are really good, and the mapping is also really good. I'm having fun every time I play it.",
                "The map is actually only inspired by the <a href=\"https://www.youtube.com/watch?v=lpUwreliQ5Y\">NotITG chart</a>, I didn't use it as a base. I made the map completely from scratch, and I think it turned out great!",
                "This map also won me the 2023 Modchart of the Year award from the BeastSaber community awards, which I'm really proud of. I didn't expect to win, but I did!",
                "The map took me about 9 months to finish, and I think it was 100% worth it."
            ],
            video: "https://www.youtube.com/embed/o0vC9ymtMAg?si=X-bQINQrvNxLR08g&amp;start=15",
            img: "/images/mapbg/ghoul.webp"
        }, {
            name: "siromaru + cranky - Conflict",
            contents: [
                "Conflict is a popular song in rhythm games made by siromaru and cranky. The language in which the song is sung in is a fictional language based on Japanese pronunciation. However, there are English lines in the song, these lines are: \"In a desperate conflict, with a ruthless enemy\" and \"A man born to fight. An enemy bent on conquest. Let the battle commence!\"",
                "The map itself is an interesting chart, since it's based on a NotITG chart of the same song. The light beam in the middle of the track is one of my first attempts at environment and is based on its <a href=\"https://youtu.be/JE1iYgc1kGA?t=70\" target=\"_blank\">NotITG counterpart</a>.",
                "Conflict is also my most liked modchart based on opinions I've heard. I started this modchart after seeing the <a href=\"https://youtu.be/JE1iYgc1kGA?t=57\" target=\"_blank\">NotITG chart</a> of it. It took me 2 to 4 hours to finish the mapping itself. And lighting didn't take that long, because I just had to make the lightbeam flash. Even though the environment is very simple, it took me a lot of time to make it, since it was my first attempt at environments.",
                "I finished the map in about a week with the help of feedback from other people. Mawntee also helped me understand how to make the notemods more readable. AaltopahWi helped me to understand how environments work. I really enjoyed making it and I'm glad people like it so much!"
            ],
            video: "https://www.youtube.com/embed/NicNQA67NqE?start=3",
            img: "/images/mapbg/conflict.webp"
        }, {
            name: "Camellia - Anomaly",
            contents: [
                "Anomaly was my first map that used a script for the effect generation. The script of Anomaly is of course, really scuffed but it's also my first script. It took me 5 months to publish the map from the initial starting date. I simply put it on hold for a while and worked on a lot of other stuff in the background, none of those maps are public so far.",
                'Anomaly is also based on a <a href="https://www.youtube.com/watch?v=aQPxWvQ28xE" target="_blank">NotITG chart</a> of the song. The note effects are mimicked as accurately as I could do at the time from the chart. The reason this is my most downloaded chart is because of a streamer called "Bandoot" uploading it on their YouTube channel.',
                "Personally, I do not like this chart that much and I think it's an okay chart, but not nearly as good as my recent ones. However, I appreciate the fact that people enjoy the map. Honestly, if I would've never published this, I probably wouldn't be doing maps today."
            ],
            video: "https://www.youtube.com/embed/rWWxWBH87aM?start=3",
            img: "/images/mapbg/anomaly.webp"
        }, {
            name: "LeaF - Armageddon",
            contents: [
                "This one was finished because I found a cool effect using walls, this effect is the distortion at the end of the map. I figured out that by passing a fake wall through the player while changing the color of the wall makes the view distorted. The whole map is public only because of an accidental effect, which is kind of funny actually.",
                "I personally love this map the most of all my maps, it took me <b>a lot</b> of time and effort to make, and it was totally worth it!",
                "The reason I used scuffedwalls for this was because at the time, I didn't know how to use JS for wall mapping. After realising that you can do it in JS too, I <b>highly</b> recommend using JavaScript over ScuffedWalls when possible.",
                "The lights in this map were really difficult to do, since there are a lot of different sounds in this song. But I somehow managed to actually light it."
            ],
            video: "https://www.youtube.com/embed/yO7H7taf2Mk",
            img: "/images/mapbg/armageddon.webp"
        }, {
            name: "Reek - Weeaboo Spookfest",
            contents: [
                "Weeaboo Spookfest is my first map made for an event. It was made for the 2021 BSMG Halloween competition, and placed 3rd on the competition. I was happy with what I got, the effects in this map didn't take that long. What took me so long in this map was the lights, that's why it took me a month to make it. I already liked the song and it was Halloween themed, so I decided to map it",
                "The great thing about Weeaboo Spookfest is that I got to use a lot of ideas, since it has a lot of different elements in the song. Of course, I had to cut some parts out to make it a bit shorter and faster to map, I also had to cut out all the BPM changes due to Noodle Extensions not being compatible with them.",
                "I think this map turned out great! The lights could've used some polishing and some effects are a bit weird, but that was simply because I ran out of time. It was fun to make this.",
                "This map is not based on a NotITG chart, it's completely original effects by me, hence why I'm surprised how well it turned out."
            ],
            video: "https://www.youtube.com/embed/sHy5nKU0E-8",
            img: "/images/mapbg/weeaboo.webp"
        }
    ]
}

function buildSection(title, content, video, background) {
    const section = document.createElement('section');
    section.classList.add('map-section');
    section.style.backgroundImage = `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,1)), url(..${background})`;

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    section.appendChild(titleElement);

    section.appendChild(document.createElement('br'));

    content.forEach(string => {
        const p = document.createElement('p');
        p.innerHTML = string;
        section.appendChild(p);
    });

    const videoElement = document.createElement('iframe');

    videoElement.src = video;
    videoElement.width = '560';
    videoElement.height = '315';
    videoElement.title = title;
    videoElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    videoElement.allowFullscreen = true;
    videoElement.style.margin = "0 auto";
    videoElement.style.display = "block";

    section.appendChild(videoElement);
    for (let i = 0; i < 5; i++) {
        section.appendChild(document.createElement('br'));
    }

    document.body.appendChild(section);
}

function buildAllSections() {
    json.maps.forEach(section => {
        buildSection(section.name, section.contents, section.video, section.img);
    });
}