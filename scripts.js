submit = document.getElementById("cmdSubmit");
text = document.getElementById("cmdText");
task = document.getElementById("task");

stage = 0

submit.addEventListener("click", function() {
    switch(text.value) {
        case "Fattar":
            if(stage == 0) {
                updateTask("test");
                stage += 1;
            }
    }
});


function updateTask(newValue) {
    task.classList.add('fade');
    setTimeout(function(){
        task.innerHTML = newValue;
        task.classList.remove('fade')
    }, 500);
    
}