// const cookie = `
// language=en;
//  notification_en=%7B%22132907%22%3A0%2C%22132906%22%3A0%2C%22132901%22%3A0%2C%22132891%22%3A0%2C%22132886%22%3A0%2C%22132849%22%3A0%2C%22132847%22%3A0%2C%22132843%22%3A0%2C%22132839%22%3A0%2C%22132837%22%3A1%7D;
//  scirid=qrNBiNQO_KX9ble2hFinP2ToVnoUemWZ0Eg7w2w0YWFAIc0fzOzOcGfkDO6dzGv-T4wUgFdE3hpZoisfIjfpyzRUX2RNVGU1R1luSjEweDl1MVFfQU5PSV95MjJIdEx4THdMVTNPVEdfTkU;
//  vmail=60;
//  _abck=7A50AACF965DEF96890B86A31A5B1994~-1~YAAQRh0gF2PABZxrAQAA07o/0AJTWqhhM/+61dVITdtAfSknDmcT496XF82qo4x7XrkY/YFavGMnlV+DWTDwYoseQvpTZJEqiks8peccZ2VJO12HSbdw1HPBoQs1F3VSjkb0GhOY6F3L7+9eUazrwy98AnDkRf3nPI2zv2jHJP1edYMLB0/gmc2PlMY2/b9WP5i/IpwhjRLMPJ1cFRP3epTgns8vkC/+1qoC3JfjjgDzFy7cujfWrvRxT60Dm0qa5DsujJeSwND4mYtDDVDWajb+EwYPETF/xTHyEQ==~-1~-1~-1;
//   _ga=GA1.2.1420261656.1576474230`

const puppeteer = require("puppeteer");
const fs = require("fs");

const fetchLinks = async () => {
  const url = "https://game.capcom.com/cfn/sfv/character";
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const links = await page.evaluate(() => {
    let anchors = document.querySelectorAll("ul.characterSelectList a");
    return [].slice.call(anchors).map(o => o.href);
  });

  await browser.close();

  return links;
};

const fetchFrameData = async url => {
  const cookies = [
    {
      domain: "game.capcom.com",
      name: "scirid",
      value:
        "zPqiJa4j5lQu1_wcxJ5KdtVJjrwX965EDC8oEzRU5kbQ0LcDf2ofP_iTIxMQebCjTdGBxlMwyXI5FxmYQr0v_UYwUFROWEFpVXJxTm1VakZnbjNzVDlzTU5kZG9NRmJSMmZJdHlFbm1SNnc"
    },
    {
      domain: "game.capcom.com",
      name: "language",
      value: "en"
    }
  ];

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setCookie(...cookies);
  await page.goto(url);
  // await page.screenshot({ path: 'paypal_login.png' })

  const html = await page.evaluate(() => {
    return document.documentElement.outerHTML;
  });

  await browser.close();

  return html;
};

// const extractFrameData = async location => {
//     // let contentHtml = fs.readFileSync('characters/akuma.html', 'utf8');
//     let contentHtml = fs.readFileSync(location, 'utf8');
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setContent(contentHtml);

//     const data = await page.evaluate(() => {
//         let tables = Array.from(document.querySelectorAll('table.frameTbl'));
//         let result = {};

//         tables.forEach(table => {
//             let data = [];
//             let nameCells = table.querySelectorAll('td.name');

//             for (let i = 0; i < nameCells.length; i++) {
//                 let firstCell = nameCells[i];
//                 let nameNode = firstCell.querySelector('p.name');

//                 let name = '';

//                 if (nameNode.querySelector('span')) {
//                     name +=
//                         '[' + nameNode.querySelector('span').innerText + ']';
//                     name += nameNode.querySelector('span').nextSibling
//                         .textContent;
//                 } else {
//                     name = nameNode.innerText;
//                 }

//                 let imgs = Array.from(
//                     firstCell.querySelectorAll('img.cmd-image-s')
//                 );
//                 let input = '';
//                 let reg = /(\d+)\./;

//                 let currentNode = nameNode.nextSibling;
//                 while (
//                     currentNode &&
//                     currentNode.nodeName === 'SPAN' &&
//                     currentNode.classList.contains('cmdPartsText')
//                 ) {
//                     input += currentNode.innerText;
//                     currentNode = currentNode.nextSibling;
//                 }

//                 // if (firstCell.querySelector('.cmdPartsText')) {
//                 //     input += firstCell.querySelector('.cmdPartsText').innerText;
//                 // }

//                 let prevChar = '';
//                 for (let j = 0; j < imgs.length; j++) {
//                     let img = imgs[j];
//                     let currentBtn = '';
//                     if (img.src.indexOf('key') > -1) {
//                         let matches = img.src.match(reg);
//                         let key = matches[1];
//                         currentBtn += key;
//                         prevChar = 'key';
//                         if (
//                             img.nextElementSibling &&
//                             img.nextElementSibling.nodeName === 'SPAN'
//                         ) {
//                             currentBtn =
//                                 currentBtn + img.nextElementSibling.innerText;
//                             prevChar = '';
//                         }
//                     } else {
//                         if (prevChar == 'key') {
//                             input += '+';
//                         }

