function App() {
  return (
    <section className="my-section">
      <div className="my-container">
        <div className="my-card">
          <div className="my-card-header">
            <h1 className="my-card-title">會員登入</h1>
            <form className="my-form" action="#">
              <div>
                <label htmlFor="email" className="my-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="my-input"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="my-label">
                  密碼
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="my-input"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="my-passwordCheckbox">
                <div className="my-passwordCheckbox__wrapper">
                  <div className="my-passwordCheckbox__inputWrapper">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="my-checkbox"
                      required
                    />
                  </div>
                  <div className="my-passwordCheckbox__text">
                    <label htmlFor="remember" className="my-checkbox-label">
                      記住帳號
                    </label>
                  </div>
                </div>
                <a href="#" className="my-link">
                  忘記密碼？
                </a>
              </div>
              <button type="submit" className="my-button">
                登入
              </button>
              <p className="my-text">
                還沒成為會員？{" "}
                <a href="#" className="my-link">
                  立即註冊
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
