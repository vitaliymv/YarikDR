let arr = ["ahaha", "lol", "puk puk", "Scoody Magudi"]

$(".catch").mouseenter(function () {
    $(this).text(arr[random(arr.length)])
    $(this).css({
        "left": `${random(1900)}px`,
        "top": `${random(800)}px`,
        "background": `rgb(${random(256)}, ${random(256)}, ${random(256)})`
    })
})
let count = 0;
$(".catch").click(() => {
    count++;
    if (count == 5) {
        explodeFirework();
        setTimeout(() => {
            $(".catch").hide();
        }, 1000); 
        
        $("#btn").css({"display": "flex"})
    }
})

function random(max) {
    return Math.floor(Math.random() * max);
}

function explodeFirework() {
    alert("А ти швидкий, або хитрий :)")
    const firework = document.getElementById('firework');
    firework.classList.add('explode');
  
    setTimeout(() => {
      firework.classList.remove('explode');
    }, 1000);  
  }