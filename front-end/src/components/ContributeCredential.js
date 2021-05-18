import React from "react";
import { Link } from "react-router-dom";

export default class ContributeCredential extends React.Component {
  render() {
    return (
      <>
        <p>Please Login to continue</p>
        <div className="d-flex justify-content-center">
          <div className="center-box">
            <form>
              <div class="form-group">
                <h3>Already Signed Up?</h3>
                <Link
                  type="button"
                  class="btn btn-primary w-100 mt-2"
                  to="/login"
                >
                  Log in
                </Link>
                <div className="d-flex justify-content-center">or,</div>
                <Link
                  type="button"
                  class="btn btn-outline-primary w-100"
                  to="/signup"
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
