# trivia-challenge-api
Back del proyecto
Deploy: https://trivia-challenge-api.herokuapp.com/

# Instalación

Para ejecutar el back, solo debes hacer un npm install y despues un npm start

# Indice

<ul>
  <li><a href="#get-api-questions-refs">GET /api/questions</a></li>
  <li><a href="#get-api-questions-refs">GET /api/questions/:category</a></li>
  <li><a href="#post-api-questions-refs">POST /api/questions</a></li>
  <li><a href="#put-api-questions-refs">PUT /api/questions</a></li>
  <li><a href="#del-api-questions-refs">DELETE /api/questions/:id</a></li>
  <br>
   <li><a href="#get-api-scores-refs">GET /api/scores</a></li>
  <li><a href="#post-api-scores-refs">POST /api/scores</a></li>
  <li><a href="#put-api-scores-refs">PUT /api/scores</a></li>
  <li><a href="#del-api-scores-refs">DELETE /api/scores/:id</a></li>
</ul>

# Routes

## Ruta: "/api/questions"

<h3 id="get-api-questions-refs"><a href="#get-api-questions-refs">GET /api/questions</a></h3>

Retorna un arreglo con todas las preguntas guardadas en la base de datos
```json
[
    {
        "category": "art",
        "question": "In all kinds of animations, people use games to do them, while some use art apps to do them",
        "options": [
            {
                "answer": "true",
                "isCorrect": true,
                "answer2": "false",
                "isCorrect2": false,
                "_id": "623d559c93b6d1a67c121790"
            }
        ],
        "id": "623d559c93b6d1a67c12178f"
    },
    {
        "category": "art",
        "question": "We need paper to do all kinds of arts-and-crafts",
        "options": [
            {
                "answer": "false",
                "isCorrect": true,
                "answer2": "true",
                "isCorrect2": false,
                "_id": "623d55ae93b6d1a67c121794"
            }
        ],
        "id": "623d55ae93b6d1a67c121793"
    },
]...
```
## Ruta: "/api/questions/:category"

<h3 id="get-api-questions-refs"><a href="#get-api-questions-refs">GET /api/questions/:category</a></h3>

Al hacer un get con "category" por params a la ruta "/api/questions/:category". Retorna la cantidad de preguntas y las preguntas que pertenecen a dicha categoria

ejemplo: "/api/questions/art" ⬇
```json
{
    "totalQuestions": 3,
    "category": "art",
    "quiz": [
        {
            "category": "art",
            "question": "In all kinds of animations, people use games to do them, while some use art apps to do them",
            "options": [
                {
                    "answer": "true",
                    "isCorrect": true,
                    "answer2": "false",
                    "isCorrect2": false,
                    "_id": "623d559c93b6d1a67c121790"
                }
            ],
            "id": "623d559c93b6d1a67c12178f"
        },
        {
            "category": "art",
            "question": "We need paper to do all kinds of arts-and-crafts",
            "options": [
                {
                    "answer": "false",
                    "isCorrect": true,
                    "answer2": "true",
                    "isCorrect2": false,
                    "_id": "623d55ae93b6d1a67c121794"
                }
            ],
            "id": "623d55ae93b6d1a67c121793"
        },
        {
            "category": "art",
            "question": "Word Art means words with special arts",
            "options": [
                {
                    "answer": "true",
                    "isCorrect": true,
                    "answer2": "false",
                    "isCorrect2": false,
                    "_id": "623d55bc93b6d1a67c121798"
                }
            ],
            "id": "623d55bc93b6d1a67c121797"
        }
    ]
}
```
<h3 id="post-api-questions-refs"><a href="#post-api-questions-refs">POST /api/questions</a></h3>

Recibe por body:
```json
{
  "category": "art",
  "question": "In 1993, Prince changed his name to an unpronounceable symbol because he was unhappy with his contract with Warner Bros.",
  "options": [
    {
      "answer": "true",
      "isCorrect": true,
      "answer2": "false",
      "isCorrect2": false
    }
  ]
}
```
Retorna:
```json
{
    "category": "art",
    "question": "In 1993, Prince changed his name to an unpronounceable symbol because he was unhappy with his contract with Warner Bros.",
    "options": [
        {
            "answer": "true",
            "isCorrect": true,
            "answer2": "false",
            "isCorrect2": false,
            "_id": "623de4c760f033540af3b132"
        }
    ],
    "id": "623de4c760f033540af3b131"
}
```

