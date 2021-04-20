import React from "react";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from './EditBurgerFotm';

const MenuAdmin = (props) => {
    return (
  <div className="menu-admin">
    <h2>Управление Меню</h2>
    {Object.keys(props.burgers).map(key =>{
      return (
        <EditBurgerForm
          key={key}
          index={key}
          burger={props.burgers[key]}
          updateBurger={props.updateBurger}
          deleteBurger = {props.deleteBurger}
       />
      )
    })}


    <AddBurgerForm 
      addBurger={props.addBurger}
            
      />
    <button onClick={props.loadSampleBurger}>Загрузить бургеры</button>
  </div>
    )
    };

export default MenuAdmin;
