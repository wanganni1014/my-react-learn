import React from 'react';
import './index.css'

const borderComp = Comp => props => {
    return <div className="border">
        <Comp {...props}/>
    </div>
}

function Child(props) {
    return <div className="border">Child--{props.name}</div>
}

const ChildOne = borderComp(borderComp(borderComp(Child)))

export default function HomePage() {
    return(
        <div>
            <p>我是HomePage</p>
            <ChildOne name="lily"/>
        </div>
    )
}

// export default borderComp(Child)