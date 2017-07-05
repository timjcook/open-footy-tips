import moment from 'moment';

export default function(server) {

  let adelaideOval = server.create('ground', { name: 'Adelaide Oval', state: 'South Australia' });
  server.create('ground', { name: 'University of Tasmania Stadium', state: 'Tasmania' });
  server.create('ground', { name: 'Blundstone Arena', state: 'Tasmania' });
  server.create('ground', { name: 'Cazalys Stadium', state: 'Queensland' });
  let domain = server.create('ground', { name: 'Domain Stadium', state: 'Western Australia' });
  let etihad = server.create('ground', { name: 'Etihad Stadium', state: 'Victoria' });
  let gabba = server.create('ground', { name: 'The Gabba', state: 'Queensland' });
  server.create('ground', { name: 'Jiangwan Stadium', state: 'China' });
  server.create('ground', { name: 'UNSW Canberra Oval', state: 'Canberra' });
  server.create('ground', { name: 'Mars Stadium', state: 'Victoria' });
  let mcg = server.create('ground', { name: 'MCG', state: 'Victoria' });
  let metricon = server.create('ground', { name: 'Metricon Stadium', state: 'Queensland' });
  let scg = server.create('ground', { name: 'SCG', state: 'New South Wales' });
  let simonds = server.create('ground', { name: 'Simonds Stadium', state: 'Victoria' });
  let spotless = server.create('ground', { name: 'Spotless Stadium', state: 'New South Wales' });
  server.create('ground', { name: 'TIO Stadium', state: 'Northern Territory' });
  server.create('ground', { name: 'TIO Traeger Park', state: 'Northern Territory' });

  let adelaide = server.create('team', { name: 'Adelaide', nickname: 'Crows', homeGround: adelaideOval });
  let brisbane = server.create('team', { name: 'Brisbane', nickname: 'Lions', homeGround: gabba });
  let carlton = server.create('team', { name: 'Carlton', nickname: 'Blues', homeGround: mcg });
  let collingwood = server.create('team', { name: 'Collingwood', nickname: 'Magpies', homeGround: mcg });
  let essendon = server.create('team', { name: 'Essendon', nickname: 'Bombers', homeGround: etihad });
  let fremantle = server.create('team', { name: 'Fremantle', nickname: 'Dockers', homeGround: domain });
  let geelong = server.create('team', { name: 'Geelong', nickname: 'Cats', homeGround: simonds });
  let goldCoast = server.create('team', { name: 'Gold Coast', nickname: 'Suns', homeGround: metricon });
  let gws = server.create('team', { name: 'Greater Western Sydney', nickname: 'Giants', homeGround: spotless });
  let hawthorn = server.create('team', { name: 'Hawthorn', nickname: 'Hawks', homeGround: mcg });
  let melbourne = server.create('team', { name: 'Melbourne', nickname: 'Demons', homeGround: mcg });
  let north = server.create('team', { name: 'North Melbourne', nickname: 'Kangaroos', homeGround: etihad });
  let port = server.create('team', { name: 'Port Adelaide', nickname: 'Power', homeGround: adelaideOval });
  let richmond = server.create('team', { name: 'Richmond', nickname: 'Tigers', homeGround: mcg });
  let saints = server.create('team', { name: 'St Kilda', nickname: 'Saints', homeGround: etihad });
  let sydney = server.create('team', { name: 'Sydney', nickname: 'Swans', homeGround: scg });
  let westCoast = server.create('team', { name: 'West Coast', nickname: 'Eagles', homeGround: domain });
  let bulldogs = server.create('team', { name: 'Western Bulldogs', nickname: 'Bulldogs', homeGround: etihad });

  let season = server.create('season', {
    year: 2017
  });

  server.create('round', { season, roundNumber: 1, matches: [
    server.create('match', {
      startTime: moment('2017-3-23 19:20'),
      homeTeam: carlton,
      awayTeam: richmond,
      ground: mcg,
      isCompleted: false
    }),
    server.create('match', {
      startTime: moment('2017-3-24 19:50'),
      homeTeam: collingwood,
      awayTeam: bulldogs,
      ground: mcg,
      isCompleted: false
    }),
    server.create('match', {
      startTime: moment('2017-3-25 16:35'),
      homeTeam: saints,
      awayTeam: melbourne,
      ground: etihad,
      isCompleted: false
    }),
    server.create('match', {
      startTime: moment('2017-3-25 16:35'),
      homeTeam: sydney,
      awayTeam: port,
      ground: scg,
      isCompleted: false
    }),
    server.create('match', {
      startTime: moment('2017-3-25 19:25'),
      homeTeam: essendon,
      awayTeam: hawthorn,
      ground: mcg,
      isCompleted: false
    }),
    server.create('match', {
      startTime: moment('2017-3-25 19:05'),
      homeTeam: goldCoast,
      awayTeam: brisbane,
      ground: metricon,
      isCompleted: false
    }),
    server.create('match', {
      startTime: moment('2017-3-26 13:10'),
      homeTeam: north,
      awayTeam: westCoast,
      ground: etihad,
      isCompleted: false
    }),
    server.create('match', {
      startTime: moment('2017-3-26 14:50'),
      homeTeam: adelaide,
      awayTeam: gws,
      ground: adelaideOval,
      isCompleted: false
    }),
    server.create('match', {
      startTime: moment('2017-3-26 16:40'),
      homeTeam: fremantle,
      awayTeam: geelong,
      ground: domain,
      isCompleted: false
    })]
  });

  server.create('round', { season, roundNumber: 2 });
  server.create('round', { season, roundNumber: 3 });
  server.create('round', { season, roundNumber: 4 });
  server.create('round', { season, roundNumber: 5 });
  server.create('round', { season, roundNumber: 6 });
  server.create('round', { season, roundNumber: 7 });
  server.create('round', { season, roundNumber: 8 });
  server.create('round', { season, roundNumber: 9 });
  server.create('round', { season, roundNumber: 10 });
  server.create('round', { season, roundNumber: 11 });
  server.create('round', { season, roundNumber: 12 });
  server.create('round', { season, roundNumber: 13 });
  server.create('round', { season, roundNumber: 14 });
  server.create('round', { season, roundNumber: 15 });
  server.create('round', { season, roundNumber: 16 });
  server.create('round', { season, roundNumber: 17 });
  server.create('round', { season, roundNumber: 18 });
  server.create('round', { season, roundNumber: 19 });
  server.create('round', { season, roundNumber: 20 });
  server.create('round', { season, roundNumber: 21 });
  server.create('round', { season, roundNumber: 22 });
  server.create('round', { season, roundNumber: 23 });
}
