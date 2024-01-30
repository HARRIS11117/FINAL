


const reviews = [
    {
      id: 1,
      name: 'Lee Zii Jia',
      job: 'Co Pilot',
      img: 'ZIIJIA.png',
      text: "Throuhout his badminton career and now being a co pilot, Lee Zii Jia has had nothing but good things to say!",
    },
    {
      id: 2,
      name: 'Chong Wei, Lee',
      job: 'Pilot',
      img: 'CHONGWEI.jpg',
      text: 'Arguably the best badminton player and pilot at the same time, Chong Wei always remained at the top, ranked number one best pilot!',
    },
    {
      id: 3,
      name: 'Kevin Sanjaya Sukamljo',
      job: 'Security',
      img: 'fhfhfhfhfh.png',
      text: 'Kevin is one of the fastest badminton players in the world, combined with his defensive abilities he makes a wonderful security guard!',
    },
    {
      id: 4,
      name: 'Lin Dan',
      job: 'Managers',
      img: 'LINDANN.jpg',
      text: 'He is called the king of badminton for a reason, bringing his commanding control to AirCanada, this proves a wonderful value to the team!',
    },
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });


  let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const randt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    let random = 0;
  for (let i = 0; i < 1; i++) {
    random += randt[getRandomNumber()];
  }

    if (styles.contains("Third")) {
      count--;
    } else if (styles.contains("First")) {
      count++;}
      else if  (styles.contains("Second")){
        count = 0;
      }
    else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

function getRandomNumber() {
    return Math.floor(Math.random() * randt.length);
  }
 

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const Nom = document.getElementById("Fourth");
const color = document.querySelector(".color");

Nom.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
 document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}


function myFunction() {
  var x = document.getElementById("Hello");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}


const rando = document.getElementById("Private");

rando.addEventListener("click", function(){
  console.log("clicked");
});



const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  
  links.classList.toggle("show-links");
});
