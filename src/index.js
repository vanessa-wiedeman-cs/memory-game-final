import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import photos from './anime.json';
import PhotoDisplay from './components/photoDisplay';

class Game extends React.Component{
    
    state = {photos};
    handleClick = (id, x) => {
        //var photo = [false, false, false, false, false, false, false, false, false, false];
        document.getElementById("score").innerHTML = "Have a nice day!";
       // document.write(write[1]);        
        
        
      }
      
render(){
return(
<div className="Game">
<div ><div id="score">Score:0</div>
<br></br>
    {this.state.photos.map(photo => (
        <PhotoDisplay
            url={photo.url}
            id={photo.id}
            key={photo.id}
            handleClick={this.handleClick}
            >

        </PhotoDisplay>
    ))}

</div>
</div>
);
}
}

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Game />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



/*<img src="https://66.media.tumblr.com/d0de05292ff55716fe5e04829411663e/tumblr_pf7xynYOGR1t2c4f8o10_250.png" alt="cheeks" onClick={this.handleClick.bind(this,1)}></img>
<img src="https://66.media.tumblr.com/7b1790aa4b0e76318f62da5d4a0dd69f/tumblr_pf7xynYOGR1t2c4f8o2_250.png" alt="cheeks" onClick={this.handleClick.bind(this,2)}></img>
<img src="https://66.media.tumblr.com/c14462350e03750c59817bb6c15c75be/tumblr_pf7xynYOGR1t2c4f8o8_250.png" alt="cheeks" onClick={this.handleClick.bind(this,3)}></img>
<img src="https://i.pinimg.com/474x/4b/32/87/4b328733363460346f22a996eb4265e1.jpg" alt="cheeks"  onClick={this.handleClick.bind(this,4)}></img>
<img src="https://66.media.tumblr.com/c881cc754e14b2c7923172a3bf1b8329/tumblr_pf7xynYOGR1t2c4f8o1_250.png" alt="cheeks"  onClick={this.handleClick.bind(this,5)}></img>
<img src="https://66.media.tumblr.com/f0b757b43f583c38b60a9cc92449199a/tumblr_pf7xynYOGR1t2c4f8o4_250.png" alt="cheeks" onClick={this.handleClick.bind(this,6)}></img>
<img src="https://66.media.tumblr.com/a3dae88932da2ee062bf94835cd88976/tumblr_pkfa9pUxkR1xia4jgo2_250.png" alt="cheeks"  onClick={this.handleClick.bind(this,7)}></img>
<img src="https://66.media.tumblr.com/b0daf8fc96634b9579df43efa5aed693/tumblr_pkfa9pUxkR1xia4jgo3_250.png" alt="cheeks" onClick={this.handleClick.bind(this,8)}></img>
<img src="https://66.media.tumblr.com/c00962bc91dfcd1d36d0a1d9db8ea05b/tumblr_pawi3jsYyf1x1ko3mo8_250.jpg" alt="cheeks"  onClick={this.handleClick.bind(this,9)}></img>
<img src="https://66.media.tumblr.com/b5d62746cfb1048275480877bfc0d3af/tumblr_pi1vet7f3b1wjiw6ao1_250.jpg" alt="cheeks"  onClick={this.handleClick.bind(this,10)}></img>
*/