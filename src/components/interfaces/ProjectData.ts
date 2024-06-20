import {FC, SVGProps} from "react";

export interface ProjectData {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveDemoLink?: string;
}