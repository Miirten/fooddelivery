const qaItems = [
    {
        question: "How do I track my package?",
        answer: "You can easily track your package using out online tracking system. Simply enter your tracking number on our website to get real time updates on your delivery's status.",
    },
    {
        question: "What should I do if my package is damaged or lost?",
        answer: "If your package arrives damaged or is lost in transit, please contact us immediately. We will investigate the mattter and arrange for a replacnment or refund as per our policy.",
    },
    {
        question: "Can I change my delivery address after placing the order?",
        answer: "Yes, you can change your delivery address as long as the package has not been dispatched. Please contact our customer service team as soon as possible to make any changes. ",
    },
    {
        question: "Are there any items that cannot be shipped?",
        answer: "Yes, there are certan restrictions on items that cannot be shipped due to safety and legal reasons. Please refer to our shipping policy or contact us for more information on prohibited items.",
    },
];


const accordianDiv = document.getElementById("accordion")

qaItems.forEach(qaItem => {
    const questionText = qaItem.question
    const answerText = qaItem.answer

    // const {questionText: question, answerText: answer} = qaItem

    const questionDiv = document.createElement("div")
    questionDiv.classList.add("accordion-question") 
    questionDiv.textContent = questionText;

    const answerDiv = document.createElement("div")
    answerDiv.classList.add("accordion-answer")
    answerDiv.textContent = answerText;

    questionDiv.appendChild(answerDiv);

    questionDiv.addEventListener("click", () => {
        questionDiv.classList.toggle("active");
        answerDiv.classList.toggle("active");
    });

    accordianDiv.appendChild(questionDiv)
});

