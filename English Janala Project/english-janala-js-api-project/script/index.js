// LoadingSpinnerFunction
const showLoading = (status) => {
  if (status == true) {
    document.getElementById("loading-spinner").classList.remove("hidden");
    document.getElementById("word-container").classList.add("hidden");
  } else {
    document.getElementById("loading-spinner").classList.add("hidden");
    document.getElementById("word-container").classList.remove("hidden");
  }
};

// PronounceWordsFunction
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}

// RemoveActiveClassFunction
const removeActiveClass = () => {
  const lessonButtons = document.querySelectorAll(".lesson-btn");
  //   console.log(lessonButtons);

  lessonButtons.forEach((btn) => btn.classList.remove("active"));
};

// LoadWordDetails
const loadWordDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  //   console.log(url);

  const res = await fetch(url);
  const details = await res.json();
  //   console.log(details);

  displayWordDetails(details.data);
};

// SynonymMap
const createElements = (arr) => {
  const htmlElements = arr.map((el) => `<span class="btn">${el}</span>`);
  return htmlElements.join(" ");
};

// DisplayWordDetails
const displayWordDetails = (word) => {
  //   console.log(word);

  const wordsDetailsBox = document.getElementById("words-details-container");
  wordsDetailsBox.innerHTML = `
    <div>
        <h2 class="text-2xl font-bold">
            ${word.word} (<i class="fa-solid fa-microphone-lines"></i> : ${word.pronunciation})
        </h2>
    </div>
    <div>
        <h3 class="font-bold">Meaning</h3>
        <p>${word.meaning}</p>
    </div>
    <div>
        <h3 class="font-bold">Example</h3>
        <p>${word.sentence}</p>
    </div>
    <div>
        <h3 class="font-bold">Synonym</h3>
        <div>
            ${createElements(word.synonyms)}
        </div>
    </div>
`;
  document.getElementById("word_info_modal").showModal();
};

// LoadLevelWordsFunction
const loadLevelWord = (id) => {
  //   console.log(id);

  showLoading(true); // ShowLoadingSpinner

  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  //   console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickedBtn = document.getElementById(`lesson-btn-${id}`);
      removeActiveClass(); // RemoveAllActiveClass
      //   console.log(clickedBtn);
      clickedBtn.classList.add("active"); // AddActiveClass
      displayLevelWord(data.data);
    });
};

// DisplayLevelWordsFunction
const displayLevelWord = (words) => {
  //   console.log(words);

  // 1. GetContainer
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  if (words.length == 0) {
    wordContainer.innerHTML = `
    <div class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla">
        <img class="mx-auto" src="./assets/alert-error.png" />
        <p class="text-xl font-medium text-gray-400">
            এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
        </p>
        <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
    </div>
    `;

    showLoading(false); // HideLoadingSpinner

    return;
  }

  // 2. GetWords
  words.forEach((word) => {
    // console.log(word);

    // 3. CreateElement

    const card = document.createElement("div");
    card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${word.word ? word.word : "No word found!"}</h2>
            <p class="font-semibold">Meaning / Pronounciation</p>
            <div class="text-2xl font-medium font-bangla">"${word.meaning ? word.meaning : "No meaning found"} / ${word.pronunciation ? word.pronunciation : "No pronounciation found!"}"</div>
            <div class="flex justify-between items-center">
              <button
                onclick="loadWordDetail(${word.id})"
                class="cursor-pointer bg-[#1A91FF10] hover:bg-[#1A91FF80] transition-colors duration-300 p-3"
              >
                <i class="fa-solid fa-circle-info"></i>
              </button>
              <button
                onclick="pronounceWord('${word.word}')"
                class="cursor-pointer bg-[#1A91FF10] hover:bg-[#1A91FF80] transition-colors duration-300 p-3"
              >
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
        </div>
    `;
    wordContainer.append(card);
  });
  showLoading(false); // HideLoadingSpinner
};

// LoadLessonsFunction
const loadLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url) //PromiseOfResponse
    .then((res) => res.json()) //PromiseOfJSONData
    .then((data) => displayLesson(data.data));
};

// DisplayLessonsFunction
const displayLesson = (lessons) => {
  //   console.log(lessons);

  // 1. GetContainer
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  //   2. GetIntoEveryLessons
  for (let lesson of lessons) {
    // 3. CreateElement
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
            <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
        </button>
    `;

    // 4. AppendIntoContainer
    levelContainer.append(btnDiv);
  }
};

loadLessons();

// SearchFieldFunction
document.getElementById("btn-search").addEventListener("click", () => {
  removeActiveClass(); // RemoveActiveClass

  const input = document.getElementById("input-search");
  const searchValue = input.value.trim().toLowerCase();
  console.log(searchValue);

  fetch("https://openapi.programming-hero.com/api/words/all")
    .then((res) => res.json())
    .then((data) => {
      const allWords = data.data;
      console.log(allWords);

      const filterWords = allWords.filter((word) =>
        word.word.toLowerCase().includes(searchValue),
      );
      //   console.log(filterWords);

      displayLevelWord(filterWords);
    });
});
