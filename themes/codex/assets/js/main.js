const cardContainer = document.getElementById('card-container');

let cards = document.querySelectorAll('.card');

let currentCardIndex = 0;

function arrangeCards() {
// it is mean begin of the list is the bottom of the desk
    cards.forEach((card, index) => {
        card.style.zIndex = index;
        // const currentScale = 1 - 0.1 * index;
        const currentTranslate = 20 * index;
        card.style.transform = `translateX(-50%)  translateX(${currentTranslate}px) translateY(-50%) translateY(${currentTranslate}px) `;
        card.addEventListener('mouseover', () => {
            card.style.transform = `translateX(-50%) scaleX(1) translateX(${currentTranslate +30}px) translateY(-50%) translateY(${currentTranslate - 30}px)`;

        })
        card.addEventListener('mouseout', () => {
            card.style.transform = `translateX(-50%) scaleX(1)  translateX(${currentTranslate}px) translateY(-50%) translateY(${currentTranslate}px)`;

        })
    })
}


function moveCardToTop(card) {
    // convert cards to array
    let cardsArray = Array.from(cards);
    // pop card out of cards array
    cardsArray.splice(cardsArray.indexOf(card), 1);
    // add card to the bottom of the cards array
    cardsArray.push(card);
    // update cards array
    cards = cardsArray;
    // arrange cards
    arrangeCards();
}

function moveCardToBottom(card) {

    // convert cards to array
    let cardsArray = Array.from(cards);
    // pop card out of cards array
    cardsArray.splice(cardsArray.indexOf(card), 1);
    // add card to the top of the cards array
    cardsArray.unshift(card);
    // update cards array
    cards = cardsArray;
    // arrange cards
    arrangeCards();
}


arrangeCards();
cards.forEach(card => {
    const hammer = new Hammer(card);
    hammer.on('pan', (event) => {
        // move card with mouse
        card.style.transform = `translate(-50%,-50%) translate(${event.deltaX}px, ${event.deltaY}px) scale(${1 - 0.1 * currentCardIndex})`;
    })
    hammer.on('panend', (event) => {
        // move card to bottom
        if (card.style.zIndex == cards.length - 1) {
            moveCardToBottom(card);
        } else  {
            moveCardToTop(card);
        }
    })
})




cardContainer.addEventListener("mousemove", function ($event) {
    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = $event.clientX - rect.left;
        const y = $event.clientY - rect.top;

        card.style.setProperty("--xPos", `${x}px`);
        card.style.setProperty("--yPos", `${y}px`);
    });
});
