// let data = [ [ 'Standing LP', 'punch', 'L' ],
// [ 'Standing MP', 'punch', 'M' ],
// [ 'Standing HP', 'punch', 'H' ],
// [ 'Standing LK', 'kick', 'L' ],
// [ 'Standing MK', 'kick', 'M' ],
// [ 'Standing HK', 'kick', 'H' ],
// [ 'Crouching LP', '(WHILE CROUCHING)', 'punch', 'L' ],
// [ 'Crouching MP', '(WHILE CROUCHING)', 'punch', 'M' ],
// [ 'Crouching HP', '(WHILE CROUCHING)', 'punch', 'H' ],
// [ 'Crouching LK', '(WHILE CROUCHING)', 'kick', 'L' ],
// [ 'Crouching MK', '(WHILE CROUCHING)', 'kick', 'M' ],
// [ 'Crouching HK', '(WHILE CROUCHING)', 'kick', 'H' ],
// [ 'Jumping LP', '(DURING JUMP)', 'punch', 'L' ],
// [ 'Jumping MP', '(DURING JUMP)', 'punch', 'M' ],
// [ 'Jumping HP', '(DURING JUMP)', 'punch', 'H' ],
// [ 'Jumping LK', '(DURING JUMP)', 'kick', 'L' ],
// [ 'Jumping MK', '(DURING JUMP)', 'kick', 'M' ],
// [ 'Jumping HK', '(DURING JUMP)', 'kick', 'H' ],
// [ 'Tenmakujinkyaku',
//   '(DURING FORWARD\n                                    JUMP)',
//   '2',
//   '+',
//   'kick',
//   'M' ],
// [ 'Zugaihasatsu', '6', '+', 'punch', 'M' ],
// [ 'Tenha', '4', '+', 'punch', 'H' ],
// [ 'Sekiseiken', '6', '+', 'punch', 'H' ],
// [ 'Kongoken', 'punch', 'H', 'next', 'punch', 'H' ],
// [ 'Kikokurenzan', 'kick', 'H', 'next', 'kick', 'H' ],
// [ 'Goshoha', '5', 'OR', '6', '+', 'punch', 'L', 'kick', 'L' ],
// [ 'Shuretsuzan', '4', '+', 'punch', 'L', 'kick', 'L' ],
// [ '[VS1] Rakan',
//   '(WHEN SELECTING VSKILL\n                                    I)',
//   'punch',
//   'M',
//   'kick',
//   'M' ],
// [ '[VS1] Rakan',
//   '(WHEN SELECTING VSKILL\n                                    I)',
//   '2',
//   '+',
//   'punch',
//   'M',
//   'kick',
//   'M' ],
// [ '[VS1] Rakan Gosho',
//   '(WHEN SELECTING VSKILL\n                                    I)',
//   '(DURING Rakan)',
//   'punch' ],
// [ '[VS1] Rakan Gokyaku',
//   '(WHEN SELECTING VSKILL\n                                    I)',
//   '(DURING Rakan)',
//   'kick' ],
// [ '[VS2] Kiai',
//   '(WHEN SELECTING VSKILL\n                                    II)',
//   'punch',
//   'M',
//   'kick',
//   'M' ],
// [ '[VS2] Sekia Goshoha',
//   '(WHEN SELECTING VSKILL\n                                    II)',
//   'punch',
//   'M',
//   'kick',
//   'M',
//   'next',
//   '63214',
//   '+',
//   'punch' ],
// [ '[VS2] EX Sekia Goshoha',
//   '(WHEN SELECTING\n                                    VSKILL II)',
//   'punch',
//   'M',
//   'kick',
//   'M',
//   'next',
//   '63214',
//   '+',
//   'punch',
//   'punch' ],
// [ 'Dohatsu Shoten', 'punch', 'H', 'kick', 'H' ],
// [ 'Gosenkyaku', '(DURING GUARD)', '6', '+', 'kick', 'L', 'M', 'H' ],
// [ 'L Gohadoken', '236', '+', 'punch', 'L' ],
// [ 'M Gohadoken', '236', '+', 'punch', 'M' ],
// [ 'H Gohadoken', '236', '+', 'punch', 'H' ],
// [ 'EX Gohadoken', '236', '+', 'punch', 'punch' ],
// [ 'L Sekia Goshoha', '63214', '+', 'punch', 'L' ],
// [ 'M Sekia Goshoha', '63214', '+', 'punch', 'M' ],
// [ 'H Sekia Goshoha', '63214', '+', 'punch', 'H' ],
// [ 'EX Sekia Goshoha', '63214', '+', 'punch', 'punch' ],
// [ 'Zanku Hadoken',
//   '(DURING FORWARD\n                                    JUMP)',
//   '236',
//   '+',
//   'punch' ],
// [ 'EX Zanku Hadoken (On release hit)',
//   '(DURING\n                                    JUMP)',
//   '236',
//   '+',
//   'punch',
//   'punch' ],
// [ 'EX Zanku Hadoken (Projectile)',
//   '(DURING\n                                    JUMP)',
//   '236',
//   '+',
//   'punch',
//   'punch' ],
// [ 'L Goshoryuken', '623', '+', 'punch', 'L' ],
// [ 'M Goshoryuken', '623', '+', 'punch', 'M' ],
// [ 'H Goshoryuken', '623', '+', 'punch', 'H' ],
// [ 'EX Goshoryuken', '623', '+', 'punch', 'punch' ],
// [ 'L Tatsumaki Zankukyaku', '214', '+', 'kick', 'L' ],
// [ 'M Tatsumaki Zankukyaku', '214', '+', 'kick', 'M' ],
// [ 'H Tatsumaki Zankukyaku', '214', '+', 'kick', 'H' ],
// [ 'EX Tatsumaki Zankukyaku', '214', '+', 'kick', 'kick' ],
// [ 'Airborne Tatsumaki Zankukyaku',
//   '(DURING\n                                    FORWARD JUMP)',
//   '214',
//   '+',
//   'kick' ],
// [ 'EX Airborne Tatsumaki Zankukyaku',
//   '(DURING\n                                    FORWARD JUMP)',
//   '214',
//   '+',
//   'kick',
//   'kick' ],
// [ 'Ashura Senku (Forward)', '623', '+', 'kick', 'L', 'M', 'H' ],
// [ 'Ashura Senku (Back)', '421', '+', 'kick', 'L', 'M', 'H' ],
// [ 'L Hyakkishu', '41236', '+', 'kick', 'L' ],
// [ 'M Hyakkishu', '41236', '+', 'kick', 'M' ],
// [ 'H Hyakkishu', '41236', '+', 'kick', 'H' ],
// [ 'Hyakki Gozan', '(DURING Hyakkishu)', 'next', '(NO INPUT)' ],
// [ 'Hyakki Gosho', '(DURING Hyakkishu)', 'punch' ],
// [ 'Hyakki Gojin', '(DURING Hyakkishu)', 'kick' ],
// [ 'Hyakki Gosai', '(DURING Hyakkishu)', 'punch', 'L', 'kick', 'L' ],
// [ 'EX Hyakkishu', '41236', '+', 'kick', 'kick' ],
// [ 'EX Hyakki Gozan',
//   '(DURING EX\n                                    Hyakkishu)',
//   'next',
//   '(NO INPUT)' ],
// [ 'EX Hyakki Gosho',
//   '(DURING EX\n                                    Hyakkishu)',
//   'punch' ],
// [ 'EX Hyakki Gojin',
//   '(DURING EX\n                                    Hyakkishu)',
//   'kick' ],
// [ 'EX Hyakki Gosai',
//   '(DURING EX\n                                    Hyakkishu)',
//   'punch',
//   'L',
//   'kick',
//   'L' ],
// [ 'Hyakki Gozanku (On startup hit)',
//   '(DURING EX\n                                    Hyakkishu)',
//   '236',
//   '+',
//   'punch' ],
// [ 'Hyakki Gozanku (Projectile)',
//   '(DURING EX\n                                    Hyakkishu)',
//   '236',
//   '+',
//   'punch' ],
// [ 'Hyakki Gorasen',
//   '(DURING EX\n                                    Hyakkishu)',
//   '214',
//   '+',
//   'kick' ],
// [ 'V', 'Gohadoken', '236', '+', 'punch' ],
// [ 'V', 'Zanku Hadoken', '(DURING JUMP)', '236', '+', 'punch' ],
// [ 'V', 'L Goshoryuken', '623', '+', 'punch', 'L' ],
// [ 'V', 'M Goshoryuken', '623', '+', 'punch', 'M' ],
// [ 'V', 'H Goshoryuken', '623', '+', 'punch', 'H' ],
// [ 'Sekia Kuretsuha', '236', '236', '+', 'punch' ],
// [ 'V',
//   'Shun Goku Satsu',
//   'punch',
//   'L',
//   'next',
//   'punch',
//   'L',
//   'next',
//   '6',
//   'next',
//   'kick',
//   'L',
//   'next',
//   'punch',
//   'H' ] ]

//   data.forEach(function(tokens, index) {
//     let i = 0;
//     let l = tokens.length;
    
//     while (i < l) {
//       let t = tokens[i];
//       if (t == 'punch' || t == 'kick') {
//         tokens[i] = t === 'punch' ? 'P' : 'K';
//         let j = i + 1;
//         if (j < l) {
//           let nt = tokens[j];
//           if (nt == 'L' || nt == 'M' || nt == 'H') {
//             tokens[i] = nt + (t === 'punch' ? 'P' : 'K');
//             tokens[j] = '';
//           }
//         }
//       } else if (t == 'next') {
//         tokens[i] = '.';
//       }

//       i++;
//     }

//     if (tokens[0] === 'V') {
//       tokens[0] = `[VT] ${tokens[1]}`;
//       tokens[1] = '';
//     }

//   data[index] = tokens.filter(Boolean);
//   });

//   console.log(data);
  
// let url = 'https://streetfighter.com/wp-content/uploads/2019/11/portrait-ryu-2.jpg';
// let re = /portrait-([^-\d]+)-{0,1}\d\.jpg/;
// let matches = url.match(re);
// console.log(matches[1]);
const abg = require('./frames/abigail.json');
const list = abg['vt1'];
console.log(list[list.length - 1].frame);