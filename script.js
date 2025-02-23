function recommendMovie() {
    let category = document.getElementById("category").value;
    let result = document.getElementById("result");

    let movies = {
        action: ["Mad Max: Fury Road", "John Wick", "Die Hard"],
        comedy: ["Superbad", "The Hangover", "Step Brothers"],
        drama: ["Forrest Gump", "The Godfather", "Shawshank Redemption"],
        horror: ["The Conjuring", "It", "A Nightmare on Elm Street"],
        "sci-fi": ["Interstellar", "Blade Runner 2049", "Inception"],
        romance: ["The Notebook", "Titanic", "La La Land"],
        thriller: ["Gone Girl", "Se7en", "The Silence of the Lambs"],
        animation: ["Toy Story", "Finding Nemo", "Spider-Man: Into the Spider-Verse"],
        documentary: ["13th", "The Social Dilemma", "Won’t You Be My Neighbor?"],
        fantasy: ["Harry Potter", "The Lord of the Rings", "The Chronicles of Narnia"]
    };

    if (category in movies) {
        let randomMovie = movies[category][Math.floor(Math.random() * movies[category].length)];
        result.innerHTML = `We recommend: <strong>${randomMovie}</strong>`;
    } else {
        result.innerHTML = "Please select a category!";
    }
}
