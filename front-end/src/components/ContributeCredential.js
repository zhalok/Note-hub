import React from "react";
import { Link } from "react-router-dom";

export default class ContributeCredential extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="center-box bg-transparent border border-light shadow-lg rounded m-5 p-5">
            <p className="display-5 text-light">Please Login to continue...</p>
            <form>
              <div class="form-group">
                <h3 className="text-light">Already Signed Up?</h3>
                <Link
                  type="button"
                  to="/login"
                  class="btn btn-secondary w-100 mt-2"
                >
                  Log in
                </Link>
                <div className="d-flex justify-content-center text-light pb-3">
                  or,
                </div>
                <Link
                  type="button"
                  to="/signup"
                  class="btn btn-outline-secondary w-100"
                >
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
