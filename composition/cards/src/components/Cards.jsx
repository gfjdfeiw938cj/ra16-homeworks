import Card from "./Card";

export default function Cards() {

  return (
    <div className="container">
      <div className="row">
        <Card
          title="Card Title"
          text="При медленном чтении происходит 0,5-0,7 неоправданных возвратов к прочитанному на одну строку. У школьников происходит 20 регрессивных движений на одну строку, у студентов — 15."
          link="//google.ru"
        >
          <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=Netology" alt="" />
        </Card>
        <Card
          title="Card Title 2"
          text="При чтении глаза читающего, глядя на разные буквы, передают разное изображение, а мозг все равно объединяет их в одну картинку."
          link="//google.ru"
        >
        </Card>
      </div>
    </div>
  );
}
