const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

text = document.createTextNode(" — the premier source for web development knowledge.");
p = document.querySelector("p");
p.appendChild(text);
p.style.textAlign = "center";

// section = document.querySelector("section");