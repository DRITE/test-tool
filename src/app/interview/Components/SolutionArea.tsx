import * as React from 'react';

interface IProps {
    solutionValue: string,
    changeSolutionValue: (value: string) => void,
}


const SolutionArea: React.SFC<IProps> = (props: IProps) => {
    const onChange = (e: React.SyntheticEvent<any>) => {
        const value = (e.target as HTMLTextAreaElement).value;
        props.changeSolutionValue(value)
    };

    return (
        <textarea value={props.solutionValue} onChange = {onChange}/>
    )
};


export default SolutionArea;