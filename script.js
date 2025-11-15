let ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
    if (e.target.matches("h1")) {
        if (e.target.classList.contains("select")) {
            e.target.classList.remove("select");
        } else {
            let h1s = document.querySelectorAll("li h1");
            h1s.forEach((e) => {
                e.classList.remove("select");
            })
            e.target.classList.add("select");
        }
    }
})