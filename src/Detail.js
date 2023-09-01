import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : black;
    padding : 10px;
`

function Detail(props) {
    let {id} = useParams();
    let shoe = props.shoes.find((item) => {
        return item.id == id
    });

    return (
        <div className="container">
            <YellowBtn bg="orange">버튼</YellowBtn>
            <div className="row">
                <div className="col-md-6">
                    <img src={shoe.img} width="100%" />

                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{ shoe.title }</h4>
                    <p>{ shoe.content }</p>
                    <p>{ shoe.price }</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

        </div>
    )
}

export default Detail;