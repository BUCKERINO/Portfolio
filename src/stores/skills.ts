interface Skill {
    name: string;
    primary: boolean;
}

interface Categorie {
    title: string
    icon: string
    skills: Skill[]
}

export const softwareCategories: Categorie[] = [
    {
    title: 'GAME ENGINES',
    icon: 'fa-gamepad',
    skills: [
            { name: 'Unity', primary: true },
            { name: 'Scratch', primary: false },
        ],
    },
    {
    title: 'SOURCE CONTROL',
    icon: 'bi-git',
        skills: [{ name: 'Git', primary: true }],
    },
    {
    title: 'FRAMEWORK/LIBRARIES',
    icon: 'gi-cardboard-box-closed',
    skills: [
            { name: 'Vue js', primary: false },
            { name: 'Asp.net Core', primary: false },
            { name: 'Identity', primary: false },
        ],
    },
    {
    title: 'TOOLS',
    icon: 'bi-tools',
    skills: [
            { name: 'Audacity', primary: true },
            { name: 'After Effects', primary: true },
            { name: 'Photoshop', primary: false },
            { name: 'Premier Pro', primary: false },
            { name: 'Blender', primary: false },
        ],
    },
    {
    title: 'IDE',
    icon: 'fa-laptop-code',
    skills: [
            { name: 'Visual Studio', primary: true },
            { name: 'Visual Studio code', primary: true },
        ],
    },
]

export const programLanguages: Categorie[] = [
    {
        title: 'PROGRAMMING LANGUAGES',
        icon:'',
        skills:[
            {name: 'C#' , primary:true},
            {name: 'Typescript', primary: true},
            {name: 'HTML', primary: false},
            {name: 'CSS', primary: false},
            {name: 'SQL', primary: false},
            {name: 'PHP', primary: false},
        ]
    }
]

export const humanLanguages: Categorie[] = [
   {
        title: 'HUMAN LANGUAGES',
        icon:'',
        skills:[
            {name: 'Dutch' , primary:true},
            {name: 'English', primary: true},
        ]
    }
]

export const other: Categorie[] = [
  {
        title: 'OTHER',
        icon:'',
        skills:[
            {name: 'Dutch' , primary:true},
            {name: 'English', primary: true},
        ]
    }
]
