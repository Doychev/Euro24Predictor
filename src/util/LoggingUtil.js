export function logNicely() {
  for (let arg of arguments) {
    console.log(JSON.stringify(arg, null, 2));
  }
}
