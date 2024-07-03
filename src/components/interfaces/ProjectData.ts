import { StaticImageData } from "next/image";

export interface ProjectData {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveDemoLink?: string;
    downloadLink?: string;
    image: StaticImageData;
}