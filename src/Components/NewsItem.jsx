import image from '../assets/News.jpg'
const NewsItem = ({ title, description, src, url }) => {
   return (
      <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-1 px-1 py-1 " style={{ width: "320px" }}>
         <img 
            src={src?src:image} 
            className="card-img-top" 
            alt="News Thumbnail" 
            style={{ height: "200px", objectFit: "cover" }} 
         />
         <div className="card-body">
            <h5 className="card-title">{title.slice(0, 50)}</h5>
            <p className="card-text">
               {description ? description.slice(0, 90) : "NVIDIA has released a brand-new Hotfix display driver 572.26 based on the Game Ready Drive"}
            </p>
            <a href={url} className="btn btn-primary">Read More</a>
         </div>
      </div>
   );
};

export default NewsItem;
