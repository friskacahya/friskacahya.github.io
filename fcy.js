function wordPlay() {
    var words = [' Great ', ' Wonderful ', ' Splendid ', ' Beautiful ', ' Exceptional ', ' Extraordinary ', ' Amazing']
    var date = new Date();
    var day = date.getDay();
    var seconds = date.getSeconds();
    var weekDays = [' Sunday', ' Monday', ' Tuesday', ' Wednesday', ' Thursday', ' Friday', ' Saturday']

    for (var x = 0; x < words.length; x++) {
        var word = words[x];
        if (word[1] == "A" || word[1] == "E") {
        word ='an' + word;
        } else {
        word = 'a' + word;
        }
    }
    var wordGame = 'I hope you have ' + word + weekDays[day] + '!';
    document.getElementById('wordplay').innerHTML = wordGame;
}

wordPlay();
setInterval(wordPlay, 1000);


var form = document.getElementById("contact");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thank you! I've received your message!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem."
      });
    }
    form.addEventListener("submit", handleSubmit)
