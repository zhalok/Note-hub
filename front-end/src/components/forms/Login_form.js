import React from "react"
class Login_form extends React.Component{
    render()
    {
        const {Icon,}
        return (
            <div className="center-box p-3 border border-light mt-5 mb-5 w-25">
          <h3 className="pl-4 pb-3 display-5 text-light ">
            {" "}
            Let's get started...
          </h3>
          <hr className="bg-light " />
          <div className="center-box text-center mt-3 pt-3">
            <img
              src={Icon}
              alt="icon.png"
              height="150px"
              width="150px"
              className="rounded  "
            />
          </div>

          <div className="form-group m-3 pt-3 pb-3">
            <form>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Registration Number"
                value={registration_number}
                onChange={this.changehandler}
              />
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Password"
                value={this.state.password}
                onChange={this.changehandler}
              />
            </form>
          </div>
          <div className="center-box p-3">
            {Logged}
            <Link
              type="button"
              to="/signup"
              className="btn btn-outline-light btn-block"
            >
              SignUp
            </Link>
           
          </div>
        </div>
        );
    }
}