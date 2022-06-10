var start = true;
var color = ["White_1","Black_1","White_2","Black_2","Black_3","White_3","Black_4","White_4","White_5","Black_5", "White_6", "Black_6", "Black_7", "White_7", "Black_8", "White_8"];
var store = [];
document.addEventListener("keypress",function(event)
{
    if(event.key == "Enter" && start == true)
    {
        document.getElementsByTagName("h1")[0].innerHTML = "Let's Play";
        document.getElementsByTagName("h2")[0].innerHTML = "";
        To_Store();
        start = flase;
    }
}
)
function To_Store()
{   

    var choose = Math.floor(Math.random()*16);
    document.getElementById(color[choose]).classList.add("add");
    store.push(color[choose]);
    setTimeout(() => {document.getElementById(color[choose]).classList.remove("add");}, 1000);
}
var i = 0;
var count = 0;
function Game()
{
    if(document.activeElement.id == store[i])
    {
        if(i == store.length-1)
        {   
            To_Store();
            i = 0;
            count++;
        }
        else
        {
            i++;
        }
    }
    else
    {
        alert("Incorrect !!");
        alert("Score - "+count)
        document.location.reload(true);
    }
    return;
}