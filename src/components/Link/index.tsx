import React from 'react'

export interface Link {
  id: string
  description: string,
  url: string
}

interface LinkProps {
  link: Link
}

const Link = (props: LinkProps) => {
  return (
    <div>
      <div>
        {props.link.description} ({props.link.url})
      </div>
    </div>
  )
}

export default Link
