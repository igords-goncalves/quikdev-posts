import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../services/auth/authServices';
import Balancer from 'react-wrap-balancer';

interface PostHederProps {
  name: string;
}

export const PostHeder: React.FC<PostHederProps> = ({ name }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => handleLogout(navigate)}
        className="bg-transparent border-gray-300 border-2 py-1 rounded-md text-sm absolute top-0 right-0 mt-4 mr-4"
      >
        Sair
      </button>
      <div className="">
        <h1 className="text-gray-300 font-bold text-2xl mt-8">
          <Balancer>Bem vindo {name}, faça seu post!</Balancer>
        </h1>
      </div>
    </>
  );
};
