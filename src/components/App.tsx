
import Card from './Card'
import '../assets/styles/index.css'
import { useGetPostsQuery } from '../api/baseApi'

function App() {
  const {data, isLoading, isError} = useGetPostsQuery()

  return (
    <div className="candy-app">
      <div className="candy-container">
        <h1 className="candy-heading">CANDY BLOG!</h1>
        <p className="candy-subtitle">
          Sweet stories, colorful ideas & delicious posts!
        </p>

        <div className="candy-grid">
          {isLoading ? (
            Array.from({length: 3}).map((_, index) => (
              <div className="candy-skeleton" key={index}>
                <div className="skeleton-image"></div>
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text short"></div>
              </div>
            ))
          ) : isError ? (
            <div className="candy-status">
              <h2>Oops! Something went wrong</h2>
              <p>Не вдалося завантажити пости</p>
            </div>
          ) : !data?.length ? (
            <div className="candy-status">
              <h2>No posts yet!</h2>
              <p>Тут поки що немає постів</p>
            </div>
          ) : (
            data.map((post) => {
              return (
                <Card
                  key={post.id}
                  title={post.title}
                  content={post.content}
                  category={post.category}
                  author={post.author}
                />
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default App
