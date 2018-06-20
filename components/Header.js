import Link from 'next/link'
import Head from 'next/head'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Head>
            <title>Tv Shows - A Next Js App</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Link href="/">
            <a style={{linkStyle}}> Home </a>
        </Link>
        <Link href="/about">
            <a style={{linkStyle}}> About </a>
        </Link>

        <style jsx>{`

        a {
            font-size: 1.5em;
            text-decoration: none;
            color: pink;
            transition: 0.3s ease;
        }

        a:hover {
            color: red;


        }



        `} </style>
    </div>
)

export default Header