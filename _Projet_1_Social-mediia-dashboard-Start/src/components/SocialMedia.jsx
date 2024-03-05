import Card1 from './Card1.jsx'

export default function SocialMedia({title, text, cards1, subtitle, cards2}) {
    return (
        <>
            <h1>{title}</h1>
            <p>{text}</p>
            <div>
                <p>Dark Mode</p>
                <label className="switch">
                    <input className="checkbox" onClick={handler} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            <li>
                {cards1.map(el =>
                    <Card1 el></Card1>
                )}
            </li>
        </>
    )
}