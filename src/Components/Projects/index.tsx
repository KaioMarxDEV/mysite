export function Projects() {
  return (
    <div className="mt-28 w-full flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-center text-5xl font-bold text-black drop-shadow-xl">
          React.js Case Study
        </h1>
        <span className="text-center text-gray-900">
          Some of my case studies, Based on personal projects, challenges, etc.
        </span>
      </div>
      <div className="mt-14 grid grid-cols-[20rem_20rem_20rem] grid-rows-[13rem_13rem_13rem] gap-3">
        <button className="flex flex-col h-full items-center cursor-pointer">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt="dale" />
        </button>
        <button className="flex flex-col h-full items-center cursor-pointer">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt="dale" />
        </button>
        <button className="flex flex-col h-full  items-center cursor-pointer">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt="dale" />
        </button>
      </div>
    </div>
  )
}