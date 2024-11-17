let votesA = 0;
let votesB = 0;
let votesBlank = 0;

// Función para registrar votos
function vote(candidate) {
  if (candidate === "candidateA") {
    votesA++;
    document.getElementById("votesA").textContent = votesA;
  } else if (candidate === "candidateB") {
    votesB++;
    document.getElementById("votesB").textContent = votesB;
  } else if (candidate === "blank") {
    votesBlank++;
    document.getElementById("votesBlank").textContent = votesBlank;
  }
}

// Función para restaurar votos
function resetVotes() {
  votesA = 0;
  votesB = 0;
  votesBlank = 0;

  document.getElementById("votesA").textContent = votesA;
  document.getElementById("votesB").textContent = votesB;
  document.getElementById("votesBlank").textContent = votesBlank;
}
