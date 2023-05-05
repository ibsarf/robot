import './search_box.css';

function Search_box({className, placeholder, onChangeHandle}) {
    return (
        <div>
            <input
                type='search'
                placeholder={placeholder}
                className={`search-box ${className}`}
                onChange={onChangeHandle}
            />
        </div>
    );
}
export default Search_box;
