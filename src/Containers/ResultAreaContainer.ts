import {connect} from 'react-redux';
import ResultArea from '../Components/ResultArea';

export const mapStateToProps = (store) => {
    return {
        result: store.fetchTask.result
    }
};

const ResultAreaContainer = connect(mapStateToProps)(ResultArea);

export default ResultAreaContainer;