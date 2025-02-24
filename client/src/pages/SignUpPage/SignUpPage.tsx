import { UserType } from '../../entities/user/model';
import AuthForm from '../../features/auth/ui/AuthForm/AuthForm';

type Props = {
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

export default function SignUpPage({ setUser }: Props): JSX.Element {
  return (
    <>
      <AuthForm type='signup' setUser={setUser} />
    </>
  );
}