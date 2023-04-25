import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Post({_id,title,summary,cover,content,createdAt,author}) {

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} alt=""/>
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}










// export default function Post() {
//   return (
    
    
// <div className='post'>

// <div className='image'>
//     <img src="https://images.wombo.art/generated/02263efe-5eeb-401f-9c21-19488059a083/final.jpg?Expires=1689034714&Signature=qOgINW4wSuqc2ir2Ov1qQF8FTx23rLf4FtZcHdllYeekBpB2QQsH8RV-u86NuRxCEtrQeDy2uV3QR8zJ9LB-EfkJptTVqwR30r97~qlhwCoQdCH5QHnxKtP-NWrWlAdf3d1HSnm4ojV1syTVbnVppiwwhf86n3joaWT50ZswN5m91logCD247q1VOZiK7l5--J20FSn3-ORyNpNDF-IIr1I8fQXV5M5BLOtMrGpArdszEuxqBreq08YFlVk-1cfjhETsXW-Ephz7lWWlTf8815MRnrIqGsJ-TcxaYwS-ib30ETPAI~dfEu57eFDNEyNXyXpEagY52mk0ApOAJwYLxg__&Key-Pair-Id=K1ZXCNMC55M2IL" alt="bluesneaker"/>
// </div>

// <div className='text'>
//   <h2>A.I.-Generated Art Is Already Transforming Creative Work
//   </h2>

//   <p className="info">
//       <a className='author'>By Kevin Roose</a>
//       <time>04/22/2023 5:58pm</time>
//   </p>
    
//   <p className='summary'>The Exacting News of AI Art</p>

//   <p className='summmary'>Only a few months old, apps like DALL-E 2, Midjourney and Stable Diffusion are changing how filmmakers, interior designers and other creative professionals do their jobs. </p>
// </div>
  
// </div> 
//   );
// }
