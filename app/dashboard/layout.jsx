import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Nav from "@/components/Nav";


function Layout({ children }) {
  const { getUser } = getKindeServerSession();
  const user = getUser();
    return (
      <>
        {user ? <main>
          <Nav/>
          {children}</main>:<h1>Page not found</h1>}
      </>
    )
  }

export default Layout