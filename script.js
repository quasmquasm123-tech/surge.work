// Configuration
const CONFIG = {
    topembedApis: {
        nfl: 'https://topembed.pw/api.php?format=json&sport=American+Football&tournament=NFL',
        nba: 'https://topembed.pw/api.php?format=json&sport=Basketball&tournament=NBA',
        mlb: 'https://topembed.pw/api.php?format=json&sport=Baseball&tournament=MLB',
        nhl: 'https://topembed.pw/api.php?format=json&sport=Ice+Hockey&tournament=NHL',
        soccer: 'https://topembed.pw/api.php?format=json&sport=Football',
        cfb: 'https://topembed.pw/api.php?format=json&sport=American+Football&tournament=NCAA',
        mma: 'https://topembed.pw/api.php?format=json&sport=MMA',
        boxing: 'https://topembed.pw/api.php?format=json&sport=Boxing'
    },
    leagues: ['nfl', 'nba', 'mlb', 'nhl', 'soccer', 'cfb', 'mma', 'boxing']
};

// Global Variables
let currentSection = 'home';
let currentDateOffset = 0;
let allEvents = [];

// MANUAL EVENTS DATA
const MANUAL_EVENTS = {
    nfl: [
        {
            id: 'nfl_1',
            title: "Philadelphia Eagles vs New York Jets",
            time: "5:15 AM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-12T05:15:00-04:00"),
            homeTeam: {
                name: "New York Jets",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png"
            },
            awayTeam: {
                name: "Philadelphia Eagles",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png"
            },
            channels: [{ name: "ESPN", embedUrl: "https://topembed.pw/channel/espn", quality: "HD" }]
        },
        {
            id: 'nfl_2',
            title: "Denver Broncos vs New York Jets (London Game)",
            time: "6:30 PM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-12T18:30:00-04:00"),
            homeTeam: {
                name: "New York Jets",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png"
            },
            awayTeam: {
                name: "Denver Broncos",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/den.png"
            },
            channels: [{ name: "NFL Network", embedUrl: "https://topembed.pw/channel/nfl", quality: "HD" }]
        },
        {
            id: 'nfl_3',
            title: "Arizona Cardinals vs Indianapolis Colts",
            time: "10:00 PM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-12T22:00:00-04:00"),
            homeTeam: {
                name: "Indianapolis Colts",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png"
            },
            awayTeam: {
                name: "Arizona Cardinals",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png"
            },
            channels: [{ name: "FOX Sports", embedUrl: "https://topembed.pw/channel/fox", quality: "HD" }]
        },
        {
            id: 'nfl_4',
            title: "Los Angeles Rams vs Miami Dolphins",
            time: "10:00 PM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-12T22:00:00-04:00"),
            homeTeam: {
                name: "Miami Dolphins",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png"
            },
            awayTeam: {
                name: "Los Angeles Rams",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png"
            },
            channels: [{ name: "CBS Sports", embedUrl: "https://topembed.pw/channel/cbs", quality: "720p" }]
        },
        {
            id: 'nfl_5',
            title: "New England Patriots vs New Orleans Saints",
            time: "10:00 PM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-12T22:00:00-04:00"),
            homeTeam: {
                name: "New Orleans Saints",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/no.png"
            },
            awayTeam: {
                name: "New England Patriots",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png"
            },
            channels: [{ name: "FOX Sports", embedUrl: "https://topembed.pw/channel/fox", quality: "HD" }]
        },
        {
            id: 'nfl_6',
            title: "Cleveland Browns vs Pittsburgh Steelers",
            time: "10:00 PM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-12T22:00:00-04:00"),
            homeTeam: {
                name: "Pittsburgh Steelers",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png"
            },
            awayTeam: {
                name: "Cleveland Browns",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png"
            },
            channels: [{ name: "CBS Sports", embedUrl: "https://topembed.pw/channel/cbs", quality: "HD" }]
        },
        {
            id: 'nfl_7',
            title: "Dallas Cowboys vs Carolina Panthers",
            time: "10:00 PM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-12T22:00:00-04:00"),
            homeTeam: {
                name: "Carolina Panthers",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/car.png"
            },
            awayTeam: {
                name: "Dallas Cowboys",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png"
            },
            channels: [{ name: "FOX Sports", embedUrl: "https://topembed.pw/channel/fox", quality: "HD" }]
        },
        {
            id: 'nfl_8',
            title: "Seattle Seahawks vs Jacksonville Jaguars",
            time: "10:00 PM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-12T22:00:00-04:00"),
            homeTeam: {
                name: "Jacksonville Jaguars",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png"
            },
            awayTeam: {
                name: "Seattle Seahawks",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png"
            },
            channels: [{ name: "CBS Sports", embedUrl: "https://topembed.pw/channel/cbs", quality: "HD" }]
        },
        {
            id: 'nfl_9',
            title: "Los Angeles Chargers vs Baltimore Ravens",
            time: "10:00 PM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-12T22:00:00-04:00"),
            homeTeam: {
                name: "Baltimore Ravens",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png"
            },
            awayTeam: {
                name: "Los Angeles Chargers",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png"
            },
            channels: [{ name: "CBS Sports", embedUrl: "https://topembed.pw/channel/cbs", quality: "HD" }]
        },
        {
            id: 'nfl_10',
            title: "Tennessee Titans vs Las Vegas Raiders",
            time: "1:05 AM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-13T01:05:00-04:00"),
            homeTeam: {
                name: "Las Vegas Raiders",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png"
            },
            awayTeam: {
                name: "Tennessee Titans",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png"
            },
            channels: [{ name: "NBC Sports", embedUrl: "https://topembed.pw/channel/nbc", quality: "HD" }]
        },
        {
            id: 'nfl_11',
            title: "Cincinnati Bengals vs Green Bay Packers",
            time: "1:25 AM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-13T01:25:00-04:00"),
            homeTeam: {
                name: "Green Bay Packers",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png"
            },
            awayTeam: {
                name: "Cincinnati Bengals",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png"
            },
            channels: [{ name: "CBS Sports", embedUrl: "https://topembed.pw/channel/cbs", quality: "HD" }]
        },
        {
            id: 'nfl_12',
            title: "San Francisco 49ers vs Tampa Bay Buccaneers",
            time: "1:25 AM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-13T01:25:00-04:00"),
            homeTeam: {
                name: "Tampa Bay Buccaneers",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png"
            },
            awayTeam: {
                name: "San Francisco 49ers",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png"
            },
            channels: [{ name: "FOX Sports", embedUrl: "https://topembed.pw/channel/fox", quality: "HD" }]
        },
        {
            id: 'nfl_13',
            title: "Detroit Lions vs Kansas City Chiefs",
            time: "5:20 AM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-13T05:20:00-04:00"),
            homeTeam: {
                name: "Kansas City Chiefs",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png"
            },
            awayTeam: {
                name: "Detroit Lions",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/det.png"
            },
            channels: [{ name: "NBC Sports", embedUrl: "https://topembed.pw/channel/nbc", quality: "HD" }]
        },
        {
            id: 'nfl_14',
            title: "Buffalo Bills vs Atlanta Falcons",
            time: "4:15 AM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-14T04:15:00-04:00"),
            homeTeam: {
                name: "Atlanta Falcons",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png"
            },
            awayTeam: {
                name: "Buffalo Bills",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png"
            },
            channels: [{ name: "ESPN", embedUrl: "https://topembed.pw/channel/espn", quality: "HD" }]
        },
        {
            id: 'nfl_15',
            title: "Chicago Bears vs Washington Commanders",
            time: "5:15 AM",
            league: "NFL",
            status: "upcoming",
            date: new Date("2025-10-14T05:15:00-04:00"),
            homeTeam: {
                name: "Washington Commanders",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png"
            },
            awayTeam: {
                name: "Chicago Bears",
                logo: "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png"
            },
            channels: [{ name: "ESPN", embedUrl: "https://topembed.pw/channel/espn", quality: "HD" }]
        }
    ],

    nba: [
        {
            id: "nba_1",
            title: "San Antonio Spurs vs Miami Heat",
            time: "4:30 AM ET",
            league: "NBA",
            status: "upcoming",
            date: new Date("2025-10-08T04:30:00-04:00"),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Miami Heat",
                logo: "https://a.espncdn.com/i/teamlogos/nba/500/mia.png",
                score: "0"
            },
            awayTeam: {
                name: "San Antonio Spurs",
                logo: "https://a.espncdn.com/i/teamlogos/nba/500/sa.png",
                score: "0"
            },
            channels: [
                { name: "BallySportsSun", embedUrl: "https://topembed.pw/channel/BallySportsSun[USA]", quality: "HD" },
                { name: "NBA TV", embedUrl: "https://topembed.pw/channel/NBATV[USA]", quality: "720p" }
            ]
        },
        {
            id: "nba_2",
            title: "Utah Jazz vs Houston Rockets",
            time: "5:00 AM ET",
            league: "NBA",
            status: "upcoming",
            date: new Date("2025-10-08T05:00:00-04:00"),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Houston Rockets",
                logo: "https://a.espncdn.com/i/teamlogos/nba/500/hou.png",
                score: "0"
            },
            awayTeam: {
                name: "Utah Jazz",
                logo: "https://a.espncdn.com/i/teamlogos/nba/500/utah.png",
                score: "0"
            },
            channels: [
                { name: "TNT", embedUrl: "https://topembed.pw/channel/tnt", quality: "HD" }
            ]
        },
        {
            id: "nba_3",
            title: "Boston Celtics vs Memphis Grizzlies",
            time: "5:00 AM ET",
            league: "NBA",
            status: "upcoming",
            date: new Date("2025-10-08T05:00:00-04:00"),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Memphis Grizzlies",
                logo: "https://a.espncdn.com/i/teamlogos/nba/500/mem.png",
                score: "0"
            },
            awayTeam: {
                name: "Boston Celtics",
                logo: "https://a.espncdn.com/i/teamlogos/nba/500/bos.png",
                score: "0"
            },
            channels: [
                { name: "ABC", embedUrl: "https://topembed.pw/channel/abc", quality: "HD" }
            ]
        },
        {
            id: "nba_4",
            title: "Portland Trail Blazers vs Golden State Warriors",
            time: "7:00 AM ET",
            league: "NBA",
            status: "upcoming",
            date: new Date("2025-10-08T07:00:00-04:00"),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Golden State Warriors",
                logo: "https://a.espncdn.com/i/teamlogos/nba/500/gs.png",
                score: "0"
            },
            awayTeam: {
                name: "Portland Trail Blazers",
                logo: "https://a.espncdn.com/i/teamlogos/nba/500/por.png",
                score: "0"
            },
            channels: [
                { name: "ESPN", embedUrl: "https://topembed.pw/channel/espn", quality: "HD" }
            ]
        },
        {
            id: "nba_5",
            title: "Toronto Raptors vs Sacramento Kings",
            time: "7:00 AM ET",
            league: "NBA",
            status: "upcoming",
            date: new Date("2025-10-08T07:00:00-04:00"),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Sacramento Kings",
                logo: "https://a.espncdn.com/i/teamlogos/nba/500/sac.png",
                score: "0"
            },
            awayTeam: {
                name: "Toronto Raptors",
                logo: "https://a.espncdn.com/i/teamlogos/nba/500/tor.png",
                score: "0"
            },
            channels: [
                { name: "NBA TV", embedUrl: "https://topembed.pw/channel/nbatv", quality: "HD" }
            ]
        }
    ],

    mlb: [
        {
            id: "mlb_1",
            title: "Seattle Mariners vs Detroit Tigers",
            time: "12:08 AM ET",
            league: "MLB",
            status: "upcoming",
            date: new Date("2025-10-08T00:08:00-04:00"),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Detroit Tigers",
                logo: "https://a.espncdn.com/i/teamlogos/mlb/500/det.png",
                score: "0"
            },
            awayTeam: {
                name: "Seattle Mariners",
                logo: "https://a.espncdn.com/i/teamlogos/mlb/500/sea.png",
                score: "0"
            },
            details: "Bryce Miller vs Casey Mize — ALDS Game 4, SEA leads series 2-1",
            channels: [
                { name: "MLB Network", embedUrl: "https://topembed.pw/channel/mlb", quality: "HD" },
                { name: "FOX Sports", embedUrl: "https://topembed.pw/channel/fox", quality: "720p" }
            ]
        },
        {
            id: "mlb_2",
            title: "Milwaukee Brewers vs Chicago Cubs",
            time: "2:08 AM ET",
            league: "MLB",
            status: "upcoming",
            date: new Date("2025-10-08T02:08:00-04:00"),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Chicago Cubs",
                logo: "https://a.espncdn.com/i/teamlogos/mlb/500/chc.png",
                score: "0"
            },
            awayTeam: {
                name: "Milwaukee Brewers",
                logo: "https://a.espncdn.com/i/teamlogos/mlb/500/mil.png",
                score: "0"
            },
            details: "Quinn Priester vs Jameson Taillon — NLDS Game 3, MIL leads series 2-0",
            channels: [
                { name: "TBS", embedUrl: "https://topembed.pw/channel/tbs", quality: "HD" }
            ]
        },
        {
            id: "mlb_3",
            title: "Toronto Blue Jays vs New York Yankees",
            time: "4:08 AM ET",
            league: "MLB",
            status: "upcoming",
            date: new Date("2025-10-08T04:08:00-04:00"),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "New York Yankees",
                logo: "https://a.espncdn.com/i/teamlogos/mlb/500/nyy.png",
                score: "0"
            },
            awayTeam: {
                name: "Toronto Blue Jays",
                logo: "https://a.espncdn.com/i/teamlogos/mlb/500/tor.png",
                score: "0"
            },
            details: "Louis Varland vs Cam Schlittler — ALDS Game 4, TOR leads series 2-1",
            channels: [
                { name: "ESPN", embedUrl: "https://topembed.pw/channel/espn", quality: "HD" },
                { name: "MLB Network", embedUrl: "https://topembed.pw/channel/mlb", quality: "HD" }
            ]
        },
        {
            id: "mlb_4",
            title: "Philadelphia Phillies vs Los Angeles Dodgers",
            time: "6:08 AM ET",
            league: "MLB",
            status: "upcoming",
            date: new Date("2025-10-08T06:08:00-04:00"),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Los Angeles Dodgers",
                logo: "https://a.espncdn.com/i/teamlogos/mlb/500/lad.png",
                score: "0"
            },
            awayTeam: {
                name: "Philadelphia Phillies",
                logo: "https://a.espncdn.com/i/teamlogos/mlb/500/phi.png",
                score: "0"
            },
            details: "Aaron Nola vs Yoshinobu Yamamoto — NLDS Game 3, LAD leads series 2-0",
            channels: [
                { name: "FOX Sports", embedUrl: "https://topembed.pw/channel/fox", quality: "HD" },
                { name: "TBS", embedUrl: "https://topembed.pw/channel/tbs", quality: "720p" }
            ]
        }
    ],

    soccer: [
        {
            id: 'soccer_1',
            title: "Manchester United vs Liverpool",
            time: "3:00 PM",
            league: "SOCCER",
            status: "upcoming",
            date: new Date(Date.now() + 24 * 60 * 60 * 1000),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Liverpool",
                logo: "https://a.espncdn.com/i/teamlogos/soccer/500/364.png",
                score: "0"
            },
            awayTeam: {
                name: "Manchester United",
                logo: "https://a.espncdn.com/i/teamlogos/soccer/500/360.png",
                score: "0"
            },
            channels: [
                { name: "Sky Sports", embedUrl: "https://topembed.pw/channel/skysports", quality: "HD" },
                { name: "NBC Sports", embedUrl: "https://topembed.pw/channel/nbc", quality: "720p" }
            ]
        }
    ],

    nhl: [
        {
            id: "nhl_1",
            title: "Montreal Canadiens vs Toronto Maple Leafs",
            time: "4:00 AM ET",
            league: "NHL",
            status: "upcoming",
            date: new Date("2025-10-08T04:00:00-04:00"),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Toronto Maple Leafs",
                logo: "https://a.espncdn.com/i/teamlogos/nhl/500/tor.png",
                score: "0"
            },
            awayTeam: {
                name: "Montreal Canadiens",
                logo: "https://a.espncdn.com/i/teamlogos/nhl/500/mtl.png",
                score: "0"
            },
            channels: [
                { name: "ESPN+", embedUrl: "https://topembed.pw/channel/espnplus", quality: "HD" },
                { name: "NHL Network", embedUrl: "https://topembed.pw/channel/nhl", quality: "720p" }
            ]
        },
        {
            id: "nhl_2",
            title: "Boston Bruins vs Washington Capitals",
            time: "4:30 AM ET",
            league: "NHL",
            status: "upcoming",
            date: new Date("2025-10-08T04:30:00-04:00"),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Washington Capitals",
                logo: "https://a.espncdn.com/i/teamlogos/nhl/500/wsh.png",
                score: "0"
            },
            awayTeam: {
                name: "Boston Bruins",
                logo: "https://a.espncdn.com/i/teamlogos/nhl/500/bos.png",
                score: "0"
            },
            channels: [
                { name: "TNT", embedUrl: "https://topembed.pw/channel/tnt", quality: "HD" }
            ]
        },
        {
            id: "nhl_3",
            title: "Calgary Flames vs Edmonton Oilers",
            time: "7:00 AM ET",
            league: "NHL",
            status: "upcoming",
            date: new Date("2025-10-08T07:00:00-04:00"),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Edmonton Oilers",
                logo: "https://a.espncdn.com/i/teamlogos/nhl/500/edm.png",
                score: "0"
            },
            awayTeam: {
                name: "Calgary Flames",
                logo: "https://a.espncdn.com/i/teamlogos/nhl/500/cgy.png",
                score: "0"
            },
            channels: [
                { name: "Sportsnet", embedUrl: "https://topembed.pw/channel/sportsnet", quality: "HD" }
            ]
        },
        {
            id: "nhl_4",
            title: "Los Angeles Kings vs Vegas Golden Knights",
            time: "7:00 AM ET",
            league: "NHL",
            status: "upcoming",
            date: new Date("2025-10-08T07:00:00-04:00"),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Vegas Golden Knights",
                logo: "https://a.espncdn.com/i/teamlogos/nhl/500/vgs.png",
                score: "0"
            },
            awayTeam: {
                name: "Los Angeles Kings",
                logo: "https://a.espncdn.com/i/teamlogos/nhl/500/la.png",
                score: "0"
            },
            channels: [
                { name: "ESPN", embedUrl: "https://topembed.pw/channel/espn", quality: "HD" }
            ]
        }
    ],

    cfb: [
        {
            id: 'cfb_1',
            title: "Alabama vs Georgia",
            time: "8:00 PM",
            league: "CFB",
            status: "upcoming",
            date: new Date(Date.now() + 48 * 60 * 60 * 1000),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Georgia Bulldogs",
                logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/61.png",
                score: "0"
            },
            awayTeam: {
                name: "Alabama Crimson Tide",
                logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/333.png",
                score: "0"
            },
            channels: [
                { name: "ESPN College", embedUrl: "https://topembed.pw/channel/espn", quality: "HD" }
            ]
        }
    ],

    mma: [
        {
            id: 'mma_1',
            title: "UFC 300: Main Event",
            time: "10:00 PM",
            league: "MMA",
            status: "upcoming",
            date: new Date(Date.now() + 72 * 60 * 60 * 1000),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Champion Fighter",
                logo: "https://a.espncdn.com/i/teamlogos/mma/500/default.png",
                score: "0"
            },
            awayTeam: {
                name: "Challenger Fighter",
                logo: "https://a.espncdn.com/i/teamlogos/mma/500/default.png",
                score: "0"
            },
            channels: [
                { name: "UFC PPV", embedUrl: "https://topembed.pw/channel/ufc", quality: "HD" }
            ]
        }
    ],

    boxing: [
        {
            id: 'boxing_1',
            title: "World Heavyweight Championship",
            time: "9:00 PM",
            league: "BOXING",
            status: "upcoming",
            date: new Date(Date.now() + 96 * 60 * 60 * 1000),
            isLive: false,
            isUpcoming: true,
            homeTeam: {
                name: "Champion Boxer",
                logo: "https://a.espncdn.com/i/teamlogos/boxing/500/default.png",
                score: "0"
            },
            awayTeam: {
                name: "Challenger Boxer",
                logo: "https://a.espncdn.com/i/teamlogos/boxing/500/default.png",
                score: "0"
            },
            channels: [
                { name: "DAZN", embedUrl: "https://topembed.pw/channel/dazn", quality: "HD" }
            ]
        }
    ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 SportStreams App Starting...');
    initializeApp();
});

