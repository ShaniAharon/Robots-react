// export function makeId(length = 5) {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for (var i = 0; i < length; i++) {
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
// }

export function makeId(leng = 5) {
  let id = '';
  for (let i = 0; i < leng; i++) {
    id += String.fromCharCode(Math.random() * (127 - 35) + 35);
  }
  return id;
}
