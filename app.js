const stars = document.querySelectorAll(".stars i");
const evaluation = document.querySelector(".image");

evaluation.innerHTML = `<h1>Waiting...</h1>`

const StarExperience = index1 => {
  stars.forEach((__, index2) => {
    if (index1 >= index2) {
      stars[index2].classList.add("color");
    } else {
      stars[index2].classList.remove("color");
    }
  });

  const totalEvaluation = document.querySelectorAll('.color').length
  verifyRating(totalEvaluation)
};

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    StarExperience(index);
  });
});

const verifyRating = totalEvaluation =>{
  if(totalEvaluation >= 0 && totalEvaluation <=2){
    evaluation.innerHTML = `<i class='bx bxs-sad'></i>`
  }else if(totalEvaluation == 3){
    evaluation.innerHTML = `<i class='bx bxs-happy'></i>`
  }else{
    evaluation.innerHTML = `<i class='bx bxs-happy-heart-eyes'></i>`
  }
}