import React from "react";


const AddBurgerForm = (props) => {

    const nameRef = React.createRef();
    const priceRef = React.createRef();
    const statusRef = React.createRef();
    const descRef = React.createRef();
    const imageRef = React.createRef();

    const createBurger = (e) =>{
        e.preventDefault()
        const burger = {
            name: nameRef.current.value,
            price: parseFloat(priceRef.current.value || 0),
            status: statusRef.current.value,
            desc: descRef.current.value,
            image: imageRef.current.value
        }
        props.addBurger(burger);
        //обновляем поля формы
        e.currentTarget.reset();
    }

    return (
        <form className="burger-edit" onSubmit={createBurger}>
            <input 
                ref={nameRef}
                name='name' 
                type="text" 
                placeholder='Название бургера' 
                autoComplete='off'
            />
            <input
                ref={priceRef}
                name='price' 
                type="text" 
                placeholder='Цена' 
                autoComplete='off'
            />

            <select ref={statusRef} name='status' className='status'>
                <option value="available">Доступно</option>
                <option value="unavailable ">Убрать из меню</option>
            </select>

            <textarea ref={descRef} name='desc' placeholder='Состав'/>
            <input 
                ref={imageRef}
                name='image' 
                type="text" 
                placeholder='фото бургера' 
                autoComplete='off'
            />
            <button type='submit'>+Добавить в Меню</button>
        </form>

    )
}
 

export default AddBurgerForm