<h3 id="put-api-questions-refs"><a href="#put-api-questions-refs">PUT /api/questions</a></h3>

Recibe por body:

```json
{
    "questionID": "623cf9a7f039bf49533317a9", ------> Necesario si o si
    "question": "In 1993, Prince changed his name to an unpronounceable."
    ...info
}
```
Retorna
```json
{
    "succes": "Question updated successfully",
    "updatedQuestion": {
        "category": "art",
        "question": "In 1993, Prince changed his name to an unpronounceable symbol because he was unhappy with his contract with Warner Bros",
        "options": [
            {
                "answer": "true",
                "isCorrect": true,
                "answer2": "false",
                "isCorrect2": false,
                "_id": "623de4c760f033540af3b132"
            }
        ],
        "id": "623de4c760f033540af3b131"
    }
}
```
<h3 id="del-api-questions-refs"><a href="#del-api-questions-refs">DELETE /api/questions/:id</a></h3>

Para eliminar una pregunta, se debe enviar por params el id de la pregunta. Ejemplo: '/api/questions/623de4c760f033540af3b131'

retorna
```json
{
    "msg": "Question deleted successfully"
}
```

<h3 id="get-api-scores-refs"><a href="#get-api-scores-refs">GET /api/scores</a></h3>

Retorna un arreglo con todas los guardados en la base de datos

```json
[
    {
        "username": "babaquero07",
        "score": 6,
        "quizCategory": "history",
        "responses": [
            "false",
            "true",
            "true",
            "false",
            "true",
            "false"
        ],
        "id": "623d566093b6d1a67c1217ba"
    },
    {
        "username": "babaquero07",
        "score": 5,
        "quizCategory": "vehicles",
        "responses": [
            "true",
            "true",
            "false",
            "true",
            "true",
            "true",
            "false"
        ],
        "id": "623d572293b6d1a67c1217db"
    },
    {
        "username": "camilo",
        "score": 3,
        "quizCategory": "geography",
        "responses": [
            "true",
            "false",
            "true",
            "false",
            "false",
            "true"
        ],
        "id": "623d57bd93b6d1a67c1217f8"
    },
    {
        "username": "juanCamilo",
        "score": 6,
        "quizCategory": "sports",
        "responses": [
            "false",
            "true",
            "false",
            "true",
            "false",
            "false"
        ],
        "id": "623d586093b6d1a67c12181a"
    },
    {
        "username": "cricketbox",
        "score": 4,
        "quizCategory": "music",
        "responses": [
            "true",
            "false",
            "true",
            "false",
            "true",
            "false"
        ],
        "id": "623d592693b6d1a67c121839"
    }
]
```

<h3 id="post-api-scores-refs"><a href="#post-api-scores-refs">POST /api/scores</a></h3>

Recibe por body:
```json
{
    "username": "babaquero07",
    "email": "baquero-222@hotmail.com",
    "quiz": {
            "category": "sports",
            "question": "Manchester United won the 2013-14 English Premier League.",
            "options": [
                {
                    "answer": "true",
                    "isCorrect": false
                },
                {
                    "answer": "false",
                    "isCorrect": true
                }
            ]
        },
    "responses": ["true"],
    "score": 1
}
```
retorna:
```json
{
    "username": "babaquero07",
    "score": 1,
    "quizCategory": "sports",
    "responses": [
        "true"
    ],
    "id": "623df3eeec7efce0b38ee133"
}
```

<h3 id="put-api-scores-refs"><a href="#put-api-scores-refs">PUT /api/scores</a></h3>

Recibe por body:
```json
{
    "scoreID": "623ca1f0c020adca09a30c76",   ----> Obligatorio
    "score": 6,
    ...moreInfo ---> opcional
}
```

retorna
```json
{
    "newScore": {
        "username": "babaquero07",
        "score": 6,
        "quizCategory": "history",
        "responses": [
            "false",
            "true",
            "true",
            "false",
            "true",
            "false"
        ],
        "id": "623d566093b6d1a67c1217ba"
    },
    "msg": "Score updated sucessfully!"
}
```

<h3 id="del-api-scores-refs"><a href="#del-api-scores-refs">DELETE /api/scores/:id</a></h3>

Para eliminar un puntae, se debe enviar por params el id del puntaje. Ejemplo: '/api/scores/623de4c760f033540af3b131'

retorna
```json
{
    "msg": "Score deleted successfully"
}
```
