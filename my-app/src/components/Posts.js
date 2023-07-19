import React from 'react'



const dataArray = [
  {
    title: 'post 1',
    body: 'This is the third body',
    userId: 1
  },
  {
    title: 'post 2',
    body: 'This is the third body',
    userId: 2
  },
  {
    title: 'post 3',
    body: 'This is the third body',
    userId: 3
  },
  {
    title: 'post 4',
    body: 'This is the third body',
    userId: 4,
  }
]


const post = (props)  => {
  return (
    <div>
        {dataArray.map(function (data, index){
          return <div key={index}>{data.body}</div>
        })}
    </div>
  )
}

export default post;