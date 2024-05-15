import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="my-5">
      <button
        className="btn btn-sm bg-orange-500 text-white"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
};
