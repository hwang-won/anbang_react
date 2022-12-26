import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const RegisterPage = () => {
    return (
        <>
            <Navbar />
            <AuthTemplate>
                <AuthForm type="register" />
            </AuthTemplate>
            <Footer />
        </>
    );
};

export default RegisterPage;
