// var xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange=function() {
//     if (this.readyState == 4 && this.status == 200) {
//         const data = JSON.parse(this.responseText);
//         console.log(data);

//         var ul = document.createElement('ul');
//         ul.setAttribute('class', 'notes');

//         data.forEach(element => {
//             var li = document.createElement('li');

//             ul.appendChild(li);
//             li.appendChild(document.createTextNode(element.content));
//         });

//         document.getElementById("notes").appendChild(ul);
//     }
// }

// xhttp.open("GET", "data.json", true);
// xhttp.send();








// var notes = [];

// var redrawNotes = function() {
//     console.log(`redrawing ${notes}`);
//     var ul = document.createElement('ul');
//     ul.setAttribute('class', 'notes');

//     notes.forEach(function(note){
//         console.log(`${note} is a note`);
//         var li = document.createElement('li');

//         ul.appendChild(li);
//         li.appendChild(document.createTextNode(note.content));
//     });

//     var noteElement = document.getElementById('notes');

//     if(noteElement.hasChildNodes()){
//         noteElement.removeChild(noteElement.childNodes[0]);
//     }
//     noteElement.appendChild(ul);
// }

// var xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function(){
//     if (this.readyState === 4 && this.status === 200) {
//         console.log(JSON.parse(this.response));
//         notes = JSON.parse(this.responseText);
//         redrawNotes();
//     }
// }

// xhttp.open("GET", "/part0/data.json", true);
// xhttp.send();

// var sendToServer = function(){
//     var xhttpForPost = new XMLHttpRequest();
//     xhttpForPost.onreadystatechange = function(){
//         if (this.readyState == 4 && this.status == 201 ){
//             console.log(this.responseText);
//        }
//     }
// }

// xhttpForPost.open("POST", "new_note_spa", true);
// xhttpForPost.setRequestHeader("Content-type", "application/json");
// xhttpForPost.send(JSON.stringify(note));

// window.onload = function(element){
//     var form = document.getElementById("notes_form");

//     form.onsubmit = function(element){
//         element.preventDefault();

//         var note = {
//             content : element.target.elements[0].value,
//             date : new Date()
//         }

//         notes.push(note);
//         element.target.elements[0].value = "";
//         redrawNotes();
//         sendToServer(note);
//     }
// }


var xhttp = new XMLHttpRequest()
  
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText)
    console.log(data)

    var ul = document.createElement('ul')
    ul.setAttribute('class', 'notes')

    data.forEach(function(note){
      var li = document.createElement('li')
      
      ul.appendChild(li);
      li.appendChild(document.createTextNode(note.content))
    })

    document.getElementById("notes").appendChild(ul)
  }
}

xhttp.open("GET", "/part0/data.json", true)
xhttp.send()