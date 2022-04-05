const Questions = [{
    id: 0,
    q: "What is capital of Texas?",
    a: [{ text: "Austin", isCorrect: true },
        { text: "Houston", isCorrect: false },
        { text: "Dallas", isCorrect: false },
        { text: "NYC", isCorrect: false }
    ]

},
{
    id: 1,
    q: "what is the derivative of lnx",
    a: [{ text: "e^x", isCorrect: false, isSelected: false },
        { text: "ln(e^x)", isCorrect: false },
        { text: "lnx", isCorrect: false },
        { text: "1/x", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Who is the Greatest Instructor of All Time?",
    a: [{ text: "Omar", isCorrect: true },
        { text: "Bill Belichick", isCorrect: false },
        { text: "Koki Hara", isCorrect: false },
        { text: "My dog", isCorrect: false }
    ]

}
]

var start=true;
var result = document.getElementsByClassName("result");
function quiz(id){
    
    result[0].innerText = "";
    const question = document.getElementById("Q");
    question.innerText = Questions[id].q;
    const op1 = document.getElementById('c1');
    const op2 = document.getElementById('c2');
    const op3 = document.getElementById('c3');
    const op4 = document.getElementById('c4');
    op1.innerText = Questions[id].a[0].text;
    console.log(op1.innerText);
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
    var selected = "";
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
        if(selected===1)
            result[0].innerText="Correct!"
        else{
            result[0].innerText="False!"
        }
    })

    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
        if(selected===1)
        result[0].innerText="Correct!"
    else{
        result[0].innerText="False!"
    }
    })

    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
        if(selected===1)
        result[0].innerText="Correct!"
    else{
        result[0].innerText="False!"
    }
    })

    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
        if(selected===1)
        result[0].innerText="Correct!"
    else{
        result[0].innerText="False!"
    }
    })
}

if (start) {
    quiz("0");
}

const next = document.getElementById('next');
var id=0;
next.addEventListener("click", ()=>{
    start = false;
    if(id<2){
        id++;
        quiz(id);
    }
    else{
        result[0].innerText="Quiz Over!"
    }
})

const restart = document.getElementById('restart');
restart.addEventListener("click",()=>{
    quiz("0");
})


