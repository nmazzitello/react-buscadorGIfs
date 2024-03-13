export const GifGridItem = ({id, title, url})=> {

    console.log(title)
    return(
        <div className="card animate__bounceOut">
            <img src={url} alt={title}></img>
            <p>{title}</p>
            
        </div>
    );
};