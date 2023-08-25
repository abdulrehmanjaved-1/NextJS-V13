
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import QNASection from "@/components/QNA";



const welcome = () => {

  const { getUser } = getKindeServerSession();
  const user = getUser();
  
  return (
   <> {user ? <div>
   <div className="flex justify-center items-center text-center max-h-screen">
     <h1 className="font-bold text-4xl text-black-700 mt-5">
       Welcome {user.given_name} to your own Todo-App
     </h1>
   </div>
   <div className="flex justify-center">
     <QNASection user={user}/>
   </div>
 </div>:<h1>Page not found</h1>}</>
  );
};

export default welcome;
