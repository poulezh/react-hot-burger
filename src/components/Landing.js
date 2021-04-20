import React from "react";
import restaurants from "../sample-restaurants";

class Landing extends React.Component {
  state = {
    display: false,
    title: '',
    url: ''
  };

  displayList = () =>{
    const {display} = this.state;
    this.setState({display: !display });    
  }

  getTitle = (rest) => {
    const {  title, url} = rest;
    this.setState({ title:title,
                    url: url,
                    display: false
                  });
  }

  goToRest = () => {
    const { url } = this.state;
    //получаем доступ к /Router  так как /Landing  дочерний компонент
    this.props.history.push(`/restaurant/${url}`);
  }




  render() {
    return (
      <div className='restaurant_select'>
        <div className='restaurant_select-top'>
          <div onClick={this.displayList} className='restaurant_select_top-header font-effect-outline'
          > 
          {this.state.title ? this.state.title : 'Выбери ресторан'}
          </div>
          <div className="arrow_picker">
              <div className="arrow_picker-up"></div>
              <div className="arrow_picker-down"></div>
          </div>

          {this.state.display ? (
            <div className="restaurant_select_bottom">
              <ul>
                  {restaurants.map(rest => {
                     return (
                      <li
                       onClick={()=>this.getTitle(rest)} 
                       key={rest.id}
                       >
                         {rest.title}
                      </li>
                  )
                  })}

              </ul>
          </div>
          ) : null}

          {this.state.title && !this.state.display ? (
          <button onClick = {this.goToRest} >Перейти в ресторан</button>
          ) : null
          }
        </div>
      </div>
    
    );
  }
}

export default Landing;
