import Cards from './cards/Cards';
import './CardContainer.css';

const CardContainer = ({monsters}) => {
    return (
        <div className='CardLists'>
            {monsters.map((monster) => {
                return (
                    <Cards
                        key={monster.id}
                        monster={monster}
                    />
                );
            })}
        </div>
    );
};
export default CardContainer;
