import Link from "next/link";
function signup() {
  return (
    <div className="login">
      <div className="loginBox">
        <form>
          <div className="box">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              className="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="box">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              id="pass"
              className="pass"
              placeholder="Password"
              required
            />
          </div>
          <div className="box loginBtn">
            <input type="button" value="Signup" />
          </div>
          <div className="box instead">
            <p>
              Already have an account!{" "}
              <Link href="/login">
                <a className="loga">Login</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default signup;
