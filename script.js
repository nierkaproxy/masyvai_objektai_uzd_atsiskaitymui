import knygos from "./data.js";

for (let i in knygos) {
  for (let j in knygos[i]) {
    console.log(`Category name: ${j}`);
    for (let k in knygos[i][j]) {
      for (let l in knygos[i][j][k]) {
        console.log(`${l}: ${knygos[i][j][k][l]}`);
      }
      console.log("------------------------------------------------");
    }
  }
}
