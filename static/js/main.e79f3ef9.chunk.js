(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,n){},164:function(e,t,n){},166:function(e,t,n){},168:function(e,t,n){},170:function(e,t,n){},172:function(e,t,n){},174:function(e,t,n){},176:function(e,t,n){},178:function(e,t,n){},180:function(e,t,n){},182:function(e,t,n){},184:function(e,t,n){},186:function(e,t,n){},188:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var a=n(8),s=n(9),r=n(12),o=n(10),i=n(11),c=n(0),l=n.n(c),u=n(59),m=n.n(u),d=n(192),p=n(193),E=n(5),f=n(4),h=n(63),g=n(1),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_SUCCESS":return Object(g.a)({},e,{user:t.user,fetchUserError:!1});case"FETCH_USER_ERROR":return Object(g.a)({},e,{fetchUserError:!0});case"ADD_SONG_TO_LIBRARY_SUCCESS":return Object(g.a)({},e,{songAddedToLibrary:!0,songId:t.songId});case"ADD_SONG_TO_LIBRARY_ERROR":return Object(g.a)({},e,{songAddedToLibrary:!1});default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return Object(g.a)({},e,{token:t.token});default:return e}},v=n(65),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PLAYLIST_MENU_PENDING":return Object(g.a)({fetchPlaylistPending:!0},e);case"FETCH_PLAYLIST_MENU_SUCCESS":return Object(g.a)({playlistMenu:t.playlists,playlists:t.playlists,fetchPlaylistError:!1,fetchPlaylistPending:!1},e);case"ADD_PLAYLIST_ITEM":return Object(g.a)({},e,{playlists:Object(v.a)(e.playlists).concat([t.playlist])});case"FETCH_PLAYLIST_MENU_ERROR":return Object(g.a)({fetchPlaylistError:!0,fetchPlaylistPending:!1},e);default:return e}},b={fetchSongsPending:!0,songPlaying:!1,timeElapsed:0,songId:0,viewType:"songs",songPaused:!0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_VIEW_TYPE":return Object(g.a)({},e,{viewType:t.view});case"FETCH_SONGS_PENDING":return Object(g.a)({},e,{fetchSongsPending:!0});case"FETCH_SONGS_SUCCESS":return Object(g.a)({},e,{songs:t.songs,fetchSongsError:!1,fetchSongsPending:!1,viewType:"songs"});case"FETCH_SONGS_ERROR":return Object(g.a)({},e,{fetchSongsError:!0,fetchSongsPending:!1});case"SEARCH_SONGS_PENDING":return Object(g.a)({},e,{searchSongsPending:!0});case"SEARCH_SONGS_SUCCESS":return Object(g.a)({},e,{songs:t.songs,searchSongsError:!1,searchSongsPending:!1,viewType:"search"});case"SEARCH_SONGS_ERROR":return Object(g.a)({},e,{searchSongsError:!0,searchSongsPending:!1});case"FETCH_RECENTLY_PLAYED_PENDING":return Object(g.a)({},e,{fetchSongsPending:!0});case"FETCH_RECENTLY_PLAYED_SUCCESS":return Object(g.a)({},e,{songs:t.songs,viewType:"Recently Played",fetchSongsError:!1,fetchSongsPending:!1});case"FETCH_RECENTLY_PLAYED_ERROR":return Object(g.a)({},e,{fetchSongsError:!0,fetchSongsPending:!1});case"FETCH_PLAYLIST_SONGS_PENDING":return Object(g.a)({},e,{fetchPlaylistSongsPending:!0});case"FETCH_PLAYLIST_SONGS_SUCCESS":return Object(g.a)({},e,{songs:t.songs,viewType:"playlist",fetchPlaylistSongsError:!1,fetchPlaylistSongsPending:!1});case"FETCH_PLAYLIST_SONGS_ERROR":return Object(g.a)({},e,{fetchPlaylistSongsError:!0,fetchPlaylistSongsPending:!1});case"FETCH_ARTIST_SONGS_PENDING":return Object(g.a)({},e,{fetchArtistSongsPending:!0});case"FETCH_ARTIST_SONGS_SUCCESS":return Object(g.a)({},e,{songs:t.songs,viewType:"Artist",fetchArtistSongsError:!1,fetchArtistSongsPending:!1});case"FETCH_ARTIST_SONGS_ERROR":return Object(g.a)({},e,{fetchArtistSongsError:!0,fetchArtistSongsPending:!1});case"PLAY_SONG":return Object(g.a)({},e,{songPlaying:!0,songDetails:t.song,songId:t.song.id,timeElapsed:0,songPaused:!1});case"STOP_SONG":return Object(g.a)({},e,{songPlaying:!1,songDetails:null,timeElapsed:0,songPaused:!0});case"PAUSE_SONG":return Object(g.a)({},e,{songPaused:!0});case"RESUME_SONG":return Object(g.a)({},e,{songPaused:!1});case"INCREASE_SONG_TIME":return Object(g.a)({},e,{timeElapsed:t.time});default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALBUMS_PENDING":return Object(g.a)({},e,{fetchAlbumsPending:!0});case"FETCH_ALBUMS_SUCCESS":return Object(g.a)({},e,{albums:t.albums,fetchAlbumsError:!1,fetchAlbumsPending:!1});case"FETCH_ALBUMS_ERROR":return Object(g.a)({},e,{fetchAlbumsError:!0,fetchAlbumsPending:!1});default:return e}},O={artistIds:""},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ARTIST_IDS":return Object(g.a)({},e,{artistIds:t.artistIds});case"FETCH_ARTISTS_PENDING":return Object(g.a)({},e,{fetchArtistsPending:!0});case"FETCH_ARTISTS_SUCCESS":return Object(g.a)({},e,{artistList:t.artists,fetchArtistsError:!1,fetchArtistsPending:!1});case"FETCH_ARTISTS_ERROR":return Object(g.a)({},e,{fetchArtistsError:!0,fetchArtistsPending:!1});default:return e}},R={title:"Songs"},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_HEADER_TITLE":return Object(g.a)({},e,{title:t.title});default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CATEGORIES_SUCCESS":return Object(g.a)({},e,{view:t.categories.items,fetchCategoriesError:!1});case"FETCH_CATEGORIES_ERROR":return Object(g.a)({},e,{fetchCategoriesError:!0});case"FETCH_NEW_RELEASES_SUCCESS":return Object(g.a)({},e,{view:t.newReleases.items,fetchNewReleasesError:!1});case"FETCH_NEW_RELEASES_ERROR":return Object(g.a)({},e,{fetchNewReleasesError:!0});case"FETCH_FEATURED_SUCCESS":return Object(g.a)({},e,{view:t.featured.items,fetchFeaturedError:!1});case"FETCH_FEATURED_ERROR":return Object(g.a)({},e,{fetchFeaturedError:!0});default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{volume:100},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_VOLUME":return{volume:t.volume};default:return e}},w=Object(E.c)({user:S,token:y,playlist:_,songs:T,albums:N,artists:C,ui:A,browse:P,sound:k}),j=function(e){return function(t){var n=new Request("https://api.spotify.com/v1/me",{headers:new Headers({Authorization:"Bearer "+e})});fetch(n).then(function(e){return"Unauthorized"===e.statusText&&(window.location.href="./"),e.json()}).then(function(e){t({type:"FETCH_USER_SUCCESS",user:e})}).catch(function(e){t({type:"FETCH_USER_ERROR"})})}},I=function(e,t){return function(n){var a=new Request("https://api.spotify.com/v1/me/tracks?ids=".concat(t),{method:"PUT",headers:new Headers({Authorization:"Bearer "+e})});fetch(a).then(function(e){e.ok&&n({type:"ADD_SONG_TO_LIBRARY_SUCCESS",songId:t})}).catch(function(e){n({type:"ADD_SONG_TO_LIBRARY_ERROR"})})}},H=n(17),L=n.n(H),U=function(e,t){return function(n){var a=new Request("https://api.spotify.com/v1/artists?ids=".concat(t),{headers:new Headers({Authorization:"Bearer "+e})});n({type:"FETCH_ARTISTS_PENDING"}),fetch(a).then(function(e){return e.json()}).then(function(e){n({type:"FETCH_ARTISTS_SUCCESS",artists:e})}).catch(function(e){n({type:"FETCH_ARTISTS_ERROR"})})}},F=function(e,t){return function(n){var a=new Request("https://api.spotify.com/v1/artists/".concat(e,"/top-tracks?country=US"),{headers:new Headers({Authorization:"Bearer "+t})});n({type:"FETCH_ARTIST_SONGS_PENDING"}),fetch(a).then(function(e){return"Unauthorized"===e.statusText&&(window.location.href="./"),e.json()}).then(function(e){e.items=e.tracks.map(function(e){return{track:e}}),n({type:"FETCH_ARTIST_SONGS_SUCCESS",songs:e.items})}).catch(function(e){n({type:"FETCH_ARTIST_SONGS_ERROR"})})}},D=function(e){return function(t){var n=new Request("https://api.spotify.com/v1/me/tracks?limit=50",{headers:new Headers({Authorization:"Bearer "+e})});t({type:"FETCH_SONGS_PENDING"}),fetch(n).then(function(e){return"Unauthorized"===e.statusText&&(window.location.href="./"),e.json()}).then(function(e){var n=L()(e.items,function(e){return e.track.artists[0].name}).map(function(e){return e.track.artists[0].id}).join(",");t(function(e){return{type:"SET_ARTIST_IDS",artistIds:e}}(n)()),t({type:"FETCH_SONGS_SUCCESS",songs:e.items})}).catch(function(e){t({type:"FETCH_SONGS_ERROR"})})}},G=function(e,t){return function(n){var a=new Request("https://api.spotify.com/v1/search?q=".concat(e,"&type=track"),{headers:new Headers({Authorization:"Bearer "+t,Accept:"application/json"})});n({type:"SEARCH_SONGS_PENDING"}),fetch(a).then(function(e){return"Unauthorized"===e.statusText&&(window.location.href="./"),e.json()}).then(function(e){e.items=e.tracks.items.map(function(e){return{track:e}}),n({type:"SEARCH_SONGS_SUCCESS",songs:e.items})}).catch(function(e){n({type:"FETCH_SONGS_ERROR"})})}},Y=function(e){return function(t){var n=new Request("https://api.spotify.com/v1/me/player/recently-played",{headers:new Headers({Authorization:"Bearer "+e})});t({type:"FETCH_RECENTLY_PLAYED_PENDING"}),fetch(n).then(function(e){return e.json()}).then(function(e){e.items=L()(e.items,function(e){return e.track.id}),t({type:"FETCH_RECENTLY_PLAYED_SUCCESS",songs:e.items})}).catch(function(e){t({type:"FETCH_RECENTLY_PLAYED_ERROR"})})}},M=function(e){return{type:"PLAY_SONG",song:e}},B=function(){return{type:"STOP_SONG"}},x=function(){return{type:"PAUSE_SONG"}},z=function(){return{type:"RESUME_SONG"}},q=function(e){return{type:"INCREASE_SONG_TIME",time:e}},V=function(e){return{type:"UPDATE_VIEW_TYPE",view:e}},W=(n(162),n(164),function(e){var t=e.userImage,n=e.displayName;return l.a.createElement("div",{className:"user-details-container"},l.a.createElement("img",{alt:"user",className:"user-image",src:t}),l.a.createElement("p",{className:"user-name"},n))}),X=Object(f.b)(function(e){return{displayName:e.user.user?e.user.user.display_name:"",userImage:e.user.user&&e.user.user.images[0]?e.user.user.images[0].url:""}})(W),J=(n(166),function(e){function t(){var e,n;Object(a.a)(this,t);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={searchTerm:""},n.updateSearchTerm=function(e){n.setState({searchTerm:e.target.value})},n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"track-search-container"},l.a.createElement("form",{onSubmit:function(){e.props.searchSongs(e.state.searchTerm,e.props.token)}},l.a.createElement("input",{onChange:this.updateSearchTerm,type:"text",placeholder:"Search..."}),l.a.createElement("button",{onClick:function(t){t.preventDefault(),e.props.searchSongs(e.state.searchTerm,e.props.token)}},l.a.createElement("i",{className:"fa fa-search search","aria-hidden":"true"}))))}}]),t}(c.Component)),K=Object(f.b)(function(e){return{token:e.token.token}},function(e){return Object(E.b)({searchSongs:G},e)})(J),$=(n(168),function(){return l.a.createElement("div",{className:"header"},l.a.createElement(K,null),l.a.createElement(X,null))}),Q=n(21),Z=n.n(Q),ee=(n(170),function(e){function t(){var e,n;Object(a.a)(this,t);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={timeElapsed:n.props.timeElapsed},n.getSongIndex=function(){var e=n.props,t=e.songs,a=e.songDetails;return t.map(function(e,t){if(e.track===a)return t}).filter(function(e){return void 0!==e})[0]},n.nextSong=function(){var e=n.props,t=e.songs,a=e.audioControl,s=n.getSongIndex();s===t.length-1?a(t[0]):a(t[s+1])},n.prevSong=function(){var e=n.props,t=e.songs,a=e.audioControl,s=n.getSongIndex();a(0===s?t[t.length-1]:t[s-1])},n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.songPlaying||clearInterval(this.state.intervalId),e.songPlaying&&0===e.timeElapsed&&(clearInterval(this.state.intervalId),this.calculateTime()),this.setState({timeElapsed:e.timeElapsed})}},{key:"calculateTime",value:function(){var e=this,t=setInterval(function(){30===e.state.timeElapsed?(clearInterval(e.state.intervalId),e.props.stopSong()):e.props.songPaused||e.props.increaseSongTime(e.state.timeElapsed+1)},1e3);this.setState({intervalId:t})}},{key:"render",value:function(){var e=this.props.songPaused?"fa fa-play-circle-o play-btn":"fa fa-pause-circle-o pause-btn";return l.a.createElement("div",{className:"song-player-container"},l.a.createElement("div",{className:"song-details"},l.a.createElement("p",{className:"song-name"},this.props.songName),l.a.createElement("p",{className:"artist-name"},this.props.artistName)),l.a.createElement("div",{className:"song-controls"},l.a.createElement("div",{onClick:this.prevSong,className:"reverse-song"},l.a.createElement("i",{className:"fa fa-step-backward reverse","aria-hidden":"true"})),l.a.createElement("div",{className:"play-btn"},l.a.createElement("i",{onClick:this.props.songPaused?this.props.resumeSong:this.props.pauseSong,className:"fa play-btn"+e,"aria-hidden":"true"})),l.a.createElement("div",{onClick:this.nextSong,className:"next-song"},l.a.createElement("i",{className:"fa fa-step-forward forward","aria-hidden":"true"}))),l.a.createElement("div",{className:"song-progress-container"},l.a.createElement("p",{className:"timer-start"},Z()().minutes(0).second(this.state.timeElapsed).format("m:ss")),l.a.createElement("div",{className:"song-progress"},l.a.createElement("div",{style:{width:16.5*this.state.timeElapsed},className:"song-expired"})),l.a.createElement("p",{className:"timer-end"},Z()().minutes(0).second(30-this.state.timeElapsed).format("m:ss"))))}}]),t}(c.Component)),te=Object(f.b)(function(e){return{songName:e.songs.songDetails?e.songs.songDetails.name:"",artistName:e.songs.songDetails?e.songs.songDetails.artists[0].name:"",songPlaying:e.songs.songPlaying,timeElapsed:e.songs.timeElapsed,songPaused:e.songs.songPaused,songDetails:e.songs.songDetails,songs:e.songs.songs}},function(e){return Object(E.b)({increaseSongTime:q},e)})(ee),ne=(n(172),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).updateVolume=function(e){n.setState({volume:e.target.value}),n.props.updateVolume(10*Math.ceil(e.target.value/10))},n.state={volume:e.volume},n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"volume-container"},l.a.createElement("i",{className:"fa fa-volume-up","aria-hidden":"true"}),l.a.createElement("input",{className:"volume",type:"range",min:0,max:100,value:this.state.volume,onChange:this.updateVolume}))}}]),t}(c.Component)),ae=function(e){return{type:"UPDATE_VOLUME",volume:e}},se=Object(f.b)(function(e){return{volume:e.sound.volume}},function(e){return Object(E.b)({updateVolume:ae},e)})(ne),re=(n(174),function(e){var t=e.stopSong,n=e.pauseSong,a=e.resumeSong,s=e.audioControl;return l.a.createElement("div",{className:"footer"},l.a.createElement(te,{stopSong:t,pauseSong:n,resumeSong:a,audioControl:s}),l.a.createElement(se,null))}),oe=(n(176),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){""!==e.userId&&""!==e.token&&this.props.fetchPlaylistsMenu(e.userId,e.token)}},{key:"renderPlaylists",value:function(){var e=this;return this.props.playlistMenu.map(function(t){return l.a.createElement("li",{onClick:function(){e.props.fetchPlaylistSongs(t.owner.id,t.id,e.props.token),e.props.updateHeaderTitle(t.name)},className:e.props.title===t.name?"active side-menu-item":"side-menu-item",key:t.id},t.name)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"user-playlist-container"},l.a.createElement("h3",{className:"user-playlist-header"},"Playlists"),this.props.playlistMenu&&this.renderPlaylists())}}]),t}(c.Component)),ie=function(e,t){return function(n){var a=new Request("https://api.spotify.com/v1/users/".concat(e,"/playlists"),{headers:new Headers({Authorization:"Bearer "+t})});n({type:"FETCH_PLAYLIST_MENU_PENDING"}),fetch(a).then(function(e){return"Unauthorized"===e.statusText&&(window.location.href="./"),e.json()}).then(function(e){n({type:"FETCH_PLAYLIST_MENU_SUCCESS",playlists:e.items})}).catch(function(e){n({type:"FETCH_PLAYLIST_MENU_ERROR"})})}},ce=function(e,t,n){return function(a){var s=new Request("https://api.spotify.com/v1/users/".concat(e,"/playlists/").concat(t,"/tracks"),{headers:new Headers({Authorization:"Bearer "+n})});a({type:"FETCH_PLAYLIST_SONGS_PENDING"}),fetch(s).then(function(e){return e.json()}).then(function(e){e.items=L()(e.items,function(e){return e.track.id}),a({type:"FETCH_PLAYLIST_SONGS_SUCCESS",songs:e.items})}).catch(function(e){a({type:"FETCH_PLAYLIST_SONGS_ERROR"})})}},le=function(e){return{type:"UPDATE_HEADER_TITLE",title:e}},ue=Object(f.b)(function(e){return{userId:e.user.user?e.user.user.id:"",playlistMenu:e.playlist.playlistMenu?e.playlist.playlistMenu:"",token:e.token.token?e.token.token:"",title:e.ui.title}},function(e){return Object(E.b)({fetchPlaylistsMenu:ie,fetchPlaylistSongs:ce,updateHeaderTitle:le},e)})(oe),me=(n(178),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){""!==e.token&&!e.fetchSongsError&&e.fetchSongsPending&&"songs"===e.viewType&&this.props.fetchSongs(e.token)}},{key:"msToMinutesAndSeconds",value:function(e){var t=Math.floor(e/6e4),n=(e%6e4/1e3).toFixed(0);return t+":"+(n<10?"0":"")+n}},{key:"renderSongs",value:function(){var e=this;return this.props.songs.map(function(t,n){var a=t.track.id!==e.props.songId||e.props.songPaused?"fa-play-circle-o":"fa-pause-circle-o";return l.a.createElement("li",{className:t.track.id===e.props.songId?"active user-song-item":"user-song-item",key:n},l.a.createElement("div",{onClick:function(){t.track.id===e.props.songId&&e.props.songPlaying&&e.props.songPaused?e.props.resumeSong():e.props.songPlaying&&!e.props.songPaused&&t.track.id===e.props.songId?e.props.pauseSong():e.props.audioControl(t)},className:"play-song"},l.a.createElement("i",{className:"fa ".concat(a," play-btn"),"aria-hidden":"true"})),"songs"!==e.props.viewType&&l.a.createElement("p",{className:"add-song",onClick:function(){e.props.addSongToLibrary(e.props.token,t.track.id)}},e.props.songAddedId===t.track.id?l.a.createElement("i",{className:"fa fa-check add-song","aria-hidden":"true"}):l.a.createElement("i",{className:"fa fa-plus add-song","aria-hidden":"true"})),"songs"==e.props.viewType&&l.a.createElement("p",{className:"add-song"},l.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})),l.a.createElement("div",{className:"song-title"},l.a.createElement("p",null,t.track.name)),l.a.createElement("div",{className:"song-artist"},l.a.createElement("p",null,t.track.artists[0].name)),l.a.createElement("div",{className:"song-album"},l.a.createElement("p",null,t.track.album.name)),l.a.createElement("div",{className:"song-added"},l.a.createElement("p",null,Z()(t.added_at).format("YYYY-MM-DD"))),l.a.createElement("div",{className:"song-length"},l.a.createElement("p",null,e.msToMinutesAndSeconds(t.track.duration_ms))))})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"song-header-container"},l.a.createElement("div",{className:"song-title-header"},l.a.createElement("p",null,"Title")),l.a.createElement("div",{className:"song-artist-header"},l.a.createElement("p",null,"Artist")),l.a.createElement("div",{className:"song-album-header"},l.a.createElement("p",null,"Album")),l.a.createElement("div",{className:"song-added-header"},l.a.createElement("i",{className:"fa fa-calendar-plus-o","aria-hidden":"true"})),l.a.createElement("div",{className:"song-length-header"},l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-clock-o","aria-hidden":"true"})))),this.props.songs&&!this.props.fetchSongsPending&&!this.props.fetchPlaylistSongsPending&&this.renderSongs())}}]),t}(c.Component)),de=Object(f.b)(function(e){return{token:e.token.token?e.token.token:"",songs:e.songs.songs?e.songs.songs:"",fetchSongsError:e.songs.fetchSongsError,fetchSongsPending:e.songs.fetchSongsPending,fetchPlaylistSongsPending:e.songs.fetchPlaylistSongsPending,songPlaying:e.songs.songPlaying,songPaused:e.songs.songPaused,songId:e.songs.songId,songAddedId:e.user.songId||"",viewType:e.songs.viewType}},function(e){return Object(E.b)({fetchSongs:D,addSongToLibrary:I},e)})(me),pe=(n(180),function(e){var t=e.songs,n=e.audioControl;return l.a.createElement("ul",{className:"album-view-container"},t.map(function(e,t){return l.a.createElement("li",{onClick:function(){n(e)},className:"album-item",key:t},l.a.createElement("div",null,l.a.createElement("div",{className:"album-image"},l.a.createElement("img",{src:e.track.album.images[0].url,alt:"thumbnail"}),l.a.createElement("div",{className:"play-song"},l.a.createElement("i",{className:"fa fa-play-circle-o play-btn","aria-hidden":"true"}))),l.a.createElement("div",{className:"album-details"},l.a.createElement("p",{className:"album-name"},e.track.album.name),l.a.createElement("p",{className:"artist-name"},e.track.album.artists[0].name))))}))}),Ee=Object(f.b)(function(e){return{songs:e.songs.songs?L()(e.songs.songs,function(e){return e.track.album.name}):""}})(pe),fe=(n(182),function(e){var t=e.artists,n=e.fetchArtistSongs,a=e.token,s=e.updateHeaderTitle;return l.a.createElement("ul",{className:"artist-view-container"},t&&t.map(function(e,t){return l.a.createElement("li",{onClick:function(){!function(e,t){n(e.id,t),s(e.name)}(e,a)},className:"artist-item",key:t},l.a.createElement("div",null,l.a.createElement("div",{className:"artist-image"},l.a.createElement("img",{src:e.images[0]?e.images[0].url:""})),l.a.createElement("div",{className:"artist-details"},l.a.createElement("p",null,e.name))))}))}),he=Object(f.b)(function(e){return{token:e.token.token?e.token.token:"",artists:e.artists.artistList?e.artists.artistList.artists:""}},function(e){return Object(E.b)({fetchArtistSongs:F,updateHeaderTitle:le},e)})(fe),ge=(n(184),function(e){var t=e.headerTitle,n=e.audioControl,a=e.resumeSong,s=e.pauseSong;return l.a.createElement("div",null,"Albums"===t?l.a.createElement(Ee,{audioControl:n}):"Artists"===t?l.a.createElement(he,null):"Browse"===t?l.a.createElement(Se,null):l.a.createElement(de,{resumeSong:a,pauseSong:s,audioControl:n}))}),Se=Object(f.b)(function(e){return{headerTitle:e.ui.title}})(ge),ye=(n(186),function(e){var t,n,a=e.pauseSong,s=e.resumeSong,r=e.fetchCategories,o=e.fetchNewReleases,i=e.fetchFeatured,c=e.updateHeaderTitle,u=e.updateViewType,m=e.songPaused,d=e.headerTitle,p=e.viewType,E=e.playlists,f=e.token,h=e.artists;return"playlist"===p&&(t=E.filter(function(e){return e.name===d})[0]),"Artist"===p&&h.length>0&&(n=h.filter(function(e){return e.name===d})[0]),l.a.createElement("div",{className:"section-title"},"playlist"===p&&l.a.createElement("div",{className:"playlist-title-container"},l.a.createElement("div",{className:"playlist-image-container"},l.a.createElement("img",{className:"playlist-image",src:t.images[0]?t.images[0].url:null})),l.a.createElement("div",{className:"playlist-info-container"},l.a.createElement("p",{className:"playlist-text"},"PLAYLIST"),l.a.createElement("h3",{className:"header-title"},d),l.a.createElement("p",{className:"created-by"},"Created By:"," ",l.a.createElement("span",{className:"lighter-text"},t.owner.display_name)," ","-"," ",t.tracks.total," ","songs"),l.a.createElement("button",{onClick:m?s:a,className:"main-pause-play-btn"},m?"PLAY":"PAUSE"))),"Artist"===p&&n&&l.a.createElement("div",null,l.a.createElement("div",{className:"current-artist-header-container"},l.a.createElement("img",{className:"current-artist-image",src:n.images[0].url}),l.a.createElement("div",{className:"current-artist-info"},l.a.createElement("p",null,"Artist from your library"),l.a.createElement("h3",null,n.name))),l.a.createElement("button",{onClick:m?s:a,className:"main-pause-play-btn artist-button"},m?"PLAY":"PAUSE")),("Songs"===d||"Recently Played"===d||"Albums"===d||"Artists"===d)&&l.a.createElement("div",null,l.a.createElement("h3",{className:"header-title"},d),"Artists"!==d&&l.a.createElement("button",{onClick:m?s:a,className:"main-pause-play-btn"},m?"PLAY":"PAUSE")),"Browse"===d&&l.a.createElement("div",null,l.a.createElement("h3",{className:"header-title"},d),l.a.createElement("div",{className:"browse-headers"},l.a.createElement("p",{className:"Genres"===p?"active":"",onClick:function(){r(f),u("Genres"),c("Browse")}},"Genres"),l.a.createElement("p",{className:"New Releases"===p?"active":"",onClick:function(){o(f),u("New Releases"),c("Browse")}},"New Releases"),l.a.createElement("p",{className:"Featured"===p?"active":"",onClick:function(){i(f),u("Featured"),c("Browse")}},"Featured"))))}),ve=function(e){return function(t){var n=new Request("https://api.spotify.com/v1/browse/categories",{headers:new Headers({Authorization:"Bearer "+e})});fetch(n).then(function(e){return e.json()}).then(function(e){t({type:"FETCH_CATEGORIES_SUCCESS",categories:e.categories})}).catch(function(e){t({type:"FETCH_CATEGORIES_ERROR"})})}},_e=function(e){return function(t){var n=new Request("https://api.spotify.com/v1/browse/new-releases",{headers:new Headers({Authorization:"Bearer "+e})});fetch(n).then(function(e){return e.json()}).then(function(e){t({type:"FETCH_NEW_RELEASES_SUCCESS",newReleases:e.albums})}).catch(function(e){t({type:"FETCH_NEW_RELEASES_ERROR"})})}},be=function(e){return function(t){var n=new Request("https://api.spotify.com/v1/browse/featured-playlists",{headers:new Headers({Authorization:"Bearer "+e})});fetch(n).then(function(e){return e.json()}).then(function(e){t({type:"FETCH_FEATURED_SUCCESS",featured:e.playlists})}).catch(function(e){t({type:"FETCH_FEATURED_ERROR"})})}},Te=Object(f.b)(function(e){return{songPaused:e.songs.songPaused,headerTitle:e.ui.title,viewType:e.songs.viewType,playlists:e.playlist.playlists,artists:e.artists.artistList?e.artists.artistList.artists:[],token:e.token.token}},function(e){return Object(E.b)({fetchCategories:ve,fetchNewReleases:_e,updateHeaderTitle:le,updateViewType:V,fetchFeatured:be},e)})(ye),Ne=(n(188),function(e){var t=e.updateHeaderTitle,n=e.updateViewType,a=e.fetchFeatured,s=e.fetchRecentlyPlayed,r=e.fetchSongs,o=e.fetchAlbums,i=e.fetchArtists,c=e.token,u=e.title,m=e.artistIds;return l.a.createElement("ul",{className:"side-menu-container"},l.a.createElement("li",{onClick:function(){t("Browse"),n("Featured"),a(c)},className:"Browse"===u?"active side-menu-item":"side-menu-item"},"Browse"),l.a.createElement("li",{className:"side-menu-item radio"},"Radio"),l.a.createElement("h3",{className:"user-library-header"},"Your Library"),[{name:"Recently Played",action:s},{name:"Songs",action:r},{name:"Albums",action:o},{name:"Artists",action:i,getArtists:!0}].map(function(e){return l.a.createElement("li",{key:e.name,className:u===e.name?"active side-menu-item":"side-menu-item",onClick:function(){var a;e.getArtists?e.action(c,m):e.action(c),a=e.name,t(a),n(a)}},e.name)}))}),Oe=function(e){return function(t){var n=new Request("https://api.spotify.com/v1/me/albums",{headers:new Headers({Authorization:"Bearer "+e})});t({type:"FETCH_ALBUMS_PENDING"}),fetch(n).then(function(e){return e.json()}).then(function(e){t({type:"FETCH_ALBUMS_SUCCESS",albums:e.items})}).catch(function(e){t({type:"FETCH_ALBUMS_ERROR"})})}},Ce=Object(f.b)(function(e){return{userId:e.user.user?e.user.user.id:"",token:e.token.token?e.token.token:"",artistIds:e.artists.artistIds,title:e.ui.title}},function(e){return Object(E.b)({fetchRecentlyPlayed:Y,fetchSongs:D,fetchAlbums:Oe,fetchArtists:U,fetchFeatured:be,updateViewType:V,updateHeaderTitle:le},e)})(Ne),Re=function(e){function t(){var e,n;Object(a.a)(this,t);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).stopSong=function(){n.audio&&(n.props.stopSong(),n.audio.pause())},n.pauseSong=function(){n.audio&&(n.props.pauseSong(),n.audio.pause())},n.resumeSong=function(){n.audio&&(n.props.resumeSong(),n.audio.play())},n.audioControl=function(e){var t=n.props,a=t.playSong,s=t.stopSong;void 0===n.audio?(a(e.track),n.audio=new Audio(e.track.preview_url),n.audio.play()):(s(),n.audio.pause(),a(e.track),n.audio=new Audio(e.track.preview_url),n.audio.play())},n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUser(this.props.token),this.props.fetchSongs()}},{key:"componentWillReceiveProps",value:function(e){void 0!==this.audio&&(this.audio.volume=e.volume/100)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"app-container"},l.a.createElement("div",{className:"left-side-section"},l.a.createElement(Ce,null),l.a.createElement(ue,null)),l.a.createElement("div",{className:"main-section"},l.a.createElement($,null),l.a.createElement("div",{className:"main-section-container"},l.a.createElement(Te,{pauseSong:this.pauseSong,resumeSong:this.resumeSong}),l.a.createElement(Se,{pauseSong:this.pauseSong,resumeSong:this.resumeSong,audioControl:this.audioControl}))),l.a.createElement(re,{stopSong:this.stopSong,pauseSong:this.pauseSong,resumeSong:this.resumeSong,audioControl:this.audioControl})))}}]),t}(c.Component),Ae=Object(f.b)(function(e){return{token:e.token.token,volume:e.sound.volume}},function(e){return Object(E.b)({fetchUser:j,playSong:M,stopSong:B,pauseSong:x,resumeSong:z,fetchSongs:D},e)})(Re),Pe=n(66),ke=n(194),we=function(e){return{type:"SET_TOKEN",token:e}};var je=function(e){function t(){var e,n;Object(a.a)(this,t);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={isAuthenticated:null},n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){for(var e,t={},n=/([^&;=]+)=?([^&;]*)/g,a=window.location.hash.substring(1);e=n.exec(a);)t[e[1]]=decodeURIComponent(e[2]);t.access_token?(this.setState({isAuthenticated:!0}),this.props.setToken(t.access_token)):(window.location.href="https://accounts.spotify.com/authorize?client_id=a5df0354e4004683bbd1b4ceab1b8974&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/",this.setState({isAuthenticated:!1}))}},{key:"render",value:function(){var e=this.props,t=e.component,n=e.props,a=Object(Pe.a)(e,["component","props"]),s=this.state.isAuthenticated;return l.a.createElement(ke.a,Object.assign({},a,{render:function(e){return!!s&&l.a.createElement(t,Object.assign({},e,n))}}))}}]),t}(l.a.PureComponent),Ie=Object(f.b)(null,function(e){return Object(E.b)({setToken:we},e)})(je);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var He=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(p.a,null,l.a.createElement(Ie,{path:"/",exact:!0,component:Ae})))}}]),t}(c.Component),Le=Object(E.d)(w,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(E.a)(h.a));window.store=Le,m.a.render(l.a.createElement(f.a,{store:Le},l.a.createElement(He,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,n){e.exports=n(191)}},[[68,2,1]]]);
//# sourceMappingURL=main.e79f3ef9.chunk.js.map