import { LOGIN } from "../router/consts";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { PieCard } from "../components/pie-card";
import { useDialogs, useLists, useScenarios } from "../hooks/useRequest";
import styled from "styled-components";
import { LogButton } from "./login";

const PieCardsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 95%;
 
`

const DashboardPage = observer(() => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push(LOGIN);
  };

  return (
    <>
      <PieCardsDiv>
        <PieCard category="Dialogs" useRequestCat={useDialogs} />
        <PieCard category="Scenarios" useRequestCat={useLists} />
        <PieCard category="Lists" useRequestCat={useScenarios} />
      </PieCardsDiv>
      <LogButton style={{ marginTop: "50px" }}
        onClick={(e) => {
          e.preventDefault();
          handleLogout();
        }}
      >
        LOGOUT
      </LogButton>

    </>

  );
});

export default DashboardPage;
