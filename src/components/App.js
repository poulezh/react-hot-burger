import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import samlpleBurgers from '../sample-burgers'
import Burger from './Burger'
import base from '../base'

class App extends React.Component {

  state = {
    burgers: {},
    order: {}
  }

  componentDidMount(){
    const { params } = this.props.match;

    const localStorageRef = localStorage.getItem(params.restaurantId)
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef)})
    }
    

    this.ref = base.syncState(`${params.restaurantId}/burgers`, {
      context: this,
      state: 'burgers'
    })   
  }

  componentDidUpdate () {
    const { params } = this.props.match;
    localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order))
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }


  updateBurger = (key,updateBurger) => {

    const burgers = {... this.state.burgers};
    burgers[key] = updateBurger
    this.setState({burgers})

  }

  addBurger = (burger) => {
    
    //делаем копию обьекта  state
    const burgers = {... this.state.burgers}
    burgers[`burger${Date.now()}`] = burger;
    //добавляем новый бургер в переменную burgers
    //записываем новый обьек в state
    this.setState({burgers})
  }

  deleteBurger = key =>{
    const burgers = {...this.state.burgers}
    //delete burger
    burgers[key] = null
    //state
    this.setState({burgers})
  }

  deleteFromOrder = key =>{
    const order = {... this.state.order}
    delete order[key]
    this.setState({ order})
  }

  loadSampleBurger = () => {
    this.setState({burgers: samlpleBurgers})
  }

  addToOrder = (key) => {
    //create copy object state
    const order = {...this.state.order}
      // добавить ключк азказу с знач.-1, либо обновить текущее
    order[key] = order[key]+1 || 1;
    //пишем обновленное значение в state
    this.setState({order: order})

  }



  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very Hot Burger" amount={10} hot={true} />
          <ul className="burgers">
            {
              //бургеры не массив.см метод Object.keys
            Object.keys(this.state.burgers).map(key =>{
              return <Burger 
                            key={key}
                            index={key}
                            addToOrder ={this.addToOrder}
                            details={this.state.burgers[key]}
                             />
            })}

          </ul>
        </div>
        <Order 
          burgers ={this.state.burgers} 
          order={this.state.order}
          deleteFromOrder={this.deleteFromOrder}
        />
        <MenuAdmin  
          deleteBurger={this.deleteBurger}
          addBurger={this.addBurger}
          loadSampleBurger={this.loadSampleBurger}
          burgers = {this.state.burgers}
          updateBurger={this.updateBurger}

        />
      </div>
    );
  }
}

export default App;
