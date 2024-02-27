import { Link } from "react-router-dom";
import "../componentcss/Error.css";
const Error = () => {
  return (
    <>
 <div className="error-page-container">
    <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/page_not_found_su7k.svg" alt="404" />
    
    <h4>
      Oopps! The page you were looking doesn't exist.
    </h4>
    
    <p>
      <a href="" className="btn btn-danger">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Go to Home Page.....
        </Link>
        
      </a>
    </p>
    
  </div>
    </>
  );
};

export default Error;
