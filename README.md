# trivia-challenge-api
Back del proyecto
Deploy: https://trivia-challenge-api.herokuapp.com/

# Indice

<ul>
  <li><a href="#get-api-questions-refs">GET /api/questions</a></li>
  <li><a href="#get-api-questions-refs">GET /api/questions/:category</a></li>
  <li><a href="#post-api-questions-refs">POST /api/questions</a></li>
  <li><a href="#put-api-questions-refs">PUT /api/questions</a></li>
  <li><a href="#del-api-questions-refs">DELETE /api/questions/:id</a></li>
  <br>
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
