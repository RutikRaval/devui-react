// src/pages/auth/Login.tsx
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { loginUser } from "../../services/authApi";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      loginFetch(values)
    },
  });
const loginFetch = async (data) => {
  const response=await loginUser(data)
  console.log(response);
  
}
  return (
    <>
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={formik.handleSubmit}>
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

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <div className="text-center mt-4">
        <span>Don't have an account? </span>
        <Link to="/register">Register here</Link>
      </div>
    </>
  );
};

export default Login;
