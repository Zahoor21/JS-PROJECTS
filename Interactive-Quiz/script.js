let ques = document.getElementById("ques");
let btn1 = document.getElementById("ans1");
let btn2 = document.getElementById("ans2");
let btn3 = document.getElementById("ans3");
let btn4 = document.getElementById("ans4");
let res = document.getElementById("res");
let correct = document.getElementById("correct");
let wrong = document.getElementById("wrong")

let question = [ 
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        correctAnswer: "Au"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
        correctAnswer: "Mitochondria"
    },
    {
        question: "Who is known as the Father of Computers?",
        options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        correctAnswer: "Charles Babbage"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "95°C", "100°C", "105°C"],
        correctAnswer: "100°C"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
        correctAnswer: "Hydrogen"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correctAnswer: "Diamond"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Who was the first man to walk on the moon?",
        options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Michael Collins"],
        correctAnswer: "Neil Armstrong"
    },
    
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
        correctAnswer: "New Delhi"
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Sardar Patel"],
        correctAnswer: "Jawaharlal Nehru"
    },
    {
        question: "What is the national animal of India?",
        options: ["Lion", "Elephant", "Tiger", "Peacock"],
        correctAnswer: "Tiger"
    },
    {
        question: "Which river is considered the holiest river in India?",
        options: ["Yamuna", "Godavari", "Ganga", "Narmada"],
        correctAnswer: "Ganga"
    },
    {
        question: "Who is known as the Father of the Indian Constitution?",
        options: ["B. R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
        correctAnswer: "B. R. Ambedkar"
    },
    {
        question: "In which year did India gain independence from British rule?",
        options: ["1945", "1946", "1947", "1948"],
        correctAnswer: "1947"
    },
    {
        question: "What is the national sport of India?",
        options: ["Cricket", "Hockey", "Kabaddi", "Badminton"],
        correctAnswer: "Hockey"
    },
    {
        question: "Which festival is known as the festival of lights in India?",
        options: ["Holi", "Diwali", "Dussehra", "Eid"],
        correctAnswer: "Diwali"
    },
    {
        question: "Who wrote the Indian national anthem?",
        options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subramania Bharati"],
        correctAnswer: "Rabindranath Tagore"
    },
    {
        question: "What is the largest state in India by area?",
        options: ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
        correctAnswer: "Rajasthan"
    },
    {
        question: "Which Indian city is known as the Silicon Valley of India?",
        options: ["Hyderabad", "Bengaluru", "Pune", "Gurugram"],
        correctAnswer: "Bengaluru"
    },
    {
        question: "What is the national flower of India?",
        options: ["Rose", "Lily", "Lotus", "Marigold"],
        correctAnswer: "Lotus"
    },
    {
        question: "Who is the author of the book 'India Wins Freedom'?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Maulana Abul Kalam Azad", "Sardar Patel"],
        correctAnswer: "Maulana Abul Kalam Azad"
    },
    {
        question: "What is the national bird of India?",
        options: ["Peacock", "Eagle", "Parrot", "Crow"],
        correctAnswer: "Peacock"
    },
    {
        question: "Which Indian state is known as the 'Land of Five Rivers'?",
        options: ["Punjab", "Haryana", "Uttar Pradesh", "Bihar"],
        correctAnswer: "Punjab"
    },
    {
        question: "Who was the first woman Prime Minister of India?",
        options: ["Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu", "Pratibha Patil"],
        correctAnswer: "Indira Gandhi"
    },
    {
        question: "Which is the longest river in India?",
        options: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        correctAnswer: "Ganga"
    },
    {
        question: "Who is known as the Iron Man of India?",
        options: ["Subhas Chandra Bose", "Jawaharlal Nehru", "Sardar Patel", "Bhagat Singh"],
        correctAnswer: "Sardar Patel"
    },
    {
        question: "Which Indian state is famous for its tea gardens?",
        options: ["Kerala", "Assam", "West Bengal", "Himachal Pradesh"],
        correctAnswer: "Assam"
    },
    {
        question: "What is the official language of the Indian government?",
        options: ["Hindi", "English", "Bengali", "Tamil"],
        correctAnswer: "Hindi"
    },
    {
        question: "Which is the smallest state in India by area?",
        options: ["Sikkim", "Goa", "Tripura", "Meghalaya"],
        correctAnswer: "Goa"
    }
]

let displayQuestion =()=>{
        let noQ = question.length;
        let sel_Q=Math.round(Math.random()*noQ);
    
        ques.innerHTML = question[sel_Q].question;
        btn1.innerHTML = question[sel_Q].options[0];
        btn2.innerHTML = question[sel_Q].options[1];
        btn3.innerHTML = question[sel_Q].options[2];
        btn4.innerHTML = question[sel_Q].options[3];
        return sel_Q;
}




 let opt = displayQuestion();

let correctCount = 0;
let wrongCount = 0



let Abtn = document.querySelectorAll(".Abtn")


Abtn.forEach((button)=>{

    button.addEventListener("click",()=>{
        if(question[opt].correctAnswer == button.innerText){
            res.innerHTML = "CORRECT"
            opt = displayQuestion();
            correct.innerHTML = `Correct Count: ${++correctCount}`
            res.style.color = "green"
            EndQues();
        }
        else{
            res.innerHTML = "Wrong Ans "
            // opt = displayQuestion();
            // updataCount("wrong")
            wrong.innerHTML = `Wrong Count: ${++wrongCount}`
            res.style.color= "#FF6B6B";
            EndQues();
        }
    })
})
let cont = document.getElementById("cont");
let EndQues = ()=>{
    if(correctCount == 10){
        cont.style.display = "flex"
        cont.querySelector("h1").innerHTML = `Your Quiz is Completed! <br> Correct Count = ${correctCount} <br> Wrong Count = ${wrongCount}`
        cont.querySelector("h1").style.color = "green"
    }
    else if(wrongCount == 10){
        cont.style.display = "flex"
        cont.querySelector("h1").innerHTML = `Your Quiz is Completed! <br> Correct Count = ${correctCount} <br> Wrong Count = ${wrongCount}`
        cont.querySelector("h1").style.color = "red"
    }
}