import {connect} from 'react-redux';
import {testTaskSolution} from '../Actions/ActionCreators';
import {ITestTaskJSON} from '../Models';
import TestTaskButton from '../Components/TestTaskButton';

export const mapStateToProps = (store) => {
    return {
        solutionValue: store.fetchTask.solutionValue,
        taskId: store.fetchTask.taskId,
        solutionId: store.fetchTask.solutionId,
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        testTaskSolution: (testTaskData: ITestTaskJSON) => dispatch(testTaskSolution(testTaskData))
    }
};

const TestTaskButtonContainer = connect(mapStateToProps, mapDispatchToProps)(TestTaskButton);

export default TestTaskButtonContainer;