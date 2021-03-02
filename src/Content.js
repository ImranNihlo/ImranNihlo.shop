import Card from "./Card";

function Content(props) {


    return (
        <div className="content">
            {props.database.map((product) => {
                return <Card product={product} />
            })
            }
        </div>
    )
}

export default Content;