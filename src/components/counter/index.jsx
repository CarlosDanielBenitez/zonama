// const [counter, setCounter] = useState(0);
// const isValidCounter = counter > 0;

// const onIncrementCounter = () => {
//   setCounter(prevValue => prevValue + 1)
// }

// const onDecrementCounter = () => {
//   if (!isValidCounter) return;
//   setCounter(prevValue => prevValue - 1)

// } 


{/* <Counter isValidCounter={isValidCounter} counter={counter} onDecrementCounter={onDecrementCounter} onIncrementCounter={onIncrementCounter} /> */}
// TO PAGE CART



export const Counter = ({counter, onDecrementCounter, onIncrementCounter, isValidCounter}) => {

    


    return (

        <div className="counterContainer">
            
            <button type="button" className='counterButton' onClick={onDecrementCounter} disabled={!isValidCounter}>-</button>
            <p>{counter}</p>
            <button type="button" className='counterButton' onClick={onIncrementCounter}>+</button>
        </div>

    )
}
