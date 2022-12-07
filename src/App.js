
import { useEffect, useState } from "react";

export function App() {

const [repositories, setRepositories] = useState([])
useEffect(( )=>{
  fetch('https://api.github.com/users/YOMARCOS/repos')
  .then(response=> response.json())
  .then(data => setRepositories(data))
 }, [ ])

  return (
    <div className="App">
      <h2>Meus Projetos</h2>
      <ul>
        {repositories.map(repository => {
          return (
            <li class="li"><a href={repository.html_url}>
              <h3>
                {repository.name}
              </h3> </a>
              <p>{repository.description}</p>
             <img src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"></img>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
