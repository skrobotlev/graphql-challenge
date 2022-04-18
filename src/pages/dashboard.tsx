import { PieChart } from "react-minimal-pie-chart";
import { LOGIN } from "../router/consts";
import { useHistory } from "react-router-dom";

const DashboardPage = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push(LOGIN);
  };
  const data = {
    name: "Greater China",
    numbers: [13, 5, 83],
  };
  return (
    <div>
      <PieChart
        style={{ width: "200px" }}
        totalValue={100}
        lineWidth={20}
        data={[
          { title: "One", value: 30, color: "#E38627" },
          { title: "Two", value: 30, color: "#C13C37" },
          { title: "Three", value: 30, color: "#6A2135" },
          { title: "Three", value: 10, color: "#e4e4e4" },
        ]}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogout();
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default DashboardPage;
