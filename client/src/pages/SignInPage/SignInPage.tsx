import { UserType } from '../../entities/user/model';
import AuthForm from '../../features/auth/ui/AuthForm/AuthForm';

type Props = {
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

export default function SignInPage({ setUser }: Props): JSX.Element {
  console.log('11111');
  return (
    <>
      <AuthForm type='signin' setUser={setUser} />
    </>
  );
}