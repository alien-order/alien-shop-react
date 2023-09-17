import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, plusAge } from './../store/userSlice.js';
import { plusCount, addCount } from './../store.js';
import { memo, useState } from 'react';

let Child = memo( function() {
    console.log('재렌더링됨')
    return <div>자식임</div>
})

function Cart() {

    let user = useSelector(state => state.user) 
    let cart = useSelector(state => state.cart)

    let dispatch = useDispatch()
    let [count, setCount] = useState(0)
    
    return (
        <div>
            <Child count={ count }></Child>
            {count}
            <button onClick={() => setCount(count + 1) }>+</button>
            <h4>{ user.name }의 장바구니 { user.age }</h4>
            <button onClick={() => {
                dispatch(plusAge(100))
            }}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((a, i) => 
                            <tr key={i}>
                                <td>{ a.id }</td>
                                <td>{ a.name }</td>
                                <td>{ a.count }</td>
                                <td><button onClick={() => {
                                    dispatch(addCount(a.id))
                                }}>+</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;