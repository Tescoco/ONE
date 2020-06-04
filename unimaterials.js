var a = document.getElementById("input")
var form = document.getElementById("Search")

function search(){
    switch (a.value){
        case "funaab":
            location.assign("./funaab/funaab.html")
        break;
        case "Federal University of agriculture Abeokuta":
            location.assign("./funaab/funaab.html")
        break;
        case "Oau":
            location.assign("./oau/oau.html")
        break;
        case "Unilag":
            location.assign("./unilag/unilag.html")
        break;
        case "UI":
            location.assign("./ui/ui.html")
        break;
        case "Obafemi Awolowo Universit":
            location.assign("./oau/oau.html")
        break;
        case "University of Ibadan":
            location.assign("./ui/ui.html")
        break;
        case "University of Lagos":
            location.assign("./unilag/unilag.html")
        break;
        default:
            location.assign("error.html")
   }
}