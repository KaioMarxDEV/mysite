export function Cultural() {
  return (
    <div className="my-52 flex flex-col items-center">
      <div className="mt-20 mb-8">
        <strong className="text-3xl text-center leading-6 block">
          What about the company{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500'>
            cultural
          </span>{' '}
          fit?
        </strong>
      </div>
      <div className="flex w-full flex-col items-start">
        <p className="w-1/2 px-4 py-2 items-start text-base text-gray-700 border rounded-lg border-my-blue border-dashed">
          The company willingly takes risks in hiring different people, which wins them the leadership 
          position in the industry.
        </p>
      </div>
      <div className="my-6 flex w-full flex-col items-center">
        <p className="w-1/2 px-4 py-2 items-start text-base text-gray-700 border rounded-lg border-my-blue border-dashed">
          Conflicts are not avoided but approached with trained skills and resolved well.
        </p>
      </div>
      <div className="flex w-full flex-col items-end">
        <p className="w-1/2 px-4 py-2 items-start text-base text-gray-700 border rounded-lg border-my-blue border-dashed">
          There is a high level of trust, and ideas flow freely.
        </p>
      </div>
    </div>
  )
}