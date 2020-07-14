function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let n = input.shift();
    let typeAll = input.pop();
    let songList = [];

    for (let i = 0; i < n; i++) {
        let currentSong = input[i].split('_');
        songList.push(new Song (...currentSong));
    }

    songList.forEach(x => {
        if (x["typeList"] == typeAll || typeAll == "all") {
            console.log(x["name"]);
        }
    })
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])