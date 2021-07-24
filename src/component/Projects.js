function Projects(){
    return(
        <div className="info-block">
            <h1>Projects</h1>
            <div className="project">
                <h4><a href="https://spotify-api-tester.netlify.app/">Spotify-Api-Tester</a></h4>
                <h6>Skills used: Mongodb, Node.js, Javascript, REACT, RESTful API</h6>
                <p>A team project which uses a Node.js server to interact with a MongoDB database and the spotify api. 
                    The app allows the user to create a personal account and lets them search songs and create custom playlists to store their favourite songs.
                </p>
            </div>
            <div className="project">
                <h4><a href="https://path-of-greed.netlify.app/">Path of Greed</a></h4>
                <h6>Skills used: React, Javascript, Python, react-bootstrap-table, Python Flask</h6>
                <p>A React app that interacts with a Python flask server with fetches data from the Path of Exile Api to
                    process the data and display it using react-bootstrap-table to create a user friendly view of the data.         
                </p>
            </div>
            <div className="project">
                <h4><a href="/">Eduspark</a></h4>
                <h6>Skills used: React, Node.js, Mongodb</h6>
                <p>A React app that attempts to bridge the gap between teachers and parents with an intuitive app.
                    It uses a MongoDb database to hold all the information and authentication to give the users information relevant to them.
                </p>
            </div>
            
        </div>
    )
}

export default Projects;