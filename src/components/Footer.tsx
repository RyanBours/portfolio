import { IconBitbucket, IconGithub } from '@/components/Icons';

export function Footer({}) {
    const githubUrl = 'https://github.com/RyanBours';
    const bitbucketUrl = 'https://bitbucket.org/RyanBours/workspace/overview/';
    return (
        <footer className="fixed inset-x-0 bottom-0 p-5 flex">
            <div className="flex justify-between w-full">
                <div className="flex space-x-4">
                    <div className="flex items-center">
                        <a href={githubUrl} target="_blank" rel="noreferrer">
                            <IconGithub />
                        </a>
                        <a href={githubUrl} target="_blank" rel="noreferrer">
                            <code>@RyanBours</code>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a href={bitbucketUrl} target="_blank" rel="noreferrer">
                            <IconBitbucket />
                        </a>
                        <a href={bitbucketUrl} target="_blank" rel="noreferrer">
                            <code>@RyanBours</code>
                        </a>
                    </div>
                </div>
                <div className='flex space-x-2'>
                    <a href="#about" className="decoration disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200  dark:disabled:border-gray-800/50 dark:*:disabled:!text-white text-gray-950  dark:text-white flex items-center text-sm h-8 px-3.5">
                        me
                    </a>
                    <a href="#skills" className="disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200  dark:disabled:border-gray-800/50 dark:*:disabled:!text-white text-gray-950  dark:text-white flex items-center text-sm h-8 px-3.5">
                        skills
                    </a>
                    <a href="#projects" className="disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200  dark:disabled:border-gray-800/50 dark:*:disabled:!text-white text-gray-950  dark:text-white flex items-center text-sm h-8 px-3.5">
                        projects
                    </a>
                    <a href="#contact" className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
