import * as React from 'react';

export interface IProps{
    text: string;
}

const TaskTitle  = (props) => {
    return <h2>{props.text}</h2>
};

export default TaskTitle;