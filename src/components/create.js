import React from "react";
import "./create.css"
class DynamicForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["mobileno"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "Please Fill the name";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "Please Fill the email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "Invalid email-ID.";
      }
    }

    // if (!fields["mobileno"]) {
    //   formIsValid = false;
    //   errors["mobileno"] = "*Please enter your mobile no.";
    // }

    // if (typeof fields["mobileno"] !== "undefined") {
    //   if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
    //     formIsValid = false;
    //     errors["mobileno"] = "*Please enter valid mobile no.";
    //   }
    // }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "please Fill the Password";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) ||
        !(fields["password"].match(/([!,%,&,@,#,$,^,*,?,_,~])/)) ||
        !(fields["password"].match(/([0-9])/)) 
      ) {
        formIsValid = false;
        errors["password"] = "Enter secure and strong Password";
      }
    }
    this.setState({
      errors: errors
    });
    return formIsValid;


  }



render() {
  return (
  <div id="main-registration-container">
   <div id="register">
      <h3 >Dynamic Form</h3>
      <div class = "box">
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <label>Enter your username</label><br/><br/>
      <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} placeholder="your Username"/>
      <div className="errorMsg"  style={{color:"red"}}>{this.state.errors.username}</div><br/>
      <label>Enter your email  id</label><br/><br/>
      <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  placeholder="your Email"/>
      <div className="errorMsg" style={{color:"red"}}>{this.state.errors.emailid}</div><br/>
      {/* <label>Mobile No:</label><br/>
      <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
      <div className="errorMsg">{this.state.errors.mobileno}</div> */}
      <label>Enter your password</label><br/><br/>
      <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} placeholder="your Password"/>
      <div className="errorMsg"  style={{color:"red"}}>{this.state.errors.password}</div><br/><br/>
      <input type="submit" className="button"  value="Register"/>
      </form>
  </div>
  </div>
</div>

    );
}


}

export default DynamicForm