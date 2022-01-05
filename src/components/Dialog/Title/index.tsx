import dayjs from "dayjs";
import Calendar from "dayjs/plugin/calendar";
import "./styles.css";

dayjs.extend(Calendar);

interface IProps {
  date: string;
}

const Title = ({ date }: IProps) => (
  <div className="title">
    {dayjs(date).calendar(null, {
      sameDay: "[Сегодня]",
      lastWeek: "DD MMMM",
      sameElse: "DD MMMM YYYY",
    })}
  </div>
);

export default Title;
