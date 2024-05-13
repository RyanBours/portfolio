export enum SkillProficiency {
    Beginner = 'Beginner',
    Intermediate = 'Intermediate',
    Advanced = 'Advanced',
}

type SkillProp = {
    icon: () => JSX.Element;
    name: string;
    proficiency: SkillProficiency;
};

export const Skill = ({ icon, name, proficiency }: SkillProp) => {
    const ProficienyTag = () => {
        switch (proficiency) {
            case SkillProficiency.Beginner:
                return (
                    <span className="px-2 py-1 rounded-lg bg-yellow-50 text-yellow-700 text-xs">
                        {proficiency}
                    </span>
                );
            case SkillProficiency.Intermediate:
                return (
                    <span className="px-2 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs">
                        {proficiency}
                    </span>
                );
            case SkillProficiency.Advanced:
                return (
                    <span className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs">
                        {proficiency}
                    </span>
                );
        }
    };

    const ProficiencyProgress = () => {
        switch (proficiency) {
            case SkillProficiency.Beginner:
                return 'w-[33%]';
            case SkillProficiency.Intermediate:
                return 'w-[66%]';
            case SkillProficiency.Advanced:
                return 'w-[100%]';
        }
    };

    return (
        <div className="flex items-center py-3 border-t border-gray-100">
            <span
                className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
            >
                {icon()}
            </span>
            <div className="space-y-3 flex-1">
                <div className="flex items-center">
                    <h4
                        className="text-gray-950 dark:text-white font-medium text-sm mr-auto flex items-center"
                    >
                        {name}
                    </h4>
                    <ProficienyTag />
                </div>
                <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                    <span
                        className={ProficiencyProgress() + ' h-full bg-blue-500 block rounded-full'}
                    ></span>
                </div>
            </div>
        </div>
    );
};