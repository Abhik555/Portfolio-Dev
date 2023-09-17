import img from '.././assets/me.jpg';

function Card(props) {
    return (
        <div className="card">
            <img src={img} alt="Abhik Ghosh" width="100%" height="80%"></img>
            <div className="cardtext">
                <h4 className='cardtitle'><b>Abhik Ghosh</b></h4>
                <p className='carddisc'>Developer</p>
            </div>

        </div>
    );
}

export default Card;