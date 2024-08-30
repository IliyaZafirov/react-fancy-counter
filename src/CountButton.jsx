import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export default function CountButton({ type, setCount }) {
    const handleClick = () => {
        setCount(prev => {
            if (type === 'minus') {
                return prev - 1;
            } else {
                return prev + 1;
            }
        });
    };
    return (
        <button onClick={handleClick} className="count-btn">
            {type === 'plus' && <PlusIcon className='count-btn-icon' />}
            {type === 'minus' && <MinusIcon className='count-btn-icon' />}
        </button>
    );
}