import React from 'react'
import moment from 'moment/moment'

const VideoLength = ({time}) => {
  const videoLongthInSeconds = moment().startOf("day").seconds(time).format("H:mm:ss");

  return (
    <div className='absolute bottom-2 right-2 bg-black/[0.7] py-[2px] px-[4px] text-white text-xs rounded-md items-center font-medium font-roboto'>{videoLongthInSeconds}</div>
  )
}

export default VideoLength