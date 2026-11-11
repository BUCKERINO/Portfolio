import type { Component } from "vue";

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
    infoCards: InfoCard[];
    title: string;
    info: Info;
    gameDescription: string;
    workDescription: string;
    backgroundImage: string;
    modalComponent: Component;
}

export interface Info{
    engine: string[];
    language: string[];
    programmers: string[];
    artists: string[];
    date: string;
}