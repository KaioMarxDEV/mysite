export function Values() {
  return (
    <div className="my-52 flex flex-col items-center">
      <div className="max-w-[40rem] flex flex-col items-center">
        <strong className="text-4xl text-center leading-6 block">
          My strongest{' '} 
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500'>
            values
          </span>{' '}
          are:
        </strong>
        <ul className="flex flex-row my-8 gap-5">
          <li className="px-4 py-2 bg-transparent border border-my-blue rounded-full text-center font-semibold text-lg text-my-blue transition-all hover:bg-my-blue hover:text-gray-100 hover:cursor-pointer hover:">
            Achievement
          </li>
          <li className="px-4 py-2 bg-transparent border border-my-blue rounded-full text-center font-semibold text-lg text-my-blue transition-all hover:bg-my-blue hover:text-gray-100 hover:cursor-pointer hover:">
            Support
          </li>
          <li className="px-4 py-2 bg-transparent border border-my-blue rounded-full text-center font-semibold text-lg text-my-blue transition-all hover:bg-my-blue hover:text-gray-100 hover:cursor-pointer hover:">
            Relationships
          </li>
        </ul>
        <p className="text-base text-gray-700">
        The combination of these values characterizes me as who appreciate personal accomplishment, 
        the possibility to work with others and confidence. For the fulfillment of those values, 
        I ready to sacrifice certain attributes of prestige and personal comfort and be prepared to follow 
        detailed rules and instructions.
        </p>
      </div>
    </div>
  )
}