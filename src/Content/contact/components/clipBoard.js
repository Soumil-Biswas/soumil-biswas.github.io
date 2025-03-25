export default function clipBoard(copytext) {
    navigator.clipboard.writeText(copytext);
    flash("Copied "+copytext+" to Clipboard!")
}