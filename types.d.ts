interface EducationBackground {
    title: string;
    date: string;
    extra: string;
    link: string;
    image: string;
}

interface WorkHistory {
    companyName: string;
    date: string
}

interface Qualification {
    title: string;
    date: string;
    extra: string;
    link: string;
    image: string;
}

interface SpecializedField {
    name: string;
    languages: string;

}

type Resume = {
    "info": {
        "furigana": string,
        "name": string,
        "birth-date": string,
        "country": string,
        "phone": string,
        "email": string,
        "address": string,
        "image": string
    },
    "edu-background": EducationBackground[],
    "work-history": WorkHistory[],
    "qualification": Qualification[],
    "specialized-field": {
        "name": string,
        "languages": string
    },
    "ability": string,
    "career-objective": string,
    "salary": string
}
