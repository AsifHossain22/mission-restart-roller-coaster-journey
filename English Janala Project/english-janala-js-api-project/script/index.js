const loadLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url) //PromiseOfResponse
    .then((res) => res.json()) //PromiseOfJSONData
    .then((data) => displayLesson(data.data));
};

// DisplayLessons
const displayLesson = (lessons) => {
  //   console.log(lessons);

  // 1. GetContainer
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  //   2. GetIntoEveryLessons
  for (let lesson of lessons) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
        </button>
    `;

    // 4. AppendIntoContainer
    levelContainer.append(btnDiv);
  }
};

loadLessons();
