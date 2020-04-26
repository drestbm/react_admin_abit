import React from 'react';
import { VictoryBar, VictoryChart,  VictoryStack, VictoryAxis, VictoryLegend} from 'victory';
import css from './Bar.module.css';

const red = {
    data: { fill: "#8d4a46" },
}
// const blue = {
//     data: { fill: '#4a548e' }
// }
const yellow = {
    data: { fill: '#ffcc00' }
}
const green = {
    data: { fill: '#50945f' }
}

function Bar(props) {
    return (
        <div className={css.wrapper}>
            <VictoryChart 
                width={800} 
                height={400}
                domainPadding={{ x: 20, y: 50 }}
            >
                <VictoryLegend
                    x={275} 
                    y={0}
                    width={200}
                    centerTitle
                    gutter={30}
                    orientation="horizontal"
                    style={{ 
                        title: {fontSize: 20},
                        labels: { fill: "#acacac" },
                    }}
                    data={[
                        { name: props.names[0], symbol: { fill: '#50945f'} },
                        { name: props.names[1], symbol: { fill: "#8d4a46" } },
                        { name: props.names[2], symbol: { fill: '#ffcc00' } }
                    ]}
                />
                <VictoryStack>
                    <VictoryBar
                    data={props.data[1]}
                    style={red}
                    />
                    <VictoryBar
                    data={props.data[0]}
                    style={green}
                    />
                    <VictoryBar
                    data={props.data[2]}
                    style={yellow}
                    />
                </VictoryStack>
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

export default Bar