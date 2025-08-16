import React from 'react'

const Video_title = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-24 bg-gradient-to-r from-black/80 to-transparent text-white">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <p className="p-2 max-w-md">{overview}</p>
      <div className="flex gap-6 pt-6">
        <button className="text-lg px-7 py-2 hover:opacity-50 rounded-xl cursor-pointer text-black bg-white">
          ▶ Play
        </button>
        <button className="text-lg text-white px-7 py-2 bg-gray-400 cursor-pointer rounded-xl">
          ⓘ More Info
        </button>
      </div>
    </div>
  )
}

export default Video_title
