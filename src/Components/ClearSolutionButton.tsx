import * as React from 'react';

interface IProps {
    result: string;
    clearSolutionAndResultAreas: () => void;
}

const ClearSolutionButton: React.SFC<IProps> = (props: IProps) => {

    const handleClick = (e: React.SyntheticEvent<any>) => {
        e.preventDefault();
        props.clearSolutionAndResultAreas();
    };

    return (
        <button onClick={handleClick}>{
            (props.result === '') ? 'Очистить' : 'Решать снова'
        }
        </button>
    )
};

export default ClearSolutionButton;