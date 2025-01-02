import React from 'react'

const HomePage = () => {
  return (
    <div>
        <h1>Welcome to the Homepage!</h1>
        <p>This is the default page when navigating to the root URL.</p>
        <p>Feel free to explore the other pages in the navigation bar.</p>
      <div>
        <h2>Additional Information</h2>
        <ul>
          <li>Page 1: <a href="/page1">Page 1</a></li>
          <li>Page 2: <a href="/page2">Page 2</a></li>
        </ul>

        <p>This is a simple React application using React Router. It has a default homepage, two other pages, and a navigation bar.</p>
        <p>Feel free to customize this template to fit your needs.</p>
      </div>
    </div>
  )
}

export default HomePage