var listPlaylist = [{
        name: "V-Pop: The A-List",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist1.jpg"
    },
    {
        name: "Chill And Kpop",
        creator: "Nal",
        image: "./assets/img/playlists/playlist2.jpg"
    },
    {
        name: "Nhạc Q.Tế",
        creator: "Nhạc Nước Ngoài",
        image: "./assets/img/playlists/playlist3.jpg"
    },
    {
        name: "Những bản hit của Rap Việt",
        creator: "Bigcityboi",
        image: "./assets/img/playlists/playlist4.jpg"
    },
    {
        name: "The Fat Rat",
        creator: "The Fat Rat",
        image: "./assets/img/playlists/playlist5.jpg"
    },
];

const PLAYLIST_STORAGE_KEY = 'VIK_PLAYLIST';

localStorage.setItem(PLAYLIST_STORAGE_KEY, JSON.stringify(listPlaylist));