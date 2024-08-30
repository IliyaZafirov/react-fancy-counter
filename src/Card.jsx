import Title from './Title'
import Count from './Count';
import ResetButton from './ResetButton';
import CountButtons from './CountButtons';

export default function Card() {
    return (
        <div className="card">
            <Title />
            <Count />
            <ResetButton />
            <CountButtons />
        </div>
    )
}
