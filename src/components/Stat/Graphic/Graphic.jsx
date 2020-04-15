import React from 'react';
import { VictoryBar, VictoryChart,  VictoryContainer, VictoryAxis, VictoryGroup} from 'victory';
import css from './Graphic.module.css';

const red = {
    data: { fill: "red" },
}
const blue = {
    data: { fill: '#ffffff' }
}
const yellow = {
    data: { fill: 'yellow' }
}
const green = {
    data: { fill: 'green' }
}

function Graphic() {
    return (
        <div className={css.wrapper}>
            <VictoryChart style={{ parent: { maxWidth: "70%" }, position:"static"}}
            containerComponent={<VictoryContainer responsive={false}/>}>
                <VictoryGroup offset={20}>
                    <VictoryBar
                    data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
                    style={red}
                    />
                    <VictoryBar
                    data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
                    style={blue}
                    />
                    <VictoryBar
                    data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}
                    style={green}
                    />
                    <VictoryBar
                    data={[{ x: 1, y: 4 }, { x: 2, y: 5 }, { x: 3, y: 6 }]}
                    style={yellow}
                    />
                </VictoryGroup>
            </VictoryChart>
        </div>
    )
}

export default Graphic