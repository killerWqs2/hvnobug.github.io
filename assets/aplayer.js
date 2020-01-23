const neteaseMusics = {};
/* 默认APi服务地址 */
const neteaseMusicApiHost = 'https://hvnobug.com/netease-music-api';
/* 默认歌单 */
const playerListId = '3083141942';
const initAPlayer = id => {
    let player = document.getElementById('player');
    if (!player) {
        player = document.createElement('div');
        player.id = 'player';
        document.body.appendChild(player)
    }
    id = id || playerListId;
    const url = 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=' + id;
    $.get(url, function (result) {
        const customAudioType = {
            'customHls': function (audioElement, audio, player) {
                if (Hls.isSupported()) {
                    const hls = new Hls();
                    hls.loadSource(audio.url);
                    hls.attachMedia(audioElement)
                } else if (audioElement.canPlayType('application/x-mpegURL') || audioElement.canPlayType('application/vnd.apple.mpegURL')) {
                    audioElement.src = audio.url
                } else {
                    player.notice('Error: HLS is not supported.')
                }
            }
        };
        const aPlayer = new APlayer({
            container: player,
            fixed: true,
            order: 'random',
            customAudioType: customAudioType,
            lrcType: 3,
            autoplay: false,
            audio: JSON.parse(result)
        });

    });
};
(function () {
    /* 移动端不初始化 APlayer */
    ((document.body.clientWidth || document.body.offsetWidth || window.screen.availWidth) > 450) && initAPlayer();
}());
