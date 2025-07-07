interface Skill {
  name: string;
  primary: boolean;
}

interface Categorie {
  title: string;
  items: { catTitle: string | null; icon: string | null; skills: Skill[] }[];
}

export const softwareCategories: Categorie = {
  title: 'software',
  items: [
    {
      catTitle: 'game engines',
      icon: 'fa-gamepad',
      skills: [
        { name: 'Unity', primary: true },
        { name: 'Scratch', primary: false },
      ],
    },
    {
      catTitle: 'source control',
      icon: 'bi-git',
      skills: [{ name: 'Git', primary: true }],
    },
    {
      catTitle: 'framework/libraries',
      icon: 'gi-cardboard-box-closed',
      skills: [
        { name: 'Vue js', primary: false },
        { name: 'Asp.net Core', primary: false },
        { name: 'Identity', primary: false },
      ],
    },
    {
      catTitle: 'tools',
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
      catTitle: 'ide',
      icon: 'fa-laptop-code',
      skills: [
        { name: 'Visual Studio', primary: true },
        { name: 'Visual Studio code', primary: true },
      ],
    },
  ],
};

export const programLanguages: Categorie = {
  title: 'programming languages',
  items: [
    {
      catTitle: null,
      icon: null,
      skills: [
        { name: 'C#', primary: true },
        { name: 'Typescript', primary: true },
        { name: 'HTML', primary: false },
        { name: 'CSS', primary: false },
        { name: 'SQL', primary: false },
        { name: 'PHP', primary: false },
      ],
    },
  ],
};

export const humanLanguages: Categorie = {
  title: 'human languages',
  items: [
    {
      catTitle: null,
      icon: null,
      skills: [
        { name: 'Dutch', primary: true },
        { name: 'English', primary: true },
      ],
    },
  ],
};

export const otherCategories: Categorie = {
  title: 'other',
  items: [
    {
      catTitle: "HOBBY'S",
      icon: 'fa-paint-brush',
      skills: [
        { name: 'Volleybal', primary: true },
        { name: 'DND 5e', primary: false },
        { name: 'Table top games', primary: false },
        { name: 'Gaming', primary: false },
        { name: 'Outdoor activities', primary: false },
      ],
    },
  ],
};