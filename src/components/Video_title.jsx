import React from 'react'

const Video_title = ({ title, overview }) => {
  return (
    <div className="px-24 pt-[20%] text-white absolute aspect-video bg-gradient-to-r from-black">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <p className="p-2 w-1/3">{overview}</p>
      <div className="flex gap-6 pt-6">
        <button className="text-lg px-7 py-2 w-[160px] hover:opacity-50 rounded-xl cursor-pointer text-black bg-white">
        ▶ Play
        </button>
        <button className="text-lg w-[160px] text-white px-7 py-2 bg-gray-400 cursor-pointer rounded-xl">
          ⓘ More Info
        </button>
      </div>
    </div>
  )
}

export default Video_title