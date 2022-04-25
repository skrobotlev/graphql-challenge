import { FC, useState } from "react";
import styled from "styled-components";
import { Pie } from "./pie";

type H1Props = {
    active?: number;
}

const PieCardDiv = styled.div<H1Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
      font-size: 23px;
    margin: 5px 0 0 0;
    pointer-events: auto;
  }
    h1:hover {
    color: green;
    text-decoration: underline;
  } 
`;

interface PieCardProps {
    useRequestCat: () => {
        active: number;
        inactive: number;
        completed: number;
        totalValue: number;
    }
        | any;
    category: string;
    activeHeader?: number;
}

export const PieCard: FC<PieCardProps> = ({ useRequestCat, category }) => {
    const [activeHead, setActiveHead] = useState<number>(0);
    const diags = useRequestCat();
    const { active, inactive, completed, totalValue } = diags;

    return (
        <PieCardDiv >
            <Pie
                category={category}
                activeStr={activeHead}
                active={active}
                inactive={inactive}
                total={totalValue}
                completed={completed}
            />
            <h1 onClick={() => setActiveHead(0)}>Всего: {totalValue}</h1>
            <h1 onClick={() => setActiveHead(active)}>Активных: {active}</h1>
            <h1 onClick={() => setActiveHead(inactive)}>Неактивных: {inactive}</h1>
            <h1 onClick={() => setActiveHead(completed)}>Завершённые: {completed}</h1>
        </PieCardDiv>
    );
};
