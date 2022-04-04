import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import 'antd/dist/antd.css'
import './HomePage.scss'
import { Pagination } from 'antd'
import Search from '../Search/Search'

const url = "https://jsonplaceholder.typicode.com/posts"

export default function HomePage() {
  const [articles, setArticles] = useState([])
  const [searchValue, setSearchValue] = useState('')

  //pagination states
  const [count, setCount] = useState()
  const [limit, setLimit] = useState(5)
  const [page, setPage] = useState(1)

  //taking data from server
  useEffect(() => {
    axios.get(url).then(res => {
      setArticles(res.data)
    })
  },[])

  function handleSearchTextChange (searchValue) {
    setSearchValue(searchValue)
  }

  const [filteredArticles, setfilteredArticles] = useState([])

  //filter data by text in body of article
  useEffect(() => {
    setfilteredArticles(searchValue
      ? articles.filter(article => article.body.includes(searchValue))
      : articles)
    setCount(articles.length)
  }, [searchValue, JSON.stringify(articles)]
  )

  const [paginatedArticles, setPaginatedArticles] = useState([])
  //splitting articles by pages
  useEffect(() => {
    setPaginatedArticles(filteredArticles.slice((page-1) * limit, (page-1) * limit + limit))
    setCount(filteredArticles.length)
  }, [count, page, limit, JSON.stringify(filteredArticles)]
  )
  return (
    <div className='wrapper homepage'>
      <div className="container padding homepage__container">
        <Search
          searchText={searchValue}
          onSearchTextChange={handleSearchTextChange}
        />
        <div className="cardset homepage__cardset">
          { paginatedArticles.map((item) => {
            return(
            <div key={item.id} className='card homepage__card'>
              <span className='homepage__card-id'>
                <span className="homepage__card-label">ID:</span>
                <span className="homepage__card-content">{item.id}</span>
              </span>
              <span className='homepage__card-user-id'>
                <span className="homepage__card-label">User ID:</span>
                <span className="homepage__card-content">{item.userId}</span>
              </span>
              <span className='homepage__card-title'>
                <span className="homepage__card-label">Title:</span>
                <span className="homepage__card-content">{item.title}</span>
              </span>
              <span className='homepage__card-text'>
                <span className="homepage__card-label">Text: <br /> </span>
                <span className="homepage__card-content">{item.body}</span>
              </span>
            </div>
            )
          })}
        </div>
        <div className="homepage__pagination">
          <Pagination
            current={page}
            pageSize={limit}
            showSizeChanger={false}
            onChange={(page, limit) => {
              setPage(page)
              setLimit(limit)
            }}
            total={count}
          />
        </div>
      </div>
    </div>
  )
}
