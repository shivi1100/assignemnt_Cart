function toggle(){
    const card = document.getElementById('pairOne');
    if(card.style.display === "hidden") {
        card.style.display = "block";
    }
    else{
        card.style.display = "none";
    }
}