import SearchBox from './components/search_box/Search_box';
import CardContainer from './components/card_container/CardContainer';

import './App.css';
import {useState, useEffect} from 'react';

function App() {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);

    const onSearchChange = (e) => {
        const searchFieldString = e.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => {
                setMonsters(users);
            });
    }, []);
    // console.log(monsters);

    const filteredMonster = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField);
    });

    return (
        <div className='App'>
            <h1>Monsters Rolodex</h1>
            <SearchBox
                className='monster-search-box'
                placeholder='Search Monsters'
                onChangeHandle={onSearchChange}
            />
            <CardContainer monsters={filteredMonster} />
        </div>
    );
}

export default App;
