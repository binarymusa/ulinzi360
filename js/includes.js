async function loadComponents() {

  const header = await fetch("header.html");
  document.getElementById("header").innerHTML =
    await header.text();

  const footer = await fetch("footer.html");
  document.getElementById("footer").innerHTML =
    await footer.text();

  initMenu();
}

loadComponents();