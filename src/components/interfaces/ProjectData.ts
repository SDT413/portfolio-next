import {FC, SVGProps} from "react";

export interface ProjectData {
    title: string;
    description: string;
    technologies: string[];
    svg: FC<SVGProps<SVGSVGElement>>;
    githubLink?: string;
    liveDemoLink?: string;
}