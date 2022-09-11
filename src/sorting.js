export default function sortFunc(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
