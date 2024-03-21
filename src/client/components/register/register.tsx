import { Button, Input, Radio, RadioGroup } from '@nextui-org/react';

const Register = () => {
  return (
    <form className="flex flex-col gap-3">
      <Input type="email" label="Email" isRequired />
      <Input type="password" label="Password" isRequired />
      <Input type="password" label="Repeat password" isRequired />
      <RadioGroup label="Select your gender" orientation="horizontal" defaultValue="male" isRequired>
        <Radio value="male">Male</Radio>
        <Radio value="female">Female</Radio>
      </RadioGroup>
      <Button color="primary">Register</Button>
    </form>
  );
}

export default Register;