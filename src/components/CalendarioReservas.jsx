import {Calendar, dayjsLocalizer} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from 'dayjs'

export const CalendarioReservas = () => {

  const localizer = dayjsLocalizer(dayjs)

  return (
    <div className="h-1/2 w-1/2">
      <div className="border border-solid border-gray-700 rounded-md p-3">
        <h2 className="font-bold">Calendario Reservas</h2>
        <h3>Selecciona una fecha para tu reserva</h3>
        <div>
          <Calendar
            localizer={localizer}
            style={{
              height: "60vh",
              width: "70vh",
            }}
          />
        </div>
      </div>
    </div>
  );
};
