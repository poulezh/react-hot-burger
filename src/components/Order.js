import React from "react";
import Shipment from "./Shipment";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Order = (props) => {
  const orderIds = Object.keys(props.order);
  const total = orderIds.reduce((prevTotal, key) => {
    const burger = props.burgers[key];
    const count = props.order[key];

    const isAvailable = burger && burger.status === "available";
    // провера на присутствие бургеров в меню
    // если доступен то одна цена иначе другая
    if (isAvailable) {
      return prevTotal + burger.price * count;
    }

    return prevTotal;
  }, 0);

  const renderOrder = (key) => {
    const burger = props.burgers[key];
    const count = props.order[key];
    const isAvailable = burger && burger.status === "available";

    if (!burger) return null;
    if (!isAvailable) {
      return (
        <CSSTransition 
        classNames= 'order' 
        key={key} 
        timeout={{enter:5000, exit:5000}}>
        <li className="unavailable" key={key}>
          Извините, {burger ? burger.name : "бургер"} временно недоступен
        </li>
        </CSSTransition>
      );
    }

    return (
      <CSSTransition 
        classNames= 'order' 
        key={key} 
        timeout={{enter:5000, exit:5000}}>
        <li key={key}>
          <span>
            <span>{count}</span>
            шт. {burger.name}
            <span> {count * burger.price} ₽</span>
            <button
              onClick={() => {
                props.deleteFromOrder(key);
              }}
              className="cancellItem"
            >
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  return (
    <div className="order-wrap">
      <h2>Ваш Заказ</h2>
      <TransitionGroup component="ul" className="order">
        {orderIds.map(renderOrder)}
      </TransitionGroup>

      {total > 0 ? (
        <Shipment total={total} />
      ) : (
        <div className="nothingSelected">
          Выберите блюдо и добавьте к заказу
        </div>
      )}
    </div>
  );
};

export default Order;
