import {useSelector, useDispatch} from 'react-redux';

export default function UserView() {
    // достаём значения и деструктуризируем их
    const { user } = useSelector(state => state);
    // вызываем useDispatch для диспатча данных в redux
    const dispatch = useDispatch();

    // диспатчим изменения. Преедаём тип и объект payload с изменяемыми полями соотвественно 
    // (не надо передавать все данные, если не хотите их изменять, которые есть в редюсере по этому типу)
    const plus = () => dispatch({
        type: 'SET_USER',
        payload: {
            count: user.count + 1
        }}
    )
    const minus = () => dispatch({
        type: 'SET_USER',
        payload: {
            count: user.count - 1
        }}
    )
    return (
        <div>
            <p>Count: {user.count}</p>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            Счётчик:{' '} 
                <button onClick={plus}>+1</button>
                <button onClick={minus}>-1</button>
        </div>
    )
}