class SearchBar extends React.Component {

    constructor(props){
        super(props);

        this.state = { term: 'batman'};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
                <style jsx> {`
                .search-bar {
                    text-align: center;
                }

                .search-bar input{
                    width: 80%;
                    margin:auto;
                    height: 2em;
                    padding: 5px;
                    border: 1px solid #DDD;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    transition: all .2s ease-in-out;
                }
                `}</style>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;