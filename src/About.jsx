import { useSearchParams, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function About() {
  const navegation = useNavigate();
  const [search] = useSearchParams();
  const title = search.get("title");
  const description = search.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center text-center p-6">
      <div className=" w-[500px] space-y-4 p-6 bg-slate-200 rounded-md shadow">
        <div className="flex justify-center relative">
          <button
            onClick={() => navegation(-1)}
            className="text-slate-500 hover:underline absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-slate-500 text-3xl">About</h1>
        </div>
        <div className="space-y-2 p-4 bg-slate-100 rounded-md shadow">
          <h1 className="text-slate-500 text-3xl">{title}</h1>
          <p className="text-slate-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default About;
