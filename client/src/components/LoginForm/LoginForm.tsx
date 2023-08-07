import React, { useState } from 'react';
import Signup from '../Auth/Signup';
import Signin from '../Auth/Signin';

function LoginForm() {
  const [alreadySignin, setAlreadySignin] = useState(true);

  return (
    <div>
      {alreadySignin && <Signin setAlreadySignin={setAlreadySignin} />}
      {!alreadySignin && <Signup setAlreadySignin={setAlreadySignin} />}
    </div>
  );
}

export default LoginForm;
