import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component  {
  constructor() {
    super()
    this.state={
      searchfield: '',
      robots: []
    }
  }

  onSearchChange = (event) => {this.setState({searchfield: event.target.value})}

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

  render() {
    const {robots, searchfield} = this.state
    const FilterRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()))
    return !robots.length ? <h1>LOADING</h1>: 
      (
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange = {this.onSearchChange} />
          <Scroll>
            <CardList robots={FilterRobots}/>
          </Scroll>
          
        </div>
      );
  
   
  }
}


export default App;