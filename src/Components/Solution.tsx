import * as React from 'react';

interface IProps {
    solutionValue: string,
    changeSolutionValue: (value: string) => void,
}


const Solution: React.SFC<IProps> = (props: IProps) => {
    const onChange = (e: React.SyntheticEvent<any>) => {
        const value = (e.target as HTMLTextAreaElement).value;
        console.log('onChange:', value);
        props.changeSolutionValue(value)
    };

    return (
        <textarea onChange = {onChange}>
            {props.solutionValue}
        </textarea>
    )
};


export default Solution;