import '../components/style-sheet/Counter.css'

export function Counter({ numClics }) {
    return (
        <div className='counter'>
            { numClics }
        </div>
    )
}