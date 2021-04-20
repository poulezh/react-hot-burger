import React from 'react';

const EditBurgerForm = (props) => {

    const {name,price,status,desc,image} = props.burger

    const handleChange = (event) => {
        const updateBurger = {
            ...props.burger,
           [event.currentTarget.name]: event.currentTarget.value
        }
        props.updateBurger(props.index, updateBurger)
    } 

    return (
        <div className="burger-edit">
            <input onChange={handleChange} type='text' name='name' value={name} />
            <input onChange={handleChange} type='text' name='price'  value={price}/>
            <select onChange={handleChange}   name='status' className='status' value={status}>
                <option value="available">Доступно</option>
                <option value="unavailable">Не доступно</option>
            </select> 
            <textarea onChange={handleChange}  name='desc'  value={desc} />
            <input onChange={handleChange}  type='text' name='image'  value={image} />
            <button
                onClick={() =>{ props.deleteBurger(props.index)}}

            >Удалить из меню</button>
        </div>
    )
}

export default EditBurgerForm;