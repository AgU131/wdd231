<section id="exercise-container" class="card-container"></section>


// Reference to the container
const container = document.getElementById("exercise-container");

// Create cards for each exercise
exercises.forEach(exercise => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <img src="${exercise.image}" alt="${exercise.name}" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;">
      <h2>${exercise.name}</h2>
      <p><strong>Machine:</strong> ${exercise.machine}</p>
      <p><strong>Time:</strong> ${exercise.time}</p>
      <p><strong>Difficulty:</strong> ${exercise.difficulty}</p>
      <p><strong>Type:</strong> ${exercise.type}</p>
      <p><strong>Muscle Group:</strong> ${exercise.muscleGroup}</p>
      <p><strong>Equipment:</strong> ${exercise.equipmentRequired ? "Yes" : "No"}</p>
      <button class="btn">Start Exercise</button>
      <button class="btn">☆ Add to Favorites ☆</button>
      `;
  container.appendChild(card);
});


// Function for clean and show only filtered exercises
function filterExercisesByMuscle(muscle) {
  container.innerHTML = "";

  const filtered = muscle === "All" ? exercises :
    exercises.filter(ex => ex.muscleGroup.toLowerCase().includes(muscle.toLowerCase()));

  if (filtered.length === 0) {
    container.innerHTML = "<p>No exercises found for that muscle group.</p>";
    return;
  }

  filtered.forEach(exercise => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${exercise.image}" alt="${exercise.name}" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;">
      <h2>${exercise.name}</h2>
      <p><strong>Machine:</strong> ${exercise.machine}</p>
      <p><strong>Time:</strong> ${exercise.time}</p>
      <p><strong>Difficulty:</strong> ${exercise.difficulty}</p>
      <p><strong>Type:</strong> ${exercise.type}</p>
      <p><strong>Muscle Group:</strong> ${exercise.muscleGroup}</p>
      <p><strong>Equipment:</strong> ${exercise.equipmentRequired ? "Yes" : "No"}</p>
      <button class="btn">Start Exercise</button>
      <button class="btn">☆ Add to Favorites ☆</button>
    `;
    container.appendChild(card);
  });
}

// Event listeners for each muscle group
const muscleFilters = ["All", "Chest", "Arms", "Legs", "Back", "Abs", "Full Body"];

muscleFilters.forEach(muscle => {
  const id = muscle.toLowerCase().replace(" ", "");
  document.getElementById(id).addEventListener("click", (event) => {
    event.preventDefault();
    filterExercisesByMuscle(muscle);
  });
});


// Show all exercises by default when the page loads
filterExercisesByMuscle("All");