export function Education() {
  return (
    <div id="education" className="my-52 flex flex-col">
      <div className="mb-20 flex flex-col items-center">
        <h2 className="mb-4 text-center text-5xl font-bold text-gray-700 drop-shadow-xl">Education</h2>
        <span className="text-center">
          Some of the education that I took, Based on college, certificates, etc.
        </span>
      </div>
      <div className="flex w-full flex-col rounded-lg bg-white p-[51px_29px_38px_38px] drop-shadow-md">
        <div>
          <div className="flex flex-row  pb-8">
            <div className="flex w-80 flex-col border-r border-dashed border-gray-300">
              <strong className="mb-6 text-lg">
                <strong className="text-[#0668E1]">
                  META
                </strong>{' '}
                Professional Certificate
              </strong>
              <div>
                <span>Student</span>{" "}
                <span className="ml-6 bg-my-blue rounded-[30px] px-2 p-1 text-white">
                  In-progress
                </span>
              </div>
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <strong className="mb-6 text-lg text-[#2B2B2B]">Front-end Developer</strong>
              <p>
                Create a responsive website using HTML to structure content, CSS 
                to handle visual style, and JavaScript to develop interactive experiences.<br />
                Learn to use React in relation to Javascript libraries and frameworks by created the framework. 
              </p>
            </div>
          </div>
          <div className="flex flex-row  pb-8">
            <div className="flex w-80 flex-col border-r border-dashed border-gray-300">
              <strong className="mb-6 text-lg">
                <span className="text-[#4285f4]">G</span>
                <span className="text-[#ea4335]">o</span>
                <span className="text-[#fbbc05]">o</span>
                <span className="text-[#4285f4]">g</span>
                <span className="text-[#34a853]">l</span>
                <span className="text-[#ea4335]">e</span>{' '}
                Professional Certificate
              </strong>
              <div>
                <span>Student</span>{" "}
                <span className="ml-6 bg-my-blue rounded-[30px] px-2 p-1 text-white">
                  In-progress
                </span>
              </div>
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <strong className="mb-6 text-lg text-[#2B2B2B]">UX Design</strong>
              <p>
                Follow the design process: empathize with users, define pain points, 
                ideate solutions, create wireframes and prototypes, test and iterate on designs<br />
                Apply foundational UX concepts, like user-centered design, accessibility, and equity-focused design
              </p>
            </div>
          </div>
          <div className="flex flex-row  pb-8">
            <div className="flex w-80 flex-col border-r border-dashed border-gray-300">
              <strong className="mb-6 text-lg text-[#2B2B2B]">
                Rocketseat
              </strong>
              <div>
                <span>Student</span>{" "}
                <span className="ml-6 bg-my-blue rounded-[30px] px-2 p-1 text-white">
                  Completed
                </span>
              </div>
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <strong className="mb-6 text-lg text-[#2B2B2B]">
                Bootcamp Web Development
              </strong>
              <p>
                Ignite is an acceleration program focused on specialization. For
                those who already master the fundamentals of programming, Ignite
                helped to master technologies aligned with what the market
                needs.
              </p>
            </div>
          </div>
          <div className="flex flex-row  pb-8">
            <div className="flex w-80 flex-col border-r border-dashed border-gray-300">
              <strong className="mb-6 text-lg text-[#2B2B2B]">
                Universidade Potiguar - UNP
              </strong>
              <div>
                <span>Student</span>{" "}
                <span className="ml-6 bg-my-blue rounded-[30px] px-2 p-1 text-white">
                  GPA: 3.4/4.0
                </span>
              </div>
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <strong className="mb-6 text-lg text-[#2B2B2B]">
                Associate's degree in Systems Analysis and Development
              </strong>
              <p>
                Coursework: Algorithms, database, object-oriented programming,
                code complexity and organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
