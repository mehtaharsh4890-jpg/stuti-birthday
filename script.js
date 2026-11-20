
// Start birthday surprise

function startSurprise() {

    document.getElementById("birthday").scrollIntoView({
        behavior: "smooth"
    });

    celebrate();

}


// Confetti animation

function celebrate() {

    const symbols = ["🎉", "💙", "✨", "🎀", "⭐"];

    for (let i = 0; i < 45; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.innerText = symbols[
            Math.floor(Math.random() * symbols.length)
        ];

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.fontSize =
            (15 + Math.random() * 15) + "px";

        piece.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 4500);

    }

}


// Open birthday letter

function openLetter() {

    const letter = document.getElementById("birthdayLetter");

    letter.classList.toggle("show");

    if (letter.classList.contains("show")) {

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        celebrate();

    }

}


// Floating hearts

const heartContainer = document.getElementById("hearts");

for (let i = 0; i < 15; i++) {

    const heart = document.createElement("span");

    heart.className = "heart";

    heart.innerText = "♡";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = Math.random() * 100 + "vh";

    heart.style.animationDelay =
        Math.random() * 4 + "s";

    heartContainer.appendChild(heart);

}
