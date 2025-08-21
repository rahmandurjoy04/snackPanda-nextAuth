import React from 'react'

export default function ProductDetails({params}) {
    const id = params.id
  return (
    <div>
        <p>ID:{id}</p>
        {/* {JSON.stringify(params)} */}
    </div>
  )
}
