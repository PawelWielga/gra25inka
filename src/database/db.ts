import { Question } from "../models/Question"

export const Questions: Question[] =
[
    new Question(1, 
        "Paweł Wielga",
        "Z jakiego kraju pochodzi synek Tuliś?",
        "Azerbejdżanu",
        "Chin",
        "Polski",
        "Bangladeszu"),
    new Question(2, 
        "Monika Jamny",
        "Jaki może być stan pupy?",
        "Podwyższony",
        "Rozszerzony",
        "Szeroki",
        "Obniżony"),
        
    new Question(3, 
        "Magda Kopczyńska",
        "Czym odpędzałyście razem z Magdą Kopczyńską natrętną pszczołę będąc kiedyś na Kortowie?",
        "Perfumami",
        "Reklamówką",
        "Butem",
        "Piwem"),
    //TODO: move remaining questions from legacy code
]