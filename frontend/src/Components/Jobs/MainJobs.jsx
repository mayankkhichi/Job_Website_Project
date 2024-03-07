import Cards from "./Cards";
import Filter from "./Filter";
import style from "./MainJobs.module.css";
export default function MainJobs() {
  return (
    <div className={style.mainjobs}>
      <Filter />
      <Cards />
    </div>
  );
}
