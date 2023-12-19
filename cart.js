function toggle(){
    const card = document.querySelector('table');
    if(card.style.display === "none") {
        card.style.display = "block";
    }
    else{
        card.style.display = "none";
    }
}

function toggleTwo(){
    const cardOne = document.querySelector('table.pairTwo')
    if(cardOne.style.display === "none") {
        cardOne.style.display = "block";
    }
    else{
        cardOne.style.display = "none"
    }
}

function toggleOne(){
    const cardTwo = document.querySelector('table.pairThree')
    if(cardTwo.style.display === "none") {
        cardTwo.style.display = "block";
    }
    else{
        cardTwo.style.display = "none"
    }
}
