import ANavbar from "./anavbar";
import "./admin.css";

export default function Inquery() {
  return (
    <div className="admin-panel">
      <ANavbar />
      <div className="admin">
        <section className="admin-hero">
          <div>
            <p className="admin-eyebrow">Dashboard</p>
            <h1>hello</h1>
            <p className="admin-subtitle">
              This page is now connected with the admin navbar.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
