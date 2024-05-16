import { useParams, useNavigate } from "react-router-dom";

function UserDetails() {
  const {name} = useParams();
  const navigate = useNavigate()

  const goBackHandler = () => {
    // navigate(-1);
    navigate("/user");
  }

  return (
    <div className="flex items-center justify-center gap-5 flex-col mt-8">
      <h1 className="text-xl font-semibold text-red-400">
        UserDetail is Here :
      </h1>
      <h1 className="text-3xl font-bold text-black/80 capitalize">Hellowww...!! {name}</h1>
      <button onClick={goBackHandler} className="bg-zinc-600 rounded-md px-3 py-2 text-white font-semibold">
        Go Back
      </button>
    </div>
  );
}

export default UserDetails;
