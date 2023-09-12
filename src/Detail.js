import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addCart } from "./store.js";
import { useDispatch } from "react-redux";

function Detail(props) {
    
    let {id} = useParams();
    let shoe = props.shoes.find((item) => {
        return item.id == id
    });
    let [view, setView] = useState(true);
    let [inputAlert, setInputAlert] = useState(false);
    let [userInput, setUserInput] = useState('');
    let dipatch = useDispatch();
    
    useEffect(() => {
        let a = setTimeout(() => {
            setView(false);
        }, 2000);

        return () => {
            clearTimeout(a);
        }
    }, []);
    useEffect(() => {
        if(parseInt(inputAlert) == NaN) {
            setInputAlert(true);
        } else {
            setInputAlert(false);
        }
    }, [userInput]);

    return (
        <div className="container">
            {
                view == true ? 
                <div className="alert alert-warning">
                2초이내 구매시 할인
            </div> : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={shoe.img} width="100%" />

                </div>
                <div className="col-md-6 mt-4">
                {
                    inputAlert == true ? 
                    <div className="alert alert-warning">
                    이상한거치지마세요
                </div> : null
                }
                    <input type="text" onChange={(e) => {
                        setUserInput(e.target.value);
                    }}></input>
                    <h4 className="pt-5">{ shoe.title }</h4>
                    <p>{ shoe.content }</p>
                    <p>{ shoe.price }</p>
                    <button className="btn btn-danger" onClick={() => {
                        let copy = shoe;
                        dipatch(addCart(shoe));
                    }}>주문하기</button>
                </div>
            </div>

        </div>
    )
}

export default Detail;