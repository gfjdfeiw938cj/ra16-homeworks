export default function Photo({photo, onDelete}) {

  return (
    <div className="photoWrapper">
      <button type="submit" onClick={() => onDelete(photo.id)}>✘</button>
      <img src={photo.url} alt="" />
    </div>
  )

}
