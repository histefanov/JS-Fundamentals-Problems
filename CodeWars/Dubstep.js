function songDecoder(song) {
    return song.replace(/(WUB)+/g, ' ').trim();
}

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")