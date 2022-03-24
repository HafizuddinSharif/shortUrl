import './App.css';
import axios from 'axios'

import React, { useEffect, useState } from 'react'

const App = () => {

  const [dataList, setDataList] = useState([])
  const [url, setUrl] = useState("")
  const [title, setTitle] = useState("")

  const serverUrl = 'http://localhost:8080'

  const onChangeUrl = e => {
    setUrl(e.target.value)
  }

  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    getUrls()
    console.log("Value changed")
  }, [url])

  const getUrls = () => {
    axios
      .get(`${serverUrl}/urls/short`)
      .then(res => {

        // console.log(res.data[0].url)

        const dataList = []

        res.data.map( data => {

          console.log(data._id)

          const item = {
            id: data._id,
            url: data.url,
            title: data.title,
          }

          return dataList.push(item)
        })

        setDataList(dataList)

      })
      .catch(err => {
        console.log("Unable to get all short urls")
      })
  }

  const onSubmit = e => {
    e.preventDefault()

    // console.log(url)
    
    const data = {
      url: url,
      title: title,
    }

    axios
      .post(`${serverUrl}/urls/short/add`, data)
      .then(res => {
        // console.log(input)
        setUrl('')
      })
      .catch(err => {
        console.log("Error in creating Short Data")
      })
  }

  return (
    <div className="App">

      <h1 className="text-3xl">ShortUrl</h1>

      <form method="post" action="/" onSubmit={onSubmit} className="">
        <input type="text" className="border-solid border-black border-2 mr-5" onChange={onChangeTitle} value={title} placeholder="Title to remember"></input>
        <input type="text" className="border-solid border-black border-2 mr-5" onChange={onChangeUrl} value={url} placeholder="Url to be shortened"></input>
        <button type="submit" className="border-2 cursor-pointer">Generate!</button>
      </form>

      { dataList.map( (data, index) => <a key={data.id} href={data.url}>{data.title} and the url: {data.url}</a>) }

    </div>
  )
}

export default App
