import { FC } from "react";
import { PieChart } from "react-minimal-pie-chart"
import styled from "styled-components";

import "../global.scss"

interface PieProps {
    total?: number;
    activeStr?: number | any;
    active?: number;
    inactive?: number | any;
    completed?: number;
    category?: string;
}

const PieTitleSpan = styled.span`
display: flex;
flex-direction: column;
align-items: center;
max-width: 50px;
position: relative;
top: 40%;
h2{
    font-family: "Gilroy-Regular";

    font-size: 30px;
    margin: 0 0 0 0;
}
h3 {
    font-family: "Gilroy-Bold";
    font-size: 35px;
    color: #cd5229;
}
`;

export const Pie: FC<PieProps> = ({ activeStr, active, inactive, completed, total, category }) => {
    return (
        <>
            <PieTitleSpan>
                <h2>{category}</h2>
                <h3>{activeStr ? activeStr : total}</h3>
            </PieTitleSpan>
            <PieChart
                style={{ width: "300px", height: "300px" }}
                rounded

                totalValue={total}
                lineWidth={12}
                labelStyle={{ fontSize: "12px", }}
                labelPosition={0}

                data={[
                    { title: "Active", value: active, color: activeStr === active ? "#ffff25" : "#79e712" },
                    { title: "Inactive", value: inactive, color: activeStr === inactive ? "#ffff25" : "#685f5f" },
                    { title: "Completed", value: completed, color: activeStr === completed ? "#ffff25" : "#6A2135" },
                ]}
            />
        </>
    )
}