function initializeApp() {
    console.log('✅ initializeApp() called');
    setupEventListeners();
    loadManualEvents();
    showSection('home');
    console.log('🎯 App Ready! Manual events loaded');
}

function setupEventListeners() {
    console.log('🔧 Setting up event listeners...');

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.getAttribute('data-section');
            console.log(`📱 Navigation: ${section}`);
            showSection(section);
        });
    });

    // Date Selector
    document.querySelectorAll('.date-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.date-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentDateOffset = parseInt(tab.getAttribute('data-date'));
            console.log(`📅 Date changed: ${currentDateOffset}`);
            filterEventsByDate();
        });
    });

    console.log('✅ Event listeners setup complete');
}

// MANUAL EVENTS LOAD KARNE WALA FUNCTION
function loadManualEvents() {
    console.log('📥 Loading manual events...');

    // Clear any existing events
    allEvents = [];

    let totalLoaded = 0;

    // Har league ke events add karo
    for (let league in MANUAL_EVENTS) {
        const leagueEvents = MANUAL_EVENTS[league];
        console.log(`➕ Adding ${leagueEvents.length} events for ${league}`);

        if (leagueEvents.length > 0) {
            allEvents = [...allEvents, ...leagueEvents];
            totalLoaded += leagueEvents.length;
        }
    }

    console.log(`✅ Total manual events loaded: ${totalLoaded}`);
    console.log('All events:', allEvents);
}

