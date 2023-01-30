import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import type { SubmitHandler } from 'react-hook-form';

interface ILoginForm {
  username: string;
  password: string;
  email: string;
}
const Homework = () => {
  // const [formMsg, setFormMsg] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ILoginForm>();

  const onValid: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
    setValue('username', '');
    setValue('email', '');
    setValue('password', '');
    alert('유효');
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('username', {
          required: 'username이 비어있습니다',
          minLength: { value: 3, message: 'username 길이가 너무 짧습니다' },
          maxLength: { value: 10, message: 'username 길이가 너무 깁니다' },
        })}
        type="text"
        placeholder="Username"
      />
      <Msg>{errors?.username?.message}</Msg>
      <input
        {...register('email', {
          required: 'email이 비어있습니다',
          validate: (value) =>
            value.includes('@gmail.com') ? 'gmail.com은 불가능합니다.' : true,
        })}
        type="email"
        placeholder="Email"
      />
      <Msg>{errors?.email?.message}</Msg>
      <input
        {...register('password', {
          required: 'password이 비어있습니다',
          minLength: { value: 8, message: 'password 길이가 너무 짧습니다' },
          maxLength: { value: 15, message: 'password 길이가 너무 깁니다' },
        })}
        type="password"
        placeholder="Password"
      />
      <Msg>{errors?.password?.message}</Msg>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Homework;

const Msg = styled.span`
  color: red;
  font-weight: 700;
`;
