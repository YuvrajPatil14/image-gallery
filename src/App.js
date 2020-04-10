import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    images: [],
    activeId: null,
  };
  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ images: data });
      });
  }
  onImageClick = (e) => {
    //console.log(e);
    //console.log(this.state.activeId);

    if (this.state.activeId === e) {
      this.setState({ activeId: null });
      //console.log('here');
    } else {
      //console.log('there');

      this.setState({ activeId: e });
    }
  };

  render() {
    // console.log(this.state.images);
    let cname;
    let content;
    if(!this.state.activeId)
    {
    cname='gal'
 
    content = (
      this.state.images.map((image) => {
        //console.log(`https://i.picsum.photos/id/${image}`)
        return (
          <div className='photo' key={image.id}>
             <img
            onClick={() => this.onImageClick(image.id)}
            
            alt="images here"
            
            src={`https://picsum.photos/id/${image.id}/300/300.jpg`}
          />
          </div>
         
        );
      })
    )
    }
    else{
      cname='galfull';
      content = <div className='unique'><img className='photofull'
      onClick={() => this.onImageClick(this.state.activeId)}
      
      alt="images here"
      key={this.state.activeId}
      src={`https://picsum.photos/id/${this.state.activeId}/800/800.jpg`}
    /> 
    </div>

    }
    
    return (
      <div>
        <div className="title">
          <h1>PIXUM</h1>
        </div>
        <div className={cname}>
          {content}
        </div>
      </div>
    );
  }
}
export default App;
