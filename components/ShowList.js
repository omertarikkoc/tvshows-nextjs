import Link from 'next/link'
const ShowList = (props) => (
    <ul className="shows-container">
        {props.shows.map(({show}) => (
            <li key={show.id} className="show">
                <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                    <div>
                        <img className="show-image" src={show.image.medium?show.image.medium:show.image.original}/>
                        <a className="show-name">{show.name}</a>
                    </div>
                </Link>
            </li>
        ))}
        <style jsx> {`
        ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

        a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }

      .shows-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

      }

      .show {
        margin: auto;
        border: 1px solid #DDD;
        margin-top: 2%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transition: all .2s ease-in-out;
      }


       .show:hover {
        cursor: pointer;
        transform: scale(1.1);
      }


      @media only screen and (max-width: 480px) {
           .show {
            width: 100%;
            max-width: 350px;
            margin-left: auto;
            margin-right: auto;
          }
      }


      @media only screen and (min-width: 481px) and (max-width: 747px) {
           .show {
            width: 45%;
          }
      }


      @media only screen and (min-width: 748px) and (max-width: 929px) {
           .show {
            width: 30%;
          }
      }


       @media only screen and (min-width: 930px) {
           .show {
            width: 20%;
          }
      }



      .show-image {
        width: 100%;
      }

      .show-name {
        display: block;
        text-align: center;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
      }



        `}</style>
    </ul>
)



export default ShowList