// FIXED DISPLAY LEAGUE EVENTS FUNCTION
function displayLeagueEvents(league, events) {
    console.log(`🎯 DisplayLeagueEvents called for: ${league}`);
    console.log(`Events to display:`, events);

    let container;

    if (league === 'home') {
        container = document.getElementById('home-events');
    } else {
        // DIRECT CONTAINER ACCESS - YEH FIX HAI
        container = document.getElementById(`${league}-events`);
        console.log(`Looking for container: ${league}-events`);
        console.log('Container found:', !!container);
    }

    if (!container) {
        console.error(`❌ Container not found for: ${league}`);
        return;
    }

    container.innerHTML = '';

    if (events.length === 0) {
        container.innerHTML = `
            <div class="no-events">
                <h3>No Events Available</h3>
                <p>Check back later for ${league.toUpperCase()} events.</p>
            </div>
        `;
        return;
    }

    events.forEach(event => {
        const eventCard = createEventCard(event);
        container.appendChild(eventCard);
    });

    console.log(`✅ Displayed ${events.length} events for ${league}`);
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.addEventListener('click', () => openChannelSelector(event));

    const time = formatEventTime(event.date);
    const channelCount = event.channels ? event.channels.length : 0;

    card.innerHTML = `
        <div class="event-header">
            <span class="event-sport">${event.league}</span>
            <span class="event-status status-${event.status}">${event.status.toUpperCase()}</span>
        </div>
        <div class="event-teams">
            <div class="team">
                <img src="${event.awayTeam.logo}" alt="${event.awayTeam.name}" class="team-logo" onerror="this.src='https://a.espncdn.com/i/teamlogos/league/500/default.png'">
                <div class="team-name">${event.awayTeam.name}</div>
                ${event.awayTeam.score ? `<div class="team-score">${event.awayTeam.score}</div>` : ''}
            </div>
            <div class="vs">VS</div>
            <div class="team">
                <img src="${event.homeTeam.logo}" alt="${event.homeTeam.name}" class="team-logo" onerror="this.src='https://a.espncdn.com/i/teamlogos/league/500/default.png'">
                <div class="team-name">${event.homeTeam.name}</div>
                ${event.homeTeam.score ? `<div class="team-score">${event.homeTeam.score}</div>` : ''}
            </div>
        </div>
        <div class="event-time">${time}</div>
        <div class="event-meta">
            <span>${getLeagueFullName(event.league)}</span>
            <span>📺 ${channelCount} Streams</span>
        </div>
    `;

    return card;
}

