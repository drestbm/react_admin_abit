import React from 'react';
import { VictoryScatter, VictoryLine, VictoryChart, VictoryAxis} from 'victory';
import css from './Line.module.css';

function Line(props) {
    return (
        <div className={css.wrapper}>
            <VictoryChart width={800} height={400}>
                <VictoryLine
                    data={props.data}
                    style={{ data: { stroke: "#ffcc00" } }}
                />
                <VictoryScatter 
                    data={props.data}
                    size={5}
                    style={{ data: { fill: "#ffcc00" } }}
                />
                <VictoryAxis
                    crossAxis
                    style={{
                        axis: {stroke: "#acacac"},
                        ticks: {stroke: "#acacac", size: 5},
                        tickLabels: { fill: "#acacac", fontSize: 15, padding: 5}
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    crossAxis
                    style={{
                        axis: {stroke: "#acacac"},
                        ticks: {stroke: "#acacac", size: 5},
                        tickLabels: { fill: "#acacac", fontSize: 15, padding: 5}
                    }}
                />
            </VictoryChart>
        </div>
    )
}

export default Line;