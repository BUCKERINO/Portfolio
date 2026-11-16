import { CardType, type Project } from '@/assets/Types/ProjectTypes';

import DoodlePoster from '@/assets/DoodleDream/doodle_dream_poster.webp';
import DoodleGameplay from '@/assets/DoodleDream/GameGif.mp4';
import DoodleGunUI from '@/assets/DoodleDream/GunUIAndSOs.mp4';
import DoodleBreakableDoor from '@/assets/DoodleDream/BreakableDoor.mp4';
import PlaceHolder from '@/assets/img/OopsiDoopsy.webp';

/*
 * To add a project, add an entry to this list. The generic modal shows its title,
 * descriptions, media rows, links and info table automatically.
 */
export const projects: Project[] = [
    {
        id: 'doodle-dream',
        size: 'large',
        infoCards: [{ text: 'team', cardType: CardType.Team }],
        title: 'Doodle Dream: School Invasion',
        info: {
            engine: ['Unity 5'],
            language: ['C#'],
            programmers: ['Tycho van de Wetering', 'Leon Klasser'],
            artists: ['Liam Egan', 'Nien Hoekstra', 'Lucas van de Loenhorst'],
            date: 'June 2024',
        },
        gameDescription:
            "Doodle dream school invasion is a top-down shooter where you have to kill monsters in order to escape the school. At the beginning of the game, you get to choose which weapon you want to use to get out of the building. In order to progress, you have to defeat all the monsters in the room and shoot down the doors to enter the next room. Once you've the stairs, you'll be able to go down a floor. You can find the exit of the school on the main floor but be careful because there is a terrible monster guarding it.",
        workDescription:
            'My job during this project was to support the team, make components and most of the gameplay programming. I handled mostly the more complex components such as the gun system, the enemy player detection, a camera controller and a shop system. Unfortunetaly we had to remove the shop system because of time constraints. This was one of my favourite projects because of the creative flow that we had which made it fun to come up with new ideas. I also made a trailer for this game.',
        backgroundImage: DoodlePoster,
        media: [
            [{ src: DoodleGameplay, alt: 'Doodle Dream gameplay', type: 'video' }],
            [
                { src: DoodleGunUI, alt: 'Gun UI and scriptable objects', type: 'video' },
                { src: DoodleBreakableDoor, alt: 'Breakable door mechanic', type: 'video' },
            ],
        ],
        links: [
            {
                label: 'Watch game trailer',
                url: 'https://www.youtube.com/watch?v=Sk_1crBV_P0',
                icon: 'bi-youtube',
                color: '#ff0033',
            },
        ],
    },
    ...Array.from({ length: 3 }, (_, i): Project => placeholder(`large-placeholder-${i}`, 'large')),
    ...Array.from({ length: 3 }, (_, i): Project => placeholder(`small-placeholder-${i}`, 'small')),
];

/** Temporary filler until real projects are added. */
function placeholder(id: string, size: Project['size']): Project {
    return {
        id,
        size,
        infoCards: [{ text: 'team', cardType: CardType.Team }],
        title: 'Space Adventure',
        info: {
            engine: ['Godot'],
            language: ['GDScript'],
            programmers: ['programmer 1', 'programmer 2'],
            artists: ['artist name 1', 'artist name 2'],
            date: 'June 2024',
        },
        gameDescription: 'Description of the game',
        workDescription: 'Description of the work',
        backgroundImage: PlaceHolder,
    };
}
