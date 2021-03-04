import Card from "./Card";

function Content(props) {


    return (
        <div className="content">
            {props.database.map((product) => {
                return <Card product={product}
                             bought={product.bought}
                             setBought={props.setBought}
                             id={product.id} />
            })
            }
        </div>
    )
}

export default Content;