import ItemTarea from './ItemTarea';
import { ListGroup } from 'react-bootstrap';

const ListaTarea = ({tareas, borrarTarea}) => {
    return (
        <ListGroup>
            {
                /*naranja props, rojo funciones */
                tareas.map((tarea, indexTarea) => <ItemTarea tarea = {tarea} key = {indexTarea} borrarTarea = {borrarTarea}></ItemTarea>)
            }
        </ListGroup>
    );
};

export default ListaTarea;