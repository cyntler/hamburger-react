import React, { ReactNode } from 'react'

export default ({
  children,
  last = false,
}: {
  children: [ReactNode, ReactNode, ReactNode, ReactNode]
  last?: boolean
}) => (
  <div
    className={
      'flex flex-col' +
      (last ? '' : ' mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-gray-700')
    }
  >
    <div className="flex flex-col md:flex-row md:items-center mb-2 md:mb-4 justify-between">
      {children[0]}
      <div className="flex items-center justify-start">
        <div className="font-medium text-gray-500 mr-2 sm:mr-4">Example:</div>
        {children[1]}
      </div>
    </div>
    <p className="text-sm mb-6">{children[2]}</p>
    <code className="text-sm px-4 sm:px-6 py-4 rounded-md bg-indigo-800 shadow-inner">
      {children[3]}
    </code>
  </div>
)
