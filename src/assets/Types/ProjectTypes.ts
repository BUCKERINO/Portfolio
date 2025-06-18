export enum CardType{
    Team = 'team',
    Engine = 'engine',
    Platform = 'platform'
}

export interface InfoCard {
    text: string;
    cardType: CardType;
}

export interface Project {
    infoCards: InfoCard[] | null;
    title: string;
    description: string;
    backgroundImage: string;
    modalComponent: any;
}