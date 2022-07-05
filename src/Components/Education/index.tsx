export function Education() {
  return (
    <div className="mt-20 flex flex-col">
      <h2 className="mb-[50px] text-center text-4xl font-bold ">Education</h2>
      <div className="flex w-full flex-col rounded-lg bg-white p-[51px_29px_38px_38px] drop-shadow-md">
        <div>
          <div className="flex flex-row  pb-8">
            <div className="flex w-80 flex-col border-r border-dashed border-gray-300">
              <strong className="mb-6 text-lg text-[#2B2B2B]">
                Google Career Certificate
              </strong>
              <div>
                <span>Student</span>{" "}
                <span className="ml-6 bg-[#FFB400] p-1 text-white">
                  Completed
                </span>
              </div>
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <strong className="mb-6 text-lg text-[#2B2B2B]">UX design</strong>
              <p>
                UX designers make technology easier and more enjoyable for
                people to use. They design products and tools so that they are
                more useful and accessible for users.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-row  pb-8">
            <div className="flex w-80 flex-col border-r border-dashed border-gray-300">
              <strong className="mb-6 text-lg text-[#2B2B2B]">
                Rocketseat
              </strong>
              <div>
                <span>Student</span>{" "}
                <span className="ml-6 bg-[#FFB400] p-1 text-white">
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
          <div className="mt-8 flex flex-row  pb-8">
            <div className="flex w-80 flex-col border-r border-dashed border-gray-300">
              <strong className="mb-6 text-lg text-[#2B2B2B]">
                Universidade Potiguar - UNP
              </strong>
              <div>
                <span>Student</span>{" "}
                <span className="ml-6 bg-[#FFB400] p-1 text-white">
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
