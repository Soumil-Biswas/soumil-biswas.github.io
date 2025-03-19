export default function clipBoard(copytext) {
    navigator.clipboard.writeText(copytext);
    alert("Copied "+copytext+" to Clipboard!")
}