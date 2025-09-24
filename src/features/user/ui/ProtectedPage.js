import isAuth from "../libs/isAuth";
import LoadingPage from "@/shared/ui/loading-page";
import HasNotAccessPage from "@/shared/ui/has-not-access";

export default function ProtectedPage(Component) {
  return function (props) {
    const { loading, hasAccess } = isAuth();

    if (loading) return <LoadingPage />;
    if (!hasAccess) return <HasNotAccessPage />;

    return <Component {...props} />;
  };
}
