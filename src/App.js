import logo from './logo.svg';
import './App.css';
import CricbuzzComponent from './components/CricbuzzComponent';

function App() {
  return (
    <>
       <h1>Welcome to Cricbuzz news ...</h1> 
        <CricbuzzComponent 
         imgSrc = "https://static.cricbuzz.com/a/img/v1/420x235/i1/c461520/bowlers-help-kkr-defend-169-at.jpg"
         headingText = "Bowlers help KKR defend 169 at Wankhede"
         para = "This was KKR's first win at the venue since 2012"
         anchorLink = "https://www.cricbuzz.com/cricket-news/130328/mumbai-indians-chances-hanging-by-a-thread"
         anchorText = "Scenarios / Mumbai Indians' chances hanging by a thread" />
       
        <CricbuzzComponent 
            imgSrc = "https://static.cricbuzz.com/a/img/v1/420x235/i1/c460361/rcb-out-to-make-most-of-late-s.jpg"
            headingText = "RCB out to make most of late-season upswing"
            para = "Defeat in Bengaluru will see Gujarat Titans drop below RCB in the points table"
            anchorLink = "https://www.cricbuzz.com/cricket-news/130280/matter-of-time-before-you-acknowledge-that-leadership-might-bring-the-best-in-shubman-gill"
            anchorText= "Interview / 'Matter of time before you acknowledge that leadership might bring the best in Shubman Gill" />

        <CricbuzzComponent
            imgSrc = "https://static.cricbuzz.com/a/img/v1/420x235/i1/c460756/shamar-joseph-included-in-west.jpg"
            headingText=" Shamar Joseph included in West Indies squad for T20 World Cup"
            para ="West Indies have also brought back Shimron Hetmyer; Alzarri Joseph named Rovman Powell's deputy "
            anchorLink = "https://www.cricbuzz.com/cricket-news/130330/usa-pick-corey-anderson-for-mens-t20-world-cup-2024"
            anchorText = "USA pick Corey Anderson for Men's T20 World Cup 2024 " />
        
        <CricbuzzComponent
            imgSrc = "https://static.cricbuzz.com/a/img/v1/420x235/i1/c460194/death-bowling-helps-srh-prevai.jpg"
            headingText = "Death bowling helps SRH prevail in last-over thriller"
            para = "The win helps Pat Cummins' side climb back up into the top-four of the standings"
            anchorLink= "https://www.cricbuzz.com/cricket-news/130320/i-was-detached-from-the-result-bhuvneshwar-after-last-over-heroics"
            anchorText = "I was detached from the result' - Bhuvneshwar after last-over heroics" />

        <CricbuzzComponent
            imgSrc = "https://static.cricbuzz.com/a/img/v1/420x235/i1/c458859/i-wanted-four-spinners-for-sur.jpg"
            headingText = "I wanted four spinners for sure: Rohit Sharma"
            para = "Chief selector Ajit Agarkar rubbished concerns about Virat Kohli's strike rate, and admitted leaving out Rinku Singh was a tough call"
            anchorLink = "https://www.cricbuzz.com/cricket-news/130290/indian-team-to-leave-for-us-on-may-21"
            anchorText = "Indian team to leave for US on May 21" />
    </>
  );
}

export default App;
