import React from 'react'
class App16 extends React.Component {
    constructor(props) {
      super(props);
  
      this.email = React.createRef();
      this.username = React.createRef();
      this.password = React.createRef();
      this.confirmpassword = React.createRef();
      this.state = {
        errors: []
      };
    }
  
    handleSubmit(event) {
      const email = this.email.current.value;
      const username = this.username.current.value;
      const password = this.password.current.value;
      const confirmpassword = this.confirmpassword.current.value;
      const errors = this.handleValidation(email,username, password,confirmpassword);
  
      if (errors.length >= 0) {
        this.setState({ errors });
        return;
      }
      
    };
  
    handleValidation  (username,email,confirmpassword, password)  {
      const errors = [];
      if (username.length === 0) {
        errors.push("Username cannot be empty");
      }
      if (email.length === 0) {
        errors.push("email cannot be empty");
      }
    //   console.log(password===confirmpassword);
      if (password.length < 6) {
        errors.push("Password should be at least 6 characters long");
      }
      if (password!==confirmpassword) {
        errors.push("Password is not matching");
      }
      
      return errors;
    };
  
    render() {
      const { errors } = this.state;
      return (
        <div>
          <h1>Sign up</h1>
            {errors.map(error => <p key={error}>{error}</p>)}
            <div>
              <label>email:</label>
              <input type="email" ref={this.email} />
            </div>
            <div>
              <label>username:</label>
              <input type="text" ref={this.username} />
            </div>
            <div>
              <label>Password:</label>
              <input type="text" ref={this.password} />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input type="text" ref={this.confirmpassword} />
            </div>
            <div>
              <button onClick={this.handleSubmit.bind(this)}>Sign up</button>
            </div>
          
        </div>
      );
    }
  }

  export default App16;

