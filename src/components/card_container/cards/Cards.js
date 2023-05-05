import './Cards.css';

const Cards = ({monster}) => {
    const {name, id, email} = monster;
    return (
        <div className='cards-items'>
            <img
                alt={`Monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{monster.name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Cards;