//                         if (img.src.indexOf('punch') > -1) {
//                             currentBtn = 'P';
//                         } else if (img.src.indexOf('kick') > -1) {
//                             currentBtn = 'K';
//                         } else if (img.src.indexOf('next') > -1) {
//                             currentBtn = '.';
//                         }

//                         if (
//                             img.nextElementSibling &&
//                             img.nextElementSibling.nodeName === 'SPAN'
//                         ) {
//                             currentBtn =
//                                 img.nextElementSibling.innerText + currentBtn;
//                         }

//                         prevChar = '';
//                     }

//                     input += currentBtn;
//                 }

//                 let frame = [];
//                 let cell = firstCell.nextElementSibling;
//                 let n = 1;
//                 while (cell && cell.nodeName === 'TD') {
//                     if (cell.querySelectorAll('span').length < 1) {
//                         frame.push(cell.innerText.trim());
//                     } else {
//                         if (n == 9 || n == 10) {
//                             frame.push(
//                                 cell.querySelector('span').innerText.trim()
//                             );
//                         } else {
//                             let text = [];
//                             Array.from(cell.querySelectorAll('span')).forEach(
//                                 span => {
//                                     text.push(span.innerText.trim());
//                                 }
//                             );
//                             frame.push(text.join(' '));
//                         }
//                     }

//                     cell = cell.nextElementSibling;
//                     n++;
//                 }

//                 data.push({
//                     name: {
//                         name: name,
//                         input: input
//                     },
//                     frame: frame
//                 });
//             }

//             let trigger = table.getAttribute('vtrigger');
//             result[trigger] = data;
//         });

//         return result;
//     });

//     await browser.close();

//     return data;
// };

const extractFrameData = async location => {
  let contentHtml = fs.readFileSync("characters/akuma.html", "utf8");
  //   let contentHtml = fs.readFileSync(location, "utf8");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on("console", consoleObj => {
    if (consoleObj.type() != "warning") {
      console.log(consoleObj.text());
    }
  });
  await page.setContent(contentHtml);

  const result = await page.evaluate(() => {
    let vts = [1, 2];
    let result = {};
    vts.forEach(vt => {
      let nameCells = Array.from(
        document.querySelectorAll(`table.frameTbl[vtrigger="${vt}"] td.name`)
      );

      let travel = function(node, callback) {
        let root = node;
        let current = node;

        while (true) {
          let child = callback(current);

          if (child) {
            current = child;
            continue;
          }

          if (current == root) {
            return;
          }

          while (!current.nextSibling) {
            if (!current.parentNode || current.parentNode == root) {
              return;
            }
            current = current.parentNode;
          }

          current = current.nextSibling;
        }
      };

      let data = [];
      nameCells.forEach(cell => {
        let arr = [];
        let re = /\/([^./]+).gif/;

        travel(cell, function(node) {
          // console.log('nodeType:', node.nodeType)
          if (node.nodeType == 3) {
            arr.push(node.textContent.trim());
          } else if (node.nodeName.toLowerCase() == "img") {
            let src = node.src;
            let matches = src.match(re);

            arr.push(matches[1]);
          }

          return node.firstChild;
        });

        // let frame = [];

        // let curr = cell.nextElementSibling;
        // let n = 1;
        // while (curr && curr.nodeName === "TD") {
        //   if (curr.querySelectorAll("span").length < 1) {
        //     frame.push(curr.innerText.trim());
        //   } else {
        //     if (n == 9 || n == 10) {
        //       frame.push(curr.querySelector("span").innerText.trim());
        //     } else {
        //       let text = [];
        //       Array.from(curr.querySelectorAll("span")).forEach(span => {
        //         text.push(span.innerText.trim());
        //       });
        //       frame.push(text.join(" "));
        //     }
        //   }

        //   curr = curr.nextElementSibling;
        //   n++;
        // }

        data.push({
          name: arr.filter(Boolean)
          // frame: frame
        });
      });

      result["vt" + vt] = data;
    });

    return result;
  });

  // for (var key in result) {
  //   let data = result[key];
  //   data.forEach(item => {
  //     item.name = formatName(item.name);
  //   });
  // }

  console.log(result);

  await browser.close();

  return result;
};

