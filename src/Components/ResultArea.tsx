import * as React from 'react';
import ReactPlayer from 'react-player';

interface IProps {
    result: string;
}

const ResultArea: React.SFC<IProps> = (props: IProps) => {

    switch (props.result) {
        case 'Test 1 - success':
            return (
                <div id={'video_id'}>
                    <ReactPlayer url='https://youtu.be/-wThTZCJ6OM' playing/>
                </div>
            );
        case '':
            return (
                <p/>
            );
        default:
            return (
                <div>
                    <textarea id={'result_textarea_id'} value={props.result}/>
                </div>
            );
    }

};

export default ResultArea;