
import photo from './nith.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="intro">
        <h1> Nithish Dudde </h1>
        <h2>B.Tech   CSE   AI/ML (2023-2027)</h2>
       </div>
       <div className="user-image" style={{display:"flex",margin:"auto",justifyContent:"center", float:"right" }}>
          <img src={photo} width="150" height="150"></img>
       </div>
       <div className="profile">
         I am enthusiastic to contribute to evolving AI/ML and learn new Insights in domains and contribute to evolving projects in react and spring boot.
       </div>
       <div className="education">
           <h1>B.Tech In Balaji Institute of technology and Science</h1>
           <h3 id="course">CSM</h3>
           <h3 id="cgpa">CGPA : 8.1</h3>
       </div>

    </div>
  );
}

export default App;
