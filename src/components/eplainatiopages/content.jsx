import { Outlet } from "react-router-dom";
import "./content.css";

export default function Explain() {
  return (
    <div className="explain-container">
      <h4>content must be displayed here</h4>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
