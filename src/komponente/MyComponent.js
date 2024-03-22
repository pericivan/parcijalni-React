import React from "react"
import { useState, useEffect} from "react"
import style from "../style.css"

export default function MyComponent() {
    const [name, setName] = useState("");
    const [userData, setUserData] = useState();
    const [repos, setRepos] = useState();

    const handleName = () => {
        //fetch(`https://api.github.com/users/${name}`)
        fetch(`https://catfact.ninja/fact`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setUserData(data)
                        fetch(data.repos_url)
                            .then(response => response.json())
                            .then(reposData => {
                                setRepos(reposData);
                            })
                    })

    }
       

    return(
        <>
            <div className="inputForm">
                <p>GitHub username:</p>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. facebook" 
                />
                <button
                    onClick={handleName}
                >GO!</button>
            </div>
            {userData && 
                <div>
                    <img src={userData.avatar_url} />
                    <h3>User: {userData.name}</h3>
                    <h4>Location: {userData.location}</h4>
                    <p>Bio: {userData.bio}</p>
                </div>
}
                 {/*{ repos && (
                    <div>
                        <h3>Repositories: </h3>
                        <ul>
                            {repos.map((repo) => (
                                <li key={repo.id}>{repo.name}</li>
                         ))}  
                        </ul>
                    </div>
                            )}*/}
                  
        {<h3></h3>}
        </>
    )
}