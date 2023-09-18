var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.responseText);
        console.log(data);

        var ul = document.createElement('ul');
        ul.setAttribute('class', 'notes');

        data.forEach(element => {
            var li = document.createElement('li');

            ul.appendChild(li);
            li.appendChild(document.createTextNode(element.content));
        });

        document.getElementById("notes").appendChild(ul);
    }
}

xhttp.open("GET", "data.json", true);
xhttp.send();