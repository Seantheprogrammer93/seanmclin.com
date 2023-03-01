import React from 'react'
import TimelineItem from './TimelineItem'
import timeline from '../data/timeline'
import Title from './Title'

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-20 ">
      <div className="grid grid-cols-1">
        <Title id="timeline">Timeline</Title>
        {timeline.map(item => (
          <TimelineItem
            year={item.title}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline