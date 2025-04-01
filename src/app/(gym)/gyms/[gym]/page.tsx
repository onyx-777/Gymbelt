import React from 'react'

interface Params {
  params: {
    gym: string
  }
}

const Page = async ({ params }: Params) => {
  const {gym} = await params

  return (
    <div>Page of {gym}</div>
  )
}

export default Page
