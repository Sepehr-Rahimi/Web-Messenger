import {useNavigate} from 'react-router-dom'



const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto shadow-md shadow-black m-10 rounded-lg p-8 bg-slate-100">
      <h1 className="text-xl font-semibold  w-full text-center  my-2">Welcome to web messenger </h1>
      <div className="px-12 py-10 my-4 border-y border-black">Here we have a sample of web messenger without any backend . You are watching site with my own built data</div>
      <button onClick={() => {navigate('Chats')}} className="w-24 border border-black rounded-lg py-1 px-1 bg-white shadow-md shadow-black hover:scale-95">Lets see</button>
    </div>
  );
};

export default Home;
