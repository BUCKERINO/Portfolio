import type { Component } from 'vue';

export enum CardType {
    Team = 'team',
    Engine = 'engine',
    Platform = 'platform',
}

export interface InfoCard {
    text: string;
    cardType: CardType;
}

export interface Info {
    engine: string[];
    language: string[];
    programmers: string[];
    artists: string[];
    date: string;
}

/** A single image/gif/video shown in the project modal. */
export interface MediaItem {
    src: string;
    alt: string;
    /** Defaults to 'image'. Use 'video' for .mp4/.webm (much smaller than gifs). */
    type?: 'image' | 'video';
}

/** A button linking out of the modal (trailer, itch.io, GitHub, ...). */
export interface ProjectLink {
    label: string;
    url: string;
    /** oh-vue-icons name, e.g. 'bi-youtube'. Remember to register it in main.ts. */
    icon?: string;
    /** Button background color. */
    color?: string;
}

export interface Project {
    /** Unique id, used as v-for key. */
    id: string;
    /** 'large' shows a ProjectCard, 'small' a SmallProjectCard. */
    size: 'large' | 'small';
    infoCards: InfoCard[];
    title: string;
    info: Info;
    gameDescription: string;
    workDescription: string;
    backgroundImage: string;
    /** Rows of media. Each inner array is rendered side by side. */
    media?: MediaItem[][];
    links?: ProjectLink[];
    /**
     * Optional custom modal for content the generic modal can't show.
     * It receives `project` as a prop and should wrap <BaseModal>, passing extra content via its slot.
     */
    modalComponent?: Component;
}
