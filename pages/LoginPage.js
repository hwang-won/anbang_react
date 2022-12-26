import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const LoginPage = () => {
    return (
        <>
            <Navbar />
            <AuthTemplate>
                <AuthForm type="login" />
            </AuthTemplate>
            <Footer />
        </>
    );
};

export default LoginPage;
