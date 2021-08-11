import "./List.css"
import { memo, useEffect, useCallback } from "react";
import { useUnitsContext } from "../../contexts/unitsContext";
import { useHistory } from "react-router-dom";

export default function List() {
    const { units, setUnits } = useUnitsContext();
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:4000/api/unit/list')
            .then((response) => response.json())
            .then((data) => setUnits(data));
    }, []);



    const handleDelete = (id) => {
        fetch('http://localhost:4000/api/unit/remove/',{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
      .then((responce) => {
        if (responce.status === 200) setUnits((prev) => prev.filter((unit) => id !== unit._id))
      })
    }

    return (
<>
    {(!units.length) ? <h3 className='empty'>Воинов пока нет...</h3> : ''}
            {units.map((el) => {
                return (
                    <div key={el._id} className="box">


                        <div>{el.name}</div>
                        <div className="unit">{el.unit}</div>
                        <div className="health">Жизнь: {el.health}</div>
                        <div>Броня: {el.armor}</div>
                        <button
                            type="button"
                            onClick={() => handleDelete(el._id)}
                        >удалить


              {/*              <span>*/}
              {/*  {el.isFavorite ? <span className="px-3">⭐</span> : ""}*/}
              {/*                  <span>{el.author}</span>*/}
              {/*</span>*/}
                        </button>

                        <button
                            type="button"
                            onClick={() => history.push(`/edit/${el._id}`)}
                        >редактировать
                        </button>

                    </div>
                )
            })}
</>
    );
};

// export default memo(List)