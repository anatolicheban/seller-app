import "./index.scss";
export const Login = () => {
  return (
    <div className={"login-page"}>
      <form className={"login-page-form"}>
        <h2>Login</h2>

        <label className={"input-block"}>
          <p>Email or username</p>
          <input type="text" />
        </label>

        <label className={"input-block"}>
          <p>Password</p>
          <input type="text" />
        </label>

        <button>Enter</button>
      </form>
    </div>
  );
};
