import React,{Component} from 'react';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state={date: new Date().toLocaleTimeString()};
  }
  tick(){this.setState({date:new Date().toLocaleTimeString()})}

  componentDidMount(){
    this.timerID=setInterval(()=>{
      this.tick(),1000
    });
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render(){
    return(
      <div className="container">
        <h1 className="clock">{this.state.date}</h1>
      </div>
    )
  }
}

export default Clock;
