import React from "react";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form action="/login" method="post">
        <input type="text" placeholder="Username" name="username" />
        <input type="text" placeholder="Password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}