const extractFrameName = async location => {
  let contentHtml = fs.readFileSync("characters/kage.html", "utf8");
  //   let contentHtml = fs.readFileSync(location, "utf8");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on("console", consoleObj => {
    if (consoleObj.type() != "warning") {
      console.log(consoleObj.text());
    }
  });
  await page.setContent(contentHtml);

  const data = await page.evaluate(() => {
    let nameCells = Array.from(
      document.querySelectorAll(`table.frameTbl[vtrigger="1"] td.name`)
    );

    let travelNode = function(node) {};

    let travel = function(node, callback) {
      let root = node;
      let current = node;

      while (true) {
        let child = callback(current);

        if (child) {
          current = child;
          continue;
        }

        if (current == root) {
          return;
        }

        while (!current.nextSibling) {
          if (!current.parentNode || current.parentNode == root) {
            return;
          }
          current = current.parentNode;
        }

        current = current.nextSibling;
      }
    };

    let data = [];
    nameCells.forEach(cell => {
      let arr = [];
      let re = /\/([^./]+).gif/;

      travel(cell, function(node) {
        // console.log('nodeType:', node.nodeType)
        if (node.nodeName == "P" && node.className == "keyBlockFrm") {
          let img = node.querySelector(".cmd-image-s");
          let src = img.src;
          let matches = src.match(re);
          let btn = matches[1];

          if (btn === "punch") {
            btn = "P";
          } else if (btn === "kick") {
            btn = "K";
          }

          let types = [];
          let spans = node.querySelectorAll("span");
          for (let i = 0; i < spans.length; i++) {
            types.push(spans[i].innerText);
          }

          let btns = types
            .map(type => {
              return type + btn;
            })
            .join("");

          arr.push(btns);

          return null;
        }

        if (node.nodeType == 3) {
          arr.push(node.textContent.trim());
        } else if (node.nodeName.toLowerCase() == "img") {
          let src = node.src;
          let matches = src.match(re);

          let btn = matches[1];

          if (btn === "punch") {
            btn = "P";
          } else if (btn === "kick") {
            btn = "K";
          }

          arr.push(btn);
        }

        return node.firstChild;
      });

      // let frame = [];

      // let curr = cell.nextElementSibling;
      // let n = 1;
      // while (curr && curr.nodeName === "TD") {
      //   if (curr.querySelectorAll("span").length < 1) {
      //     frame.push(curr.innerText.trim());
      //   } else {
      //     if (n == 9 || n == 10) {
      //       frame.push(curr.querySelector("span").innerText.trim());
      //     } else {
      //       let text = [];
      //       Array.from(curr.querySelectorAll("span")).forEach(span => {
      //         text.push(span.innerText.trim());
      //       });
      //       frame.push(text.join(" "));
      //     }
      //   }

      //   curr = curr.nextElementSibling;
      //   n++;
      // }

      data.push(arr.filter(Boolean));
    });

    return data;
  });

  // for (var key in result) {
  //   let data = result[key];
  //   data.forEach(item => {
  //     item.name = formatName(item.name);
  //   });
  // }

  console.log(data);

  await browser.close();

  return data;
};

extractFrameName();

// function formatName(tokens) {
//   let i = 0;
//   let l = tokens.length;

//   while (i < l) {
//     let t = tokens[i];
//     if (t == "punch" || t == "kick") {
//       tokens[i] = t === "punch" ? "P" : "K";
//       let j = i + 1;
//       if (j < l) {
//         let nt = tokens[j];
//         if (nt == "L" || nt == "M" || nt == "H") {
//           tokens[i] = nt + (t === "punch" ? "P" : "K");
//           tokens[j] = "";
//         }
//       }
//     } else if (t == "next") {
//       tokens[i] = ".";
//     }

//     i++;
//   }

//   if (tokens[0] === "V") {
//     tokens[0] = `[VT] ${tokens[1]}`;
//     tokens[1] = "";
//   }

//   return tokens.filter(Boolean);
// }

// 批量提取
// (async function() {
//   const files = fs.readdirSync("characters");
//   for (let i = 0; i < files.length; i++) {
//     const data = await extractFrameData(`characters/${files[i]}`);
//     const fileName = files[i].replace(".html", ".json");

//     fs.writeFileSync("frames/" + fileName, JSON.stringify(data), err => {
//       if (err) {
//         console.log(err);
//       }
//     });
//   }
// })();

// const links = require('./links.json');
// (async () => {
//   let flinks = links.map(o => `${o}/frame/table`);
//   let names = links.map(url => {
//     let temp = url.split('/');
//     return temp[temp.length - 1];
//   });

//   for (let i = 0; i< flinks.length; i++){
//     const html = await fetchFrameData(flinks[i]);
//     console.log(`${names[i]} complete!`);
//     fs.writeFile(`characters/${names[i]}.html`, html, err => {
//       if (err) console.log(err);
//     });
//   }
// })();

// fetchFrameData('https://game.capcom.com/cfn/sfv/character/zeku/frame/table/6').then(function(html){
//   fs.writeFile(`characters/youngzeku.html`, html, console.log);
// });

// fetchLinks().then(links => {
//   fs.writeFile('links.json', JSON.stringify(links), console.log);
// });