function openChannelSelector(event) {
    console.log(`🎬 Opening channel selector for: ${event.title}`);

    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(10px);
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: linear-gradient(135deg, #1a1f3d 0%, #0c0f1d 100%);
        padding: 2rem;
        border-radius: 15px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        border: 1px solid rgba(255,255,255,0.2);
    `;

    modalContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <h2 style="color: #ff6b35; margin: 0;">Watch Live Stream</h2>
            <button onclick="this.closest('.channel-modal').remove()" style="background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer;">×</button>
        </div>
        
        <div style="margin-bottom: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 10px;">
            <h3 style="margin: 0 0 0.5rem 0; color: white;">${event.title}</h3>
            <p style="margin: 0; color: #b0b7c8;">${formatEventTime(event.date)} • ${event.league}</p>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="color: #4ecdc4; margin-bottom: 1rem;">Available Streams:</h4>
            <div id="channel-list" style="display: flex; flex-direction: column; gap: 0.5rem;"></div>
        </div>
        
        <div style="text-align: center; color: #b0b7c8; font-size: 0.9rem;">
            <p>Select a stream to start watching</p>
        </div>
    `;

    modal.appendChild(modalContent);
    modal.className = 'channel-modal';
    document.body.appendChild(modal);

    const channelList = document.getElementById('channel-list');
    if (event.channels && event.channels.length > 0) {
        event.channels.forEach((channel, index) => {
            const channelItem = document.createElement('div');
            channelItem.style.cssText = `
                padding: 1rem;
                background: rgba(255,255,255,0.1);
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                border: 1px solid rgba(255,255,255,0.2);
            `;
            channelItem.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div style="font-weight: 600; color: white;">${channel.name}</div>
                        <div style="font-size: 0.8rem; color: #4ecdc4;">Quality: ${channel.quality}</div>
                    </div>
                    <button style="background: #ff6b35; color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; font-weight: 600;">
                        Watch
                    </button>
                </div>
            `;

            channelItem.addEventListener('mouseenter', () => {
                channelItem.style.background = 'rgba(255,255,255,0.15)';
                channelItem.style.borderColor = '#ff6b35';
            });

            channelItem.addEventListener('mouseleave', () => {
                channelItem.style.background = 'rgba(255,255,255,0.1)';
                channelItem.style.borderColor = 'rgba(255,255,255,0.2)';
            });

            channelItem.addEventListener('click', () => {
                console.log(`📺 Stream selected: ${channel.name}`);
                openStreamWithChannel(event, channel);
                modal.remove();
            });

            channelList.appendChild(channelItem);
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function openStreamWithChannel(event, channel) {
    console.log(`🎥 Opening stream: ${channel.name}`);
    const streamPageUrl = createStreamPageUrl(event, channel);
    window.open(streamPageUrl, '_blank');
}

function openStreamWithChannel(event, channel) {
    console.log(`🎥 Opening stream: ${channel.name}`);

    // Combine event + channel details
    const streamData = {
        title: event.title,
        league: event.league,
        time: formatEventTime(event.date),
        status: event.status,
        channelName: channel.name,
        embedUrl: channel.embedUrl,
        quality: channel.quality
    };

    // Generate unique ID and store in localStorage
    const streamId = `${event.league}-${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem(streamId, JSON.stringify(streamData));

    // Open short URL
    window.open(`stream.html?id=${streamId}`, "_blank");
}

// Helper functions
function formatEventTime(eventDate) {
    if (!eventDate) return 'Time TBD ET';

    try {
        return eventDate.toLocaleString('en-US', {
            weekday: 'short',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: 'America/New_York'
        }) + ' ET';
    } catch (error) {
        return 'Time TBD ET';
    }
}

function getLeagueFullName(leagueCode) {
    const leagues = {
        'NFL': 'National Football League',
        'NBA': 'National Basketball Association',
        'MLB': 'Major League Baseball',
        'NHL': 'National Hockey League',
        'SOCCER': 'International Soccer',
        'CFB': 'College Football',
        'MMA': 'Mixed Martial Arts',
        'BOXING': 'Professional Boxing'
    };

    return leagues[leagueCode] || leagueCode;
}

function isEventOnSelectedDate(eventDate) {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + currentDateOffset);

    return eventDate.getDate() === targetDate.getDate() &&
        eventDate.getMonth() === targetDate.getMonth() &&
        eventDate.getFullYear() === targetDate.getFullYear();
}

function getDateDisplayText() {
    const dates = ['Today', 'Tomorrow', 'Day 3'];
    return dates[currentDateOffset] || 'Selected Date';
}

// FIXED SHOW SECTION FUNCTION
function showSection(sectionId) {
    console.log(`🔄 Showing section: ${sectionId}`);

    // Navigation active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        }
    });

    // Sections hide/show
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        console.log(`✅ Section activated: ${sectionId}-section`);
    } else {
        console.error(`❌ Section not found: ${sectionId}-section`);
    }

    currentSection = sectionId;
    filterEventsByDate();
}

// FIXED FILTER EVENTS FUNCTION
function filterEventsByDate() {
    console.log(`📅 Filtering events for: ${currentSection} on date offset: ${currentDateOffset}`);

    if (currentSection === 'home') {
        displayHomeEvents();
    } else {
        // CORRECT FILTERING - YEH FIX HAI
        const leagueEvents = allEvents.filter(event =>
            event.league.toLowerCase() === currentSection.toLowerCase() &&  // lowercase compare
            isEventOnSelectedDate(event.date)
        );
        console.log(`📊 Found ${leagueEvents.length} events for ${currentSection}`);
        console.log('Filtered events:', leagueEvents);
        displayLeagueEvents(currentSection, leagueEvents);
    }
}

// FIXED DISPLAY HOME EVENTS
function displayHomeEvents() {
    const container = document.getElementById('home-events');
    if (!container) {
        console.error('❌ Home events container not found');
        return;
    }

    const todayEvents = allEvents.filter(event => isEventOnSelectedDate(event.date));
    const mixedEvents = todayEvents.slice(0, 8);

    console.log(`🏠 Displaying ${mixedEvents.length} events for home`);

    container.innerHTML = '';

    if (mixedEvents.length === 0) {
        container.innerHTML = `
            <div class="no-events">
                <h3>No Events Today</h3>
                <p>No events found for ${getDateDisplayText()}.</p>
            </div>
        `;
        return;
    }

    mixedEvents.forEach(event => {
        const eventCard = createEventCard(event);
        container.appendChild(eventCard);
    });
}
// ✅ URL Navigation Enhancement (no reload, keeps your same logic)
document.addEventListener("DOMContentLoaded", () => {
    // Open correct section from URL
    const path = window.location.pathname.split("/").pop().toLowerCase();
    const validSections = ["home", "nfl", "nba", "mlb", "nhl", "soccer", "cfb", "mma", "boxing"];
    const sectionName = validSections.includes(path) ? path : "home";
    showSection(sectionName);
});

// ✅ Update URL when user clicks nav
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();
        const section = item.getAttribute("data-section");
        history.pushState(null, "", `/${section}`);
        showSection(section);
    });
});

// ✅ Handle Back/Forward browser buttons
window.addEventListener("popstate", () => {
    const path = window.location.pathname.split("/").pop().toLowerCase();
    const validSections = ["home", "nfl", "nba", "mlb", "nhl", "soccer", "cfb", "mma", "boxing"];
    const sectionName = validSections.includes(path) ? path : "home";
    showSection(sectionName);
});


console.log('✅ SportStreams Manual Schedule Loaded!');
