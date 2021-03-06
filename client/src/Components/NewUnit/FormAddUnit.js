import "./FormAddUnit.css"
import {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

export default function FormAddUnit() {
    const [disabled, setDisabled] = useState('disabled');
    const [name, setName] = useState('Безымянный')
    const [health, setHealth] = useState('')
    const [armor, setArmor] = useState('')
    const [magResist, setMagResist] = useState('')
    const [positionX, setPositionX] = useState('')
    const [positionY, setPositionY] = useState('')
    const [mana, setMana] = useState('')
    const [unit, SetUnit] = useState('warrior')

    const history = useHistory();

    const handleChange = (e) => {
        if (e.target.value === "warrior") {
            setDisabled('disabled')
            SetUnit("warrior")
            setMana("")
        } else if (e.target.value === "archer") {
            setDisabled('disabled')
            SetUnit("archer")
            setMana("")
        } else if (e.target.value === "wizard") {
            setDisabled(0)
            SetUnit("wizard")
        } else {
            setDisabled('disabled')
            SetUnit("warrior")
            setMana("")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && health && positionX && positionY && armor && magResist && unit) {
            fetch('http://localhost:4000/api/unit/create', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    health,
                    positionX,
                    positionY,
                    armor,
                    magResist,
                    unit,
                    mana
                }),
            })
                .then((response) => {
                    console.log(response.status)
                    history.push('/list')
                })
        }
        clearInput();

    }

    const clearInput = () => {
        setName('Безымянный')
        setHealth('')
        setArmor('')
        setMagResist('')
        setPositionX('')
        setPositionY('')
        setMana('')
    }

    const handleName = (event) => {
        if (event.target.value) {
            setName(event.target.value);
        } else {
            setName("");
        }
    };
    const handleHealth = (event) => {
        if (event.target.value) {
            setHealth(event.target.value);
        } else {
            setHealth("");
        }
    };
    const handleArmor = (event) => {
        if (event.target.value) {
            setArmor(event.target.value);
        } else {
            setArmor("");
        }
    };
    const handlePositionX = (event) => {
        if (event.target.value) {
            setPositionX(event.target.value);
        } else {
            setPositionX("");
        }
    };
    const handlePositionY = (event) => {
        if (event.target.value) {
            setPositionY(event.target.value);
        } else {
            setPositionY("");
        }
    };
    const handleMana = (event) => {
        if (event.target.value) {
            setMana(event.target.value);
        } else {
            setMana("");
        }
    };
    const handleMagResist = (event) => {
        if (event.target.value) {
            setMagResist(event.target.value);
        } else {
            setMagResist("");
        }
    };

    return (
        <form className="formAdd" id="signInForm" onSubmit={handleSubmit}>
            <div>
                <select className="select" required onChange={(e) => handleChange(e)}>
                    <option>Выберите тип воина</option>
                    <option value="warrior">Воин</option>
                    <option value="archer">Лучник</option>
                    <option value="wizard">Маг</option>
                </select>
            </div>
            <div>
                <label>Введите имя воина</label>
                <input
                    onChange={handleName}
                    type="text"
                    required
                    value={name}
                    className="name"
                />
            </div>
            <div>
                <label>Введите количество здоровья (максимум 20)</label>
                <input
                    onChange={handleHealth}
                    type="number"
                    max="20"
                    min="2"
                    required
                    value={health}
                />
            </div>
            <div>
                <label>Введите количество защиты (максимум 10)</label>
                <input
                    onChange={handleArmor}
                    type="number"
                    max="10"
                    min="2"
                    required
                    value={armor}
                />
            </div>
            <div>
                <label>Введите количество защиты от магии (максимум 10)</label>
                <input
                    onChange={handleMagResist}
                    type="number"
                    max="10"
                    min="2"
                    required
                    value={magResist}
                />
            </div>
            <div>
                <label>Введите позицию по оси X (от 1 до 10)</label>
                <input
                    onChange={handlePositionX}
                    type="number"
                    max="10"
                    min="1"
                    required
                    value={positionX}
                />
            </div>
            <div>
                <label>Введите позицию по оси Y (от 1 до 10)</label>
                <input
                    onChange={handlePositionY}
                    type="number"
                    max="10"
                    min="1"
                    required
                    value={positionY}
                />
            </div>
            <div>
                <label>Введите количество маны (максимум 10)</label>
                <input
                    onChange={handleMana}
                    disabled={disabled}
                    type="number"
                    max="10"
                    min="2"
                    required
                    value={mana}
                />
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}
