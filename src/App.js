import {useState} from "react";

function App() {
    const [botPoints, setBotPoints] = useState(0)
    const [botRed, setBotRed] = useState(0)
    const [botBlue, setBotBlue] = useState(0)
    const [botCard, setBotCard] = useState(0)

    const [tiaPoints, setTiaPoints] = useState(0)
    const [tiaRed, setTiaRed] = useState(0)
    const [tiaBlue, setTiaBlue] = useState(0)
    const [tiaCard, setTiaCard] = useState(0)

    const renderCounter = (value, setValue) => {
        return <td style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
            <button onClick={() => setValue((x) => x - 5)}>- 5</button>
            <button onClick={() => setValue((x) => x - 1)}>- 1</button>
            <strong style={{textAlign: 'center'}}>{value}</strong>
            <button onClick={() => setValue((x) => x + 1)}>+ 1</button>
            <button onClick={() => setValue((x) => x + 5)}>+ 5</button>
        </td>
    }

    return (
        <table border={1}>
            <tr>
                <th width={100}>/</th>
                <th width={300}>Bot</th>
                <th width={300}>Tia</th>
            </tr>
            <tr style={{background: '#ffff0033'}}>
                <td>Points</td>
                <td>{renderCounter(botPoints, setBotPoints)}</td>
                <td>{renderCounter(tiaPoints, setTiaPoints)}</td>
            </tr>
            <tr style={{background: '#ff000033'}}>
                <td>Red</td>
                <td>{renderCounter(botRed, setBotRed)}</td>
                <td>{renderCounter(tiaRed, setTiaRed)}</td>
            </tr>
            <tr style={{background: '#0000ff33'}}>
                <td>Blu</td>
                <td>{renderCounter(botBlue, setBotBlue)}</td>
                <td>{renderCounter(tiaBlue, setTiaBlue)}</td>
            </tr>
            <tr>
                <td>Carte</td>
                <td>{renderCounter(botCard, setBotCard)}</td>
                <td>{renderCounter(tiaCard, setTiaCard)}</td>
            </tr>
            <tr>
                <td>Totale</td>
                <td style={{textAlign: "center"}}>
                    <strong>{botPoints + Math.floor((botRed + botBlue) / 10) + botCard}</strong>
                </td>
                <td style={{textAlign: "center"}}>
                    <strong>{tiaPoints + Math.floor((tiaRed + tiaBlue) / 10) + tiaCard}</strong>
                </td>
            </tr>
        </table>
    );
}

export default App;
