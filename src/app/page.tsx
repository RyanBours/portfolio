import ProjectCard, { ProjectRepoIcon } from '@/components/ProjectCard';
import { Footer } from '@/components/Footer';
import { IconReact } from '@/components/Icons';

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
    <section id='skills' className="mx-6 text-gray-500 py-4 grid grid-cols-2 gap-x-6 relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center py-3">
        <span
          className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M7 21l3 -4"></path>
            <path d="M16 21l-2 -4l-3 -3l1 -6"></path>
            <path d="M6 12l2 -3l4 -1l3 3l3 1"></path>
          </svg>
        </span>
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <h4
              className="font-medium text-sm mr-auto text-gray-700 flex items-center"
            >
              Walkability
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 9h.01"></path>
                <path d="M11 12h1v4h1"></path>
              </svg>
            </h4>
            <span className="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
              6.2 / 10
            </span>
          </div>
          <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
            <span
              className="w-[62%] h-full bg-blue-500 block rounded-full"
            ></span>
          </div>
        </div>
      </div>
      <div className="flex items-center py-3">
        <span
          className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M7 21l3 -4"></path>
            <path d="M16 21l-2 -4l-3 -3l1 -6"></path>
            <path d="M6 12l2 -3l4 -1l3 3l3 1"></path>
          </svg>
        </span>
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <h4
              className="font-medium text-sm mr-auto text-gray-700 flex items-center"
            >
              Health
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 9h.01"></path>
                <path d="M11 12h1v4h1"></path>
              </svg>
            </h4>
            <span className="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
              6.8 / 10
            </span>
          </div>
          <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
            <span
              className="w-[68%] h-full bg-blue-500 block rounded-full"
            ></span>
          </div>
        </div>
      </div>
      <div className="flex items-center py-3 border-t border-gray-100">
        <span
          className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 21h18"></path>
            <path d="M19 21v-4"></path>
            <path
              d="M19 17a2 2 0 0 0 2 -2v-2a2 2 0 1 0 -4 0v2a2 2 0 0 0 2 2z"
            ></path>
            <path d="M14 21v-14a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v14"></path>
            <path d="M9 17v4"></path>
            <path d="M8 13h2"></path>
            <path d="M8 9h2"></path>
          </svg>
        </span>
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <h4
              className="font-medium text-sm mr-auto text-gray-700 flex items-center"
            >
              Schools
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 9h.01"></path>
                <path d="M11 12h1v4h1"></path>
              </svg>
            </h4>
            <span
              className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs"
            >
              7.3 / 10
            </span>
          </div>
          <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
            <span
              className="w-[73%] h-full bg-blue-500 block rounded-full"
            ></span>
          </div>
        </div>
      </div>
      <div className="flex items-center py-3 border-t border-gray-100">
        <span
          className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"
            ></path>
            <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
          </svg>
        </span>
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <h4
              className="font-medium text-sm mr-auto text-gray-700 flex items-center"
            >
              Shopping
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 9h.01"></path>
                <path d="M11 12h1v4h1"></path>
              </svg>
            </h4>
            <span className="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
              6.4 / 10
            </span>
          </div>
          <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
            <span
              className="w-[64%] h-full bg-blue-500 block rounded-full"
            ></span>
          </div>
        </div>
      </div>
      <div className="flex items-center py-3 border-t border-gray-100">
        <span
          className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h5- w-5 text-blue-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 13l-2 -2"></path>
            <path d="M12 12l2 -2"></path>
            <path d="M12 21v-13"></path>
            <path
              d="M9.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z"
            ></path>
          </svg>
        </span>
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <h4
              className="font-medium text-sm mr-auto text-gray-700 flex items-center"
            >
              Parklands
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 9h.01"></path>
                <path d="M11 12h1v4h1"></path>
              </svg>
            </h4>
            <span
              className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs"
            >
              8 / 10
            </span>
          </div>
          <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
            <span
              className="w-[80%] h-full bg-blue-500 block rounded-full"
            ></span>
          </div>
        </div>
      </div>
      <div className="flex items-center py-3 border-t border-gray-100">
        <span
          className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path
              d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8"
            ></path>
            <path d="M16 5l1.5 7l4.5 0"></path>
            <path d="M2 10l15 0"></path>
            <path d="M7 5l0 5"></path>
            <path d="M12 5l0 5"></path>
          </svg>
        </span>
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <h4
              className="font-medium text-sm mr-auto text-gray-700 flex items-center"
            >
              Public Transport
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 9h.01"></path>
                <path d="M11 12h1v4h1"></path>
              </svg>
            </h4>
            <span
              className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs"
            >
              8.7 / 10
            </span>
          </div>
          <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
            <span
              className="w-[87%] h-full bg-blue-500 block rounded-full"
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

// MARK: Projects Section
const ProjectsSection = () => {
  return (
    <section id='projects' className='mt-16'>
      <div className="mx-auto px-6 max-w-6xl text-gray-500">
        <div className="text-center">
          <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">Projects</h2>
          <p className="mt-6 text-gray-700 dark:text-gray-300">Want to check out some of the projects I&apos;ve worked then you&apos;re at the right place!</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <ProjectCard name="multi tenant llm powered faq chatbot platform" link="#" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada suscipit eros tempor sodales." repoIcon={ProjectRepoIcon.Github} icons={[IconReact, IconReact, IconReact, IconReact, IconReact, IconReact, IconReact, IconReact, IconReact, IconReact, IconReact, IconReact]} />
          <ProjectCard name="Test" link="#" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada suscipit eros tempor sodales." repoIcon={ProjectRepoIcon.Bitbucket} icons={[IconReact]} />
          <ProjectCard name="Test" link="#" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada suscipit eros tempor sodales." repoIcon={ProjectRepoIcon.Github} icons={[IconReact]} />
          <ProjectCard name="Test" link="#" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada suscipit eros tempor sodales." repoIcon={null} icons={[IconReact]} />
          <ProjectCard name="Test" link="#" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada suscipit eros tempor sodales." repoIcon={null} icons={[IconReact]} />
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

