const quizData = [
  {
    question: "Apa ibu kota Indonesia?",
    a: "Bandung",
    b: "Surabaya",
    c: "Jakarta",
    d: "Medan",
    correct: "c"
  },
  {
    question: "Berapa hasil dari 2 + 3?",
    a: "4",
    b: "5",
    c: "6",
    d: "7",
    correct: "b"
  },
  {
    question: "Apa warna langit saat cerah?",
    a: "Merah",
    b: "Kuning",
    c: "Biru",
    d: "Hijau",
    correct: "c"
  }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.textContent = currentQuizData.question;
  a_text.textContent = currentQuizData.a;
  b_text.textContent = currentQuizData.b;
  c_text.textContent = currentQuizData.c;
  d_text.textContent = currentQuizData.d;
}

function getSelected() {
  const answers = document.getElementsByName('answer');
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      return answers[i].value;
    }
  }
  return null;
}

function deselectAnswers() {
  const answers = document.getElementsByName('answer');
  answers.forEach(ans => ans.checked = false);
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      document.getElementById('quiz').innerHTML = `
        <h2>Kamu mendapatkan skor ${score} dari ${quizData.length}!</h2>
        <button onclick="location.reload()">Muat Ulang</button>
      `;
    }
  } else {
    alert("Pilih salah satu jawaban terlebih dahulu.");
  }
});

loadQuiz();