import * as React from 'react';

interface IProps {
    result: string;
}

const ResultArea: React.SFC<IProps> = (props: IProps) => {
    return (
        <div>
            <textarea value={props.result}/>
        </div>
    )
};

export default ResultArea;