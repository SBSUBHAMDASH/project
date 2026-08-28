const questionBank = {

    frontend: {

        easy: [

            {
                q: "What is HTML used for?",
                a: "HTML is used to structure the content of web pages.",
                keyword: ["html", "structure", "web"],
                topic: "HTML"
            },

            {
                q: "What is CSS?",
                a: "CSS is used to style and design HTML elements.",
                keyword: ["css", "style"],
                topic: "CSS"
            },

            {
                q: "What is JavaScript?",
                a: "JavaScript is a programming language used to add behavior and interactivity to web pages.",
                keyword: ["javascript", "programming", "interactive"],
                topic: "JavaScript"
            },

            {
                q: "What is responsive design?",
                a: "Responsive design allows a website to adapt to different screen sizes and devices.",
                keyword: ["responsive", "screen", "device"],
                topic: "Responsive Design"
            },

            {
                q: "What is a web browser?",
                a: "A web browser is software used to access and display websites.",
                keyword: ["browser", "website"],
                topic: "Web Basics"
            }

        ],


        medium: [

            {
                q: "What is the difference between let and const?",
                a: "let allows reassignment while const does not allow reassignment.",
                keyword: ["let", "const", "reassignment"],
                topic: "JavaScript Variables"
            },

            {
                q: "What is the DOM?",
                a: "DOM stands for Document Object Model and represents an HTML document as objects.",
                keyword: ["dom", "document", "object"],
                topic: "DOM"
            },

            {
                q: "What is an API?",
                a: "An API allows different software applications to communicate with each other.",
                keyword: ["api", "communication"],
                topic: "API"
            },

            {
                q: "What is Flexbox?",
                a: "Flexbox is a CSS layout system used to arrange elements efficiently.",
                keyword: ["flexbox", "css", "layout"],
                topic: "CSS Layout"
            },

            {
                q: "What is event bubbling?",
                a: "Event bubbling is when an event propagates from a child element toward its parent elements.",
                keyword: ["event", "bubbling", "parent"],
                topic: "JavaScript Events"
            }

        ],


        hard: [

            {
                q: "Explain event delegation in JavaScript.",
                a: "Event delegation uses event bubbling by attaching an event listener to a parent instead of individual child elements.",
                keyword: ["event", "delegation", "bubbling", "parent"],
                topic: "JavaScript Events"
            },

            {
                q: "What is the virtual DOM?",
                a: "The virtual DOM is an in-memory representation of the real DOM used by frameworks such as React to optimize updates.",
                keyword: ["virtual", "dom", "react"],
                topic: "React"
            },

            {
                q: "What is code splitting?",
                a: "Code splitting divides JavaScript bundles into smaller chunks that can be loaded when needed.",
                keyword: ["code", "splitting", "bundle"],
                topic: "Performance"
            },

            {
                q: "What is a closure?",
                a: "A closure is a function that remembers variables from its outer lexical scope.",
                keyword: ["closure", "function", "scope"],
                topic: "JavaScript"
            },

            {
                q: "What is lazy loading?",
                a: "Lazy loading delays loading resources until they are actually needed.",
                keyword: ["lazy", "loading", "resources"],
                topic: "Performance"
            }

        ]

    },


    backend: {

        easy: [

            {
                q: "What is a server?",
                a: "A server is a computer or software that provides resources or services to clients.",
                keyword: ["server", "client"],
                topic: "Backend Basics"
            },

            {
                q: "What is an API?",
                a: "An API allows different applications to communicate with each other.",
                keyword: ["api", "communication"],
                topic: "API"
            },

            {
                q: "What is a database?",
                a: "A database is an organized collection of data.",
                keyword: ["database", "data"],
                topic: "Database"
            },

            {
                q: "What is HTTP?",
                a: "HTTP is a protocol used for communication between clients and web servers.",
                keyword: ["http", "protocol", "server"],
                topic: "HTTP"
            },

            {
                q: "What does CRUD mean?",
                a: "CRUD means Create, Read, Update and Delete.",
                keyword: ["crud", "create", "read", "update", "delete"],
                topic: "CRUD"
            }

        ],


        medium: [

            {
                q: "What is REST API?",
                a: "REST is an architectural style for building web APIs using HTTP methods.",
                keyword: ["rest", "api", "http"],
                topic: "REST API"
            },

            {
                q: "What is authentication?",
                a: "Authentication verifies the identity of a user.",
                keyword: ["authentication", "identity", "user"],
                topic: "Authentication"
            },

            {
                q: "What is authorization?",
                a: "Authorization determines what an authenticated user is allowed to access.",
                keyword: ["authorization", "access"],
                topic: "Security"
            },

            {
                q: "What is middleware?",
                a: "Middleware is software that runs between a request and the final response.",
                keyword: ["middleware", "request", "response"],
                topic: "Backend"
            },

            {
                q: "Why are databases indexed?",
                a: "Indexes improve the speed of database queries.",
                keyword: ["database", "index", "query"],
                topic: "Database"
            }

        ],


        hard: [

            {
                q: "What is JWT authentication?",
                a: "JWT is a token-based authentication mechanism where a signed token is used to verify a user's identity.",
                keyword: ["jwt", "token", "authentication"],
                topic: "Authentication"
            },

            {
                q: "What is database normalization?",
                a: "Normalization organizes database tables to reduce redundancy and improve data integrity.",
                keyword: ["normalization", "database", "redundancy"],
                topic: "Database"
            },

            {
                q: "What is caching?",
                a: "Caching stores frequently accessed data temporarily so future requests can be served faster.",
                keyword: ["cache", "data", "faster"],
                topic: "Performance"
            },

            {
                q: "What is rate limiting?",
                a: "Rate limiting restricts the number of requests a client can make within a specific period.",
                keyword: ["rate", "limiting", "requests"],
                topic: "API Security"
            },

            {
                q: "What is load balancing?",
                a: "Load balancing distributes network traffic across multiple servers.",
                keyword: ["load", "balancing", "servers"],
                topic: "Scalability"
            }

        ]

    }

};

