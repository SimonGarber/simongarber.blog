import React from 'react'

export default ({ data }) => {
  return (
    <video loop playsInline muted autoPlay>
      <source src={data.videoFile.file.url} />
    </video>
  )
}
