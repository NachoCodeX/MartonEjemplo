import React,{Component} from 'react';


class Counter extends Component{
  constructor(props){
    super(props);
    this.state={count:0}

    this.upCount=this.upCount.bind(this);
    this.downCount=this.downCount.bind(this);
    this.resetCount=this.resetCount.bind(this);
  }

  upCount(e){
    e.preventDefault();
    this.setState({
      count:this.state.count+1
    })
  }
  downCount(e){
    e.preventDefault();
    let preveState=this.state.count
    this.setState({
      count:preveState >0 ? preveState-1 : 0
    })
  }
  resetCount(e){
    e.preventDefault()
    this.setState({count:0})
  }

  render(){
    return(
      <div className="container counter">
        <div className="counter-box">
          <h1 className="count">{this.state.count}</h1>
          <div className="count__buttons">
            <a onClick={this.upCount} href="#">Up</a>
            <a onClick={this.resetCount} href="#">Reset</a>
            <a onClick={this.downCount} href="#">Down</a>
          </div>
        </div>
      </div>
    )
  }

}

export default Counter;
