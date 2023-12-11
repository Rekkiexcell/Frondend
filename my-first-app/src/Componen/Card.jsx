import { Link } from "react-router-dom"
import CardModal from "./CardModal"

export default function Card(props){
    return(
        <div className="card bg-base-100 shadow-xl">
            <figure className="relative">
                <Link to={`/detail-product/${props.data.id}`}>
                <img src={props.data.image} />
                </Link>
                <CardModal />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.data.name} </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            
        </div>
    
    )
}