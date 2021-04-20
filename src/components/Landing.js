import React, {useState} from "react";
import restaurants from "../sample-restaurants";

const Landing = (props) => {
  //переделан на хуки из класса

  // state = {
  //   display: false,
  //   title: '',
  //   url: ''
  // };

  const [ display, toggleDisplay] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('')

  const displayList = () =>{
    toggleDisplay(!display)
  }

  const getTitle = (rest) => {
    const {  title, url} = rest;
    // this.setState({ title:title,
    //                 url: url,
    //                 display: false
    //               });
    
    setTitle(title);
    setUrl(url);
    toggleDisplay(false)

                  
  }

  const goToRest = () => {

    //получаем доступ к /Router  так как /Landing  дочерний компонент
    props.history.push(`/restaurant/${url}`);
  }



  return (
    <div className='restaurant_select'>
      <div className='restaurant_select-top'>
        <div onClick={displayList} className='restaurant_select_top-header font-effect-outline'
        > 
        {title ? title : 'Выбери ресторан'}
        </div>
        <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
        </div>

        {display ? (
          <div className="restaurant_select_bottom">
            <ul>
                {restaurants.map(rest => {
                   return (
                    <li
                     onClick={()=>getTitle(rest)} 
                     key={rest.id}
                     >
                       {rest.title}
                    </li>
                )
                })}
            </ul>
        </div>
        ) : null}

        {title && !display ? (
        <button onClick = {goToRest} >Перейти в ресторан</button>
        ) : null
        }
      </div>
    </div>
  
  );
}

export default Landing;
