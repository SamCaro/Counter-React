import './style-sheet/Button.css'

export function Button({ text, buttonClic, handleclick }) {
    return (
        <button className={ buttonClic ? 'button-clic' : 'button-restart' }
        onClick={handleclick}>
            { text }
        </button>
    )
}