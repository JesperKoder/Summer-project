function convertUnit() {
  const weight = parseFloat(document.getElementById("numinput").value);
  if (isNaN(weight)) {
    alert("Please enter a valid number for your weight.");
    return;
  }

  const planets = document.querySelectorAll(".card");

  const planetWeight = {
    sun: 27.01,
    mercury: 0.38,
    venus: 0.91,
    earth: 1,
    moon: 0.166,
    mars: 0.38,
    jupiter: 2.34,
    saturn: 1.06,
    uranus: 0.92,
    neptune: 1.19,
    pluto: 0.06,
  };

  planets.forEach((planet) => {
    const resultElement = planet.querySelector("p");
    const planetName = planet.querySelector("h2").textContent;

    const gravity = planetWeight[planetName.toLowerCase()];
    if (!gravity) {
      resultElement.textContent = "Unknown planet.";
    } else {
      const weightOnPlanet = (weight * gravity).toFixed(2);
      resultElement.textContent = `Your weight: ${weightOnPlanet} kg`;
    }
  });
}