questionBank.javascript =
    questionBank.frontend;

questionBank.python =
    questionBank.backend;

let questions = [];

let currentQuestion = 0;

let totalScore = 0;

let answered = false;

let topicScores = {};
function startTest() {

    const role =
        document.getElementById("role").value;

    const difficulty =
        document.getElementById("difficulty").value;


    questions =
        [...questionBank[role][difficulty]];


    currentQuestion = 0;

    totalScore = 0;

    topicScores = {};


    document
        .getElementById("startScreen")
        .classList.add("hidden");


    document
        .getElementById("resultScreen")
        .classList.add("hidden");


    document
        .getElementById("quizScreen")
        .classList.remove("hidden");


    loadQuestion();

}

function loadQuestion() {

    answered = false;


    const q =
        questions[currentQuestion];


    document
        .getElementById("question")
        .textContent = q.q;


    document
        .getElementById("questionNumber")
        .textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;


    document
        .getElementById("score")
        .textContent =
        `Score: ${totalScore}`;


    document
        .getElementById("answer")
        .value = "";


    document
        .getElementById("result")
        .innerHTML = "";


    document
        .getElementById("nextButton")
        .classList.add("hidden");


    const percentage =
        ((currentQuestion + 1) /
            questions.length) * 100;


    document
        .getElementById("progressBar")
        .style.width =
        percentage + "%";


    const percentElement =
        document.getElementById(
            "progressPercent"
        );


    if (percentElement) {

        percentElement.textContent =
            Math.round(percentage) + "%";

    }
    const number =
        String(currentQuestion + 1)
            .padStart(2, "0");


    const largeNumber =
        document.querySelector(
            ".question-number-large"
        );


    if (largeNumber) {

        largeNumber.textContent =
            number;

    }

}
function checkAnswer() {

    if (answered) return;


    const answer =
        document
            .getElementById("answer")
            .value
            .toLowerCase()
            .trim();


    if (!answer) {

        document
            .getElementById("result")
            .innerHTML =
            "⚠️ Please write an answer first.";

        return;
    }


    const q =
        questions[currentQuestion];


    let matched = 0;


    q.keyword.forEach(
        keyword => {

            if (
                answer.includes(
                    keyword
                )
            ) {

                matched++;

            }

        }
    );


    const percentage =
        matched /
        q.keyword.length;


    const correct =
        percentage >= 0.5;


    if (correct) {

        totalScore++;


        document
            .getElementById("result")
            .innerHTML =

            `✅ <strong>Good answer!</strong>
            <br>
            Expected idea:
            ${q.a}`;

    }

    else {

        document
            .getElementById("result")
            .innerHTML =

            `❌ <strong>Needs improvement.</strong>
            <br>
            Expected answer:
            ${q.a}`;


        topicScores[q.topic] =
            (topicScores[q.topic] || 0) + 1;

    }


    answered = true;


    document
        .getElementById("score")
        .textContent =
        `Score: ${totalScore}`;


    document
        .getElementById("nextButton")
        .classList.remove("hidden");

}
function showAnswer() {

    const q =
        questions[currentQuestion];


    document
        .getElementById("result")
        .innerHTML =

        `<strong>💡 Model Answer</strong>
        <br><br>
        ${q.a}`;

}
function nextQuestion() {

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    }

    else {

        showFinalResult();

    }

}
function showFinalResult() {

    document
        .getElementById("quizScreen")
        .classList.add("hidden");


    document
        .getElementById("resultScreen")
        .classList.remove("hidden");


    document
        .getElementById("finalScore")
        .textContent =
        totalScore;


    let performance;


    if (totalScore === 5) {

        performance =
            "🔥 Excellent! You are interview ready.";

    }

    else if (totalScore >= 3) {

        performance =
            "👍 Good performance. Keep practicing.";

    }

    else {

        performance =
            "📚 You need more practice before the interview.";

    }


    document
        .getElementById("performance")
        .textContent =
        performance;


    const weakAreas =
        Object.keys(topicScores);


    let weakArea;


    if (weakAreas.length > 0) {

        weakArea =
            weakAreas.sort(
                (a, b) =>
                    topicScores[b] -
                    topicScores[a]
            )[0];

    }

    else {

        weakArea =
            "No major weak area detected 🎉";

    }


    document
        .getElementById("weakArea")
        .textContent =
        weakArea;


    let recommendation;


    if (
        weakArea ===
        "No major weak area detected 🎉"
    ) {

        recommendation =
            "Your fundamentals look strong. Try a harder interview difficulty.";

    }

    else {

        recommendation =
            `Focus on ${weakArea}. Practice 3–5 questions about this topic before your next interview.`;

    }


    document
        .getElementById("recommendation")
        .textContent =
        recommendation;

}
function restartTest() {

    document
        .getElementById("resultScreen")
        .classList.add("hidden");


    document
        .getElementById("quizScreen")
        .classList.add("hidden");


    document
        .getElementById("startScreen")
        .classList.remove("hidden");

}
function goHome() {

    currentQuestion = 0;

    totalScore = 0;

    answered = false;

    questions = [];

    topicScores = {};


    document
        .getElementById("quizScreen")
        .classList.add("hidden");


    document
        .getElementById("resultScreen")
        .classList.add("hidden");


    document
        .getElementById("startScreen")
        .classList.remove("hidden");


    document
        .getElementById("answer")
        .value = "";


    document
        .getElementById("result")
        .innerHTML = "";


    document
        .getElementById("nextButton")
        .classList.add("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}