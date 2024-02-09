const navbar = (
  <nav>
    <img src="./react-logo.png" alt="no image" width={80} />
</nav>
)
// const page = (
//   <div>
//       <h1>My awesome website in React</h1>
//       <h3>Reasons I love React</h3>
//       <ol>
//           <li>It's composable</li>
//           <li>It's declarative</li>
//           <li>It's a hireable skill</li>
//           <li>It's actively maintained by skilled people</li>
//       </ol>
//   </div>
// )


const staticSite = (
  <>
    <h1>Fun Facts About React</h1>
    <ul>
      <li>Was first released in 2013.</li>
      <li>Was originally created by Jordan Walke.</li>
      <li>Has well over 100k stars on github.</li>
      <li>Is maintained by facebook.</li>
      <li>Powers thousand of enterprise apps including mobile apps.</li>
    </ul>
  </>
)

function App() {

  return (
    <>
      {navbar}
      {staticSite}
    </>
  )
}

export default App
