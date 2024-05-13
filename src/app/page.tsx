import ProjectCard, { ProjectRepoIcon } from '@/components/ProjectCard';
import { Footer } from '@/components/Footer';
import { IconCsharp, IconGPT, IconJavascript, IconLangchain, IconLua, IconNestjs, IconNextjs, IconOnnx, IconPinecone, IconPrisma, IconPython, IconReact, IconRust, IconTailwind, IconTauri, IconTensorflow, IconTypescript } from '@/components/Icons';
import { Skill, SkillProficiency } from '@/components/Skill';

export default function Home() {
  return (
    <>
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

// MARK: About Section
const AboutSection = () => {
  return (
    <section id='about'>
      <h2>About</h2>
      <p>
        I&apos;m a software engineer and a freelance developer. I enjoy working
        on projects that challenge me to learn new things and solve interesting
        problems.
      </p>
    </section>
  );
};

// MARK: Skills Section
const SkillsSection = () => {
  return (
    <section id='skills' className=" p-8 mt-16">

      <div className="text-center">
        <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">Skills</h2>
        <p className="mt-6 text-gray-700 dark:text-gray-300">In case you where wondering what my skill are, here you go!</p>
      </div>

      <div className="mx-6 mt-12 text-gray-500 py-4 grid grid-cols-2 gap-x-6 relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
        <Skill name="TypeScript" proficiency={SkillProficiency.Advanced} icon={IconTypescript} />
        <Skill name="JavaScript" proficiency={SkillProficiency.Advanced} icon={IconJavascript} />
        <Skill name="React" proficiency={SkillProficiency.Intermediate} icon={IconReact} />
        <Skill name="Python" proficiency={SkillProficiency.Intermediate} icon={IconPython} />
        <Skill name="C#" proficiency={SkillProficiency.Intermediate} icon={IconCsharp} />
        <Skill name="Lua" proficiency={SkillProficiency.Intermediate} icon={IconLua} />
        <Skill name="Rust" proficiency={SkillProficiency.Beginner} icon={IconRust} />
      </div>


    </section>
  );
};

// MARK: Projects Section
const ProjectsSection = () => {
  // 🤔 add an 'read more' button, when clicked on display a model with more information and images ??
  return (
    <section id='projects' className='mt-16'>
      <div className="mx-auto px-6 max-w-6xl text-gray-500">

        <div className="text-center">
          <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">Projects</h2>
          <p className="mt-6 text-gray-700 dark:text-gray-300">Want to check out some of the projects I&apos;ve worked then you&apos;re at the right place!</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <ProjectCard name="multi tenant llm powered faq chatbot platform" link="https://www.fontysictinnovationlab.nl/innovations-insight/ict-software-engineering/multi-tenant-llm-powered-faq-chatbot-platform/" description="Fullstack app that allows the creation of multiple chatbots within minutes, using composable pipelines that gather data from multiple different knowledge sources. A CY2 Collaboration." repoIcon={null} icons={[IconReact, IconNestjs, IconPinecone, IconLangchain, IconPrisma, IconJavascript, IconGPT]} />
          <ProjectCard name="Kanji2Search" link="https://bitbucket.org/RyanBours/kanji2search-ml/src/development/" description="AI powered desktop app, that can recognize Kanji character from hand drawn images." repoIcon={ProjectRepoIcon.Bitbucket} icons={[IconReact, IconRust, IconTauri, IconTensorflow, IconOnnx, IconTypescript, IconPython, IconTailwind]} />
          <ProjectCard name="Test" link="#" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada suscipit eros tempor sodales." repoIcon={ProjectRepoIcon.Github} icons={[IconReact]} />
          <ProjectCard name="Test" link="#" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada suscipit eros tempor sodales." repoIcon={null} icons={[IconReact]} />
          <ProjectCard name="Portfolio" link="https://github.com/RyanBours/portfolio" description="Lastly, my portfolio itself!" repoIcon={ProjectRepoIcon.Github} icons={[IconReact, IconNextjs, IconTailwind]} />
        </div>
      </div>
    </section>
  );
};

// MARK: Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className='mt-16 p-8'>
      <div className="text-left">
        <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">Contact me</h2>
      </div>
      <a href="mailto:ryan.bours@gmail.com" className='mt-2 pl-4 flex text-gray-950  dark:text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        <span className='ml-2'>ryan.bours@gmail.com</span>
      </a>
    </section>
  );
};

