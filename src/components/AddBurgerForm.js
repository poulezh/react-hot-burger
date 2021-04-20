import React from 'react';

class  AddBurgerForm extends React.Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createBurger = (e) =>{
        e.preventDefault()
        const burger = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value || 0),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }
        this.props.addBurger(burger);

        //обновляем поля формы
        e.currentTarget.reset();

    }
    render (){
    return (
        <form className="burger-edit" onSubmit={this.createBurger}>
            <input 
                ref={this.nameRef}
                name='name' 
                type="text" 
                placeholder='Название бургера' 
                autoComplete='off'
            />
            <input
                ref={this.priceRef}
                name='price' 
                type="text" 
                placeholder='Цена' 
                autoComplete='off'
            />

            <select ref={this.statusRef} name='status' className='status'>
                <option value="available">Доступно</option>
                <option value="unavailable ">Убрать из меню</option>
            </select>

            <textarea ref={this.descRef} name='desc' placeholder='Состав'/>
            <input 
                ref={this.imageRef}
                name='image' 
                type="text" 
                placeholder='фото бургера' 
                autoComplete='off'
            />
            <button type='submit'>+Добавить в Меню</button>
        </form>

    )
    }
}

export default AddBurgerForm