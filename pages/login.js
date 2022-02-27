import Link from "next/link";
function login() {
  return (
    <div className="login">
      <div className="loginBox">
        <form>
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
            <input type="button" value="Login" />
          </div>
          <div className="box instead">
            <p>
              Don't have an account yet!{" "}
              <Link href="/signup">
                <a className="loga">Signup</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
