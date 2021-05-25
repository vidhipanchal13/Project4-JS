//CV screener

console.log("Project 4 CV screener");

//Data is an array of objects which contain information about the candidates
const data = [
  {
    name: "Rosel Arora",
    age: 22,
    city: "kolkata",
    language: "python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Ruhi Patel",
    age: 34,
    city: "Ahmedabad",
    language: "python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Mili Agrwal",
    age: 26,
    city: "Delhi",
    language: "NodeJS",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "kartik singhaniya",
    age: 32,
    city: "koimbtur",
    language: "python",
    framework: "flask",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Ronak shah",
    age: 24,
    city: "Delhi",
    language: "javascripit",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Tiwari Ajay",
    age: 29,
    city: "kolkata",
    language: "javascript",
    framework: "flask",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "vidisha khanna",
    age: 22,
    city: "Ahmedabad",
    language: "PHP",
    framework: "NodeJS",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
  },
  {
    name: "BHumi Trivedi",
    age: 29,
    city: "kolkata",
    language: "javascript",
    framework: "flask",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Ankit Bhardwaj",
    age: 24,
    city: "kolkata",
    language: "javascript",
    framework: "flask",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Rina Shrivastav",
    age: 30,
    city: "kolkata",
    language: "javascript",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    name: "Nisman Khan",
    age: 29,
    city: "Delhi",
    language: "javascript",
    framework: "flask",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Rehana sinh",
    age: 39,
    city: "karnataka",
    language: "javascript",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/78.jpg",
  },
  {
    name: "Hanshika Patel",
    age: 23,
    city: "Ahmedabad",
    language: "python",
    framework: "flask",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

//CV iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}
const candidates = cvIterator(data);
nextCV();
//Button listener for next button
let next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
  let currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");

  if(currentCandidate!=undefined){

  image.innerHTML = `<img src=${currentCandidate.image}>`;
  profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily work on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework}</li>
  </ul>`;
  0
}else{
    alert("end of candidate application");
    window.location.reload();
}
}
