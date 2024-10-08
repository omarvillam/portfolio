import React, {PropsWithChildren} from 'react'

function Container({children}: PropsWithChildren) {
  return (
    <div className="container mx-auto border-x border-secondary max-w-[1216px] bg-primary">
      {children}
    </div>
  )
}

export default Container