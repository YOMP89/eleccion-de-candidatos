let votesA = 0;
let votesB = 0;

function vote(candidate) {
  if (candidate === "candidateA") {
    votesA++;
    document.getElementById("votesA").textContent = votesA;
  } else if (candidate === "candidateB") {
    votesB++;
    document.getElementById("votesB").textContent = votesB;
  }
}
