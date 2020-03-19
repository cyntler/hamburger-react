import React from 'react'

export default () => (
  <div>
    <Anchor label="Installation" to="installation" />
    <Anchor label="Properties" to="properties" />
  </div>
)

const Anchor = ({ label, to }) => {
  return (
    <div
      className=""
      role="button"
    >
      {label}
    </div>
  )
}
