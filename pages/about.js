import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
        <h1 style={{textAlign: 'center'}}>About</h1>
        <ul>
            <li> Example <a href="https://nextjs.org/learn/excel/static-html-export/deploying-the-app"> next.js </a> project utilizes nexjs's server-side rendering and static website generation features</li>
            <li> Interacts with <a href="http://api.tvmaze.com/search/shows?q=london>"> TvMaze Api </a> to get the keyword based TV Show results</li>
            <li> Uses <a href="https://reactjs.org/">React JS </a> to render the UI</li>
            <li> Application deployed to the <a href="https://aws.amazon.com/"> AWS </a> for the performance and cost efficiency. </li>
            <li> Open-source code is available on <a href="https://github.com/omertarik96/tvshows-nextjs"> github </a> </li>
            <li> Build by <a href="https://omertarikkoc.com"> Omer Tarik Koc </a></li>
        </ul>
    </Layout>
)