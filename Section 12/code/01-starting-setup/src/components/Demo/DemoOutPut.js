import React from 'react';

function DemoOutPut(props) {
    console.log('render demoOutput')
    return (
        <p>
            {props.show  ? 'This is new!' : ""}
        </p>
    );
}

export default React.memo(DemoOutPut);