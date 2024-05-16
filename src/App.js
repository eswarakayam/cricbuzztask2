import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
       <h1>Welcome to Cricbuzz news ...</h1> 

       <div
        style={{
            border: "2px solid blue",
            marginBottom: "20px",
            maxWidth:"800px",
            padding: "16px",
            display: "flex",
            flexDirection:"column",
            alignItems:"center"
        }}
        >
            <img src = "https://static.cricbuzz.com/a/img/v1/420x235/i1/c461520/bowlers-help-kkr-defend-169-at.jpg" alt="newsImage" width="100%"/>
            <h1> Bowlers help KKR defend 169 at Wankhede </h1>
            <p> This was KKR's first win at the venue since 2012 </p>
            <a href= "https://www.cricbuzz.com/cricket-news/130328/mumbai-indians-chances-hanging-by-a-thread">Scenarios / Mumbai Indians' chances hanging by a thread</a>
            {/* <Second /> */}
        </div>
    
        <div
        style={{
            border: "2px solid blue",
            marginBottom: "20px",
            maxWidth:"800px",
            padding: "16px",
            display: "flex",
            flexDirection:"column",
            alignItems:"center"
        }}
        >
            <img src = "https://static.cricbuzz.com/a/img/v1/420x235/i1/c460361/rcb-out-to-make-most-of-late-s.jpg" alt="newsImage" width="100%"/>
            <h1> RCB out to make most of late-season upswing </h1>
            <p>  Defeat in Bengaluru will see Gujarat Titans drop below RCB in the points table </p>
            <a href= "https://www.cricbuzz.com/cricket-news/130280/matter-of-time-before-you-acknowledge-that-leadership-might-bring-the-best-in-shubman-gill"> Interview / 'Matter of time before you acknowledge that leadership might bring the best in Shubman Gill </a>
           
        </div>
        <div
        style={{
            border: "2px solid blue",
            marginBottom: "20px",
            maxWidth:"800px",
            padding: "16px",
            display: "flex",
            flexDirection:"column",
            alignItems:"center"
        }}
        >
            <img src = "https://static.cricbuzz.com/a/img/v1/420x235/i1/c460756/shamar-joseph-included-in-west.jpg" alt="newsImage" width="100%"/>
            <h1> Shamar Joseph included in West Indies squad for T20 World Cup </h1>
            <p> West Indies have also brought back Shimron Hetmyer; Alzarri Joseph named Rovman Powell's deputy </p>
            <a href= "https://www.cricbuzz.com/cricket-news/130330/usa-pick-corey-anderson-for-mens-t20-world-cup-2024"> USA pick Corey Anderson for Men's T20 World Cup 2024 </a>
        </div>
        <div
        style={{
            border: "2px solid blue",
            marginBottom: "20px",
            maxWidth:"800px",
            padding: "16px",
            display: "flex",
            flexDirection:"column",
            alignItems:"center"
        }}
        >
            <img src = "https://static.cricbuzz.com/a/img/v1/420x235/i1/c460194/death-bowling-helps-srh-prevai.jpg" alt="newsImage" width="100%"/>
            <h1> Death bowling helps SRH prevail in last-over thriller </h1>
            <p> The win helps Pat Cummins' side climb back up into the top-four of the standings </p>
            <a href= "https://www.cricbuzz.com/cricket-news/130320/i-was-detached-from-the-result-bhuvneshwar-after-last-over-heroics"> 'I was detached from the result' - Bhuvneshwar after last-over heroics </a>
        </div>
        <div
        style={{
            border: "2px solid blue",
            marginBottom: "20px",
            maxWidth:"800px",
            padding: "16px",
            display: "flex",
            flexDirection:"column",
            alignItems:"center"
        }}
        >
            <img src = "https://static.cricbuzz.com/a/img/v1/420x235/i1/c458859/i-wanted-four-spinners-for-sur.jpg" alt="newsImage" width="100%"/>
            <h1> I wanted four spinners for sure: Rohit Sharma </h1>
            <p> Chief selector Ajit Agarkar rubbished concerns about Virat Kohli's strike rate, and admitted leaving out Rinku Singh was a tough call </p>
            <a href= "https://www.cricbuzz.com/cricket-news/130290/indian-team-to-leave-for-us-on-may-21"> Indian team to leave for US on May 21 </a>
        </div>
    </div>
  );
}

export default App;
