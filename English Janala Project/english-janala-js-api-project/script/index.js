const loadLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url) //PromiseOfResponse
    .then((res) => res.json()) //PromiseOfJSONData
    .then((data) => displayLesson(data.data));
};

// LoadWordsFunction
const loadLevelWord = (id) => {
  //   console.log(id);

  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  //   console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};

// DisplayLevelWordsFunction
const displayLevelWord = (words) => {
  //   console.log(words);

  // 1. GetContainer
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  // 2. GetWords
  words.forEach((word) => {
    // console.log(word);

    // 3. CreateElement

    // {
    // "id": 4,
    // "level": 5,
    // "word": "Diligent",
    // "meaning": "পরিশ্রমী",
    // "pronunciation": "ডিলিজেন্ট"
    // }

    const card = document.createElement("div");
    card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold">Meaning / Pronounciation</p>
            <div class="font-bangla font-medium text-2xl">"${word.meaning} / ${word.pronunciation}"</div>
            <div class="flex justify-between items-center">
              <button
                class="cursor-pointer bg-[#1A91FF10] hover:bg-[#1A91FF80] transition-colors duration-300 p-3"
              >
                <i class="fa-solid fa-circle-info"></i>
              </button>
              <button
                class="cursor-pointer bg-[#1A91FF10] hover:bg-[#1A91FF80] transition-colors duration-300 p-3"
              >
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
        </div>
    `;
    wordContainer.append(card);
  });
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
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
        </button>
    `;

    // 4. AppendIntoContainer
    levelContainer.append(btnDiv);
  }
};

//

loadLessons();
