export default function Registration() {

  function handleSubmit(e) {// e jo hai event object hai Browser ek event banata hai
    e.preventDefault(); // page reload rokta hai
   alert("Form submitted");
  }
return (
    <form onSubmit={handleSubmit} className="register-form">

      <label>Name:</label>
      <input type="text" placeholder="Provide your name" />
      <br></br>
      <label>Email:</label>
      <input type="email" placeholder="Provide your email" />
      <br></br>

      <button type="submit">Register</button>

    </form>
  );
}
