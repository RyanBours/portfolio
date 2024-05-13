import React from 'react';
import { IconBitbucket, IconGithub } from './Icons';

export enum ProjectRepoIcon {
    Github,
    Bitbucket,
    Private
}

interface ProjectProps {
    name: string;
    description: string;
    link: string;
    icons: any[];
    repoIcon: ProjectRepoIcon | null;
};

export default function ProjectCard({ name, description, link, icons, repoIcon }: Readonly<ProjectProps>) {
    const repoIconMap = new Map([
        [ProjectRepoIcon.Github, IconGithub],
        [ProjectRepoIcon.Bitbucket, IconBitbucket]
    ]);

    return (
        <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
            <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-gray-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
            <div className="relative">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-gray-950  dark:text-white'><a href={link}>{name}</a></h1>
                    {repoIcon != null ? (
                        <a className="min-w-8 min-h-8 size-8 project-icon group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 justify-center">
                            {repoIconMap.get(repoIcon)?.()}
                        </a>
                    ) : <>private repository</>}
                </div>

                <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                    <p className="text-gray-700 dark:text-gray-300">{description}</p>
                </div>
                <div className="flex flex-wrap gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                    {icons.map((icon, index) => (
                        <ProjectIcon key={index} icon={icon} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const ProjectIcon = ({ icon }: { icon: any }) => {
    return (
        <a className="project-icon group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
            {icon()}
        </a>
    );
};