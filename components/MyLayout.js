import Header from './Header.js'

const layoutStyle = {
    padding: 20,
    border: '1px solid #DDD',
    maxWidth: 800,
    marginRight: 'auto',
    marginLeft: 'auto'
}

const Layout = (props) => (
    <div className="main-container">
        <Header/>
        {props.children}
        <style jsx> {`

        .main-container {
           max-width: 1200px;
           margin-right: auto;
           margin-left: auto;

        }


        `} </style>
    </div>
)

export default Layout