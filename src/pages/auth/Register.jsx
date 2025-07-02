// src/pages/auth/Register.tsx
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { registerUser } from "../../services/authApi";

const Register = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        }),
        onSubmit: (values) => {
            console.log("Register Data", values);
            registerFetch(values)
        },
    });
    const registerFetch = async(data) => {
        const response=await registerUser(data)
        console.log("res",response);
        
    }
    return (
        <>
            <h2 className="text-center mb-4">Register</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className={`form-control ${formik.touched.name && formik.errors.name ? "is-invalid" : ""}`}
                        {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className="invalid-feedback">{formik.errors.name}</div>
                    )}
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback">{formik.errors.email}</div>
                    )}
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
                        {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="invalid-feedback">{formik.errors.password}</div>
                    )}
                </div>

                <button type="submit" className="btn btn-success w-100">Register</button>
            </form>

            <div className="text-center mt-3">
                <span>Already have an account? </span>
                <Link to="/login">Login here</Link>
            </div>
        </>
    );
};

export default Register;
