class Counter extends React.Component 
  constructor(props) {} {
    super(props);
    this.state = {
      count: 0
    };
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    
  };
  
  increment() ;{ this.setState ({
    count: this.setState + 1})
  }
  decrement() ;{ this.setState ({
    count: this.setState - 1})
  }

  if(this.state.angka){
    let sum = parseInt(this.state.counter) + parseInt(this.state.angka);
    if(sum > 1){
        this.setState({ counter: sum, angka: true });
    }else (sum == 0);{
      console.log("pengurangan tidak bisa kurang dari 0");
      this.setState({error:"pengurangan tidak bisa kurang dari 0"})
    }
}

  
  render() ;{
    return (
      <div>
        <button className='inc' onClick={this.increment}>+</button>
        <button className='dec' onClick={this.decrement}>-</button>
        
        <h1>{this.state.count}</h1>
      </div>
    );
  }
