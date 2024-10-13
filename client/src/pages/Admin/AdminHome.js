import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <h2>Who We Are</h2>
      <p>We are a dedicated blood bank committed to ensuring a safe, adequate, and timely supply of blood to those in need. Our mission is to bridge the gap between blood donors and recipients, saving lives through the power of donation.</p>
      
      <h2>Our Mission</h2>
      <p>Our mission is simple: to save lives by providing a platform where people can donate blood and help those in need. We believe in the power of community and the importance of giving back. Every drop counts, and your donation could mean the difference between life and death for someone in critical need.</p>
      
      <h2>What We Do</h2>
      <p>We work with hospitals, clinics, and healthcare organizations to ensure that blood donations reach the people who need them the most. Our platform allows donors to easily register, schedule donations, and track their contributions. We also conduct awareness campaigns to educate the public about the importance of regular blood donations.</p>
      
      <h2>Why Donate Blood?</h2>
      <ul>
        <li>Each blood donation can save up to three lives.</li>
        <li>Blood is essential for surgeries, cancer treatment, and trauma care.</li>
        <li>Blood cannot be artificially manufactured – it can only come from generous donors like you.</li>
        <li>Your donation helps maintain a stable blood supply for emergencies.</li>
      </ul>
      
      <h2>Join Us in Saving Lives</h2>
      <p>Become a donor today and be a part of a community that cares. Whether you're a first-time donor or a regular contributor, your involvement makes a significant impact. Together, we can ensure that no one has to wait for the lifesaving gift of blood.</p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
