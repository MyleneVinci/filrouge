import { Cours } from "src/model/cours.model";


export const COURS: Cours[] = [
    {
        "id": 1,
        "nom": "Gestion du temps",
        "matiere": {
            "id": 1,
            "nom": "soft skills"
        },
        "formation": {
            "id": 1,
            "nom": "POEC Développeur java"
        },
        "duree": 40
    },
    {
        "id": 3,
        "nom": "Initiation à sql",
        "matiere": {
            "id": 3,
            "nom": "sql"
        },
        "formation": {
            "id": 1,
            "nom": "POEC Développeur java"
        },
        "duree": 40
    },
    {
        "id": 2,
        "nom": "Initiation à java",
        "matiere": {
            "id": 2,
            "nom": "java"
        },
        "formation": {
            "id": 1,
            "nom": "POEC Développeur java"
        },
        "duree": 300
    },
    {
        "id": 9,
        "nom": "entrainement aux jobdating",
        "matiere": {
            "id": 1,
            "nom": "soft skills"
        },
        "formation": {
            "id": 2,
            "nom": "POEI Développeur javascript"
        },
        "duree": 10
    },
    {
        "id": 4,
        "nom": "création de CV",
        "matiere": {
            "id": 1,
            "nom": "soft skills"
        },
        "formation": {
            "id": 2,
            "nom": "POEI Développeur javascript"
        },
        "duree": 40
    },
    {
        "id": 11,
        "nom": "Gestion du stress",
        "matiere": {
            "id": 1,
            "nom": "soft skills"
        },
        "formation": {
            "id": 3,
            "nom": "POEI Développeur python"
        },
        "duree": 10
    },
    {
        "id": 7,
        "nom": "Efficacité au travail",
        "matiere": {
            "id": 1,
            "nom": "soft skills"
        },
        "formation": {
            "id": 3,
            "nom": "POEI Développeur python"
        },
        "duree": 40
    },
    {
        "id": 6,
        "nom": "sql avancé",
        "matiere": {
            "id": 3,
            "nom": "sql"
        },
        "formation": {
            "id": 3,
            "nom": "POEI Développeur python"
        },
        "duree": 40
